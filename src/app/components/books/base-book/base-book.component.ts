import { Component, ViewContainerRef, ComponentFactoryResolver, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ToolsService } from '../../../services/tools.service';
import { LoHotspot } from '../../tools/lo-hotspot/lo-hotspot.component';
declare var $:any;

@Component({
	selector: 'app-base',
	templateUrl: './base-book.template.html'
})
export class BaseBook implements OnDestroy, OnInit{
	isTimerActive: boolean = false; //timer is visible or not
	isLoHotspotActive: boolean = false; //LoHotspot is visible or not
	toolbarConfig: any;
	sidebarConfig: any;
	timerConfig: any;
	newSelectionBoxConfig: any;
	ctr1 = 2;

	loHotspotOpenArray = [];
	dynamicLOComponent:any;
    spaceId: string;

    contentContainer:any;
    overlayContainer:any;
    timerContainer:any;
    loContainer:any;

	moduleIdToComponentMap = {};
	subscription : Subscription;
	constructor(
		public toolsService: ToolsService,
		public componentFactoryResolver: ComponentFactoryResolver
	) {
		this.toolbarConfig = this.toolsService.getToolbarConfig();
		this.sidebarConfig = this.toolsService.getSidebarConfig();
		this.timerConfig = this.toolsService.getTimerConfig();
	}

	ngOnInit(): void {
        this.subscription = new Subscription();
	}

	toggleTimer(state?: boolean) {
		if (state != undefined) {
			this.isTimerActive = state;
		} else {
			this.isTimerActive = !this.isTimerActive;
		}
		this.setToolbarProperty('isTimerActive', this.isTimerActive);
	}

	setToolbarProperty(property, value) {
		let tempConfig = JSON.parse(JSON.stringify(this.toolbarConfig));
		let target = tempConfig;
		let propArray = property.split('.');
		let propLength = propArray.length;
		for (let i = 0; i < propLength; i++) {
			if (i == propLength - 1) {
				target[propArray[i]] = value;
			} else {
				target = target[propArray[i]];
			}
		}
		this.toolbarConfig = tempConfig;
	}

	updateToolbarForSelectionBoxConfig({ isActive = this.newSelectionBoxConfig.isActive, currentFeature = this.newSelectionBoxConfig.currentFeature }) {
		this.setToolbarProperty('menus.MAIN_MENU.menu-items.delete.disabled', !isActive);
		this.setToolbarProperty('menus.PAGE_VIEW.menu-items.spotlight.disabled', !(isActive && currentFeature == 'spotlight'));
		this.setToolbarProperty('menus.PAGE_VIEW.menu-items.mask.disabled', !(isActive && currentFeature == 'mask'));
	}

	async createDynamicLOComponent(data, loContainer: ViewContainerRef) {

		// if an lo is already open, do not open it again.
		if(this.loHotspotOpenArray.indexOf(data) != -1) {
			return;
		}

		// push the jsondata into the array.
		this.loHotspotOpenArray.push(data);

		const factory = this.componentFactoryResolver.resolveComponentFactory(LoHotspot);

		// to launch only 1 component at a time close existing LOs and clear components.
		for (let moduleId in this.moduleIdToComponentMap) {
			await this.moduleIdToComponentMap[moduleId].instance.closeLoHotspot();
		}

		loContainer.clear();

		const dynamicComponent = loContainer.createComponent<LoHotspot>(factory);
		this.dynamicLOComponent = dynamicComponent;

		// provide inputs to dynamic component.
		dynamicComponent.instance.inputConfig = {
			data: data,
			selector: this.ctr1++,
            component : dynamicComponent,
            spaceId: this.spaceId
		};

		this.moduleIdToComponentMap[data['learning-object']['moduleId']] = dynamicComponent;

		// trigger a function call inside dynamic component from parent.
		dynamicComponent.instance.functionTriggeredFromBB();

		// get output from dynamic component to the parent.
		this.subscription.add(dynamicComponent.instance.closeLOOutputEvent.subscribe(jsonData => {
			let index = this.loHotspotOpenArray.indexOf(jsonData);
			if(index > -1) {
				this.loHotspotOpenArray.splice(index,index+1);
			}
		}));

		this.subscription.add(dynamicComponent.instance.bringLoWidgetOnTop.subscribe(selector => {
			this.loLatestWidgetOnTop(selector);
		}));

    }


    /* async launchLOHotSpot(data, loContainer: ViewContainerRef) {
        let productJSON = await this.productViewDataService.getClassActivityViewData({ spaceId: this.spaceId, productCode: data.courseId }).toPromise();
        console.log("productJSON: ", productJSON);

        // const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ActivityLaunch);
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ActivityView);

        loContainer.clear();

        const componentRef = loContainer.createComponent<ActivityView>(componentFactory);
        componentRef.instance.inputConfig = {
            productData: productJSON,
            productCode: data.courseId,
            userProfileData: this.authService.getUserData(),
            itemId: data.moduleId
        };
    } */


    setOverlayVariables() {
      this.contentContainer = $('.content-container');
      this.overlayContainer = $('.overlay-container');
	  this.timerContainer = $('app-timer');
	  this.loContainer = $('.lo-hotspot-container');
    }

    audioVideoLatestWidgetOnTop() {
      this.contentContainer.append(this.overlayContainer);
	  if(this.dynamicLOComponent) {
		this.dynamicLOComponent.instance.restoreDefaultZIndex();
	  }
    }

    timerLatestWidgetOnTop() {
	  this.contentContainer.append(this.timerContainer);
	  if(this.dynamicLOComponent) {
	  	this.dynamicLOComponent.instance.restoreDefaultZIndex();
	  }
	}
	
	loLatestWidgetOnTop(selector) {

		/**
		 * the append strategy is not working correctly at the moment.
		 * as soon as we append the container, lo exits.
		 * need to investigate this.
		 * $('.content-container').append($('.lo-hotspot-container'))
		 */


		// append LO container to app container to bring all LOs to top.
		// this.contentContainer.append(this.loContainer);

		// append current LO to LO container to bring current LO on top of other LOs.
		// this.loContainer.append($('#'+selector).parents('app-lo-hotspot'));
  
	}

	async closeLOHotspot() {
		if(this.dynamicLOComponent) {
			await this.dynamicLOComponent.instance.closeLoHotspot();
		}
	}

	updateLoForTocToggle(isTocActive) {
		if(this.dynamicLOComponent) {
			let sidebarContainer:any = document.querySelector('.sidebar');
			if(this.sidebarConfig["current-sidebar"] == "notes") {
				sidebarContainer = document.querySelector('.notes-wrapper');
			}
			if(this.sidebarConfig["current-sidebar"] == "dictionary") {
				sidebarContainer = document.querySelector('.dictionary-wrapper');
			}
			this.dynamicLOComponent.instance.updateLoForTocToggle(isTocActive, sidebarContainer && sidebarContainer.offsetWidth/2);
		}
	}

	LoTocToggleHandling(event) {

		if(this.dynamicLOComponent) {

			if(event.eventType == 'toc-open') {	
				this.dynamicLOComponent.instance.tocOpenWidgetHandling(event.detail);
			} else if (event.eventType == 'toc-close') {
				this.dynamicLOComponent.instance.tocCloseWidgetHandling(event.detail);
			}

		}
		
	}

	ngOnDestroy(): void {
		this.subscription.unsubscribe();
	}
    
}
