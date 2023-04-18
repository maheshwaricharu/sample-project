// To-Do
// initialize undo redo stack on page layout change
// move stage event listeners to a function
// disable undo redo and rest when hide all
// modular code for creating a stage, reading and writng local storage.


import { Component, OnInit, HostListener, ViewChild, 
     AfterViewInit, OnDestroy, ChangeDetectorRef, 
    ViewContainerRef, ComponentFactoryResolver, ViewChildren, QueryList } from '@angular/core';
// import { Router, ActivatedRoute, Params, ParamMap} from '@angular/router';
// import { trigger, style, animate, transition } from '@angular/animations';
// import * as interact from 'interactjs/dist/interact.js';

// import { BaseBook } from '../base-book/base-book.component';
// import {Subscription} from "rxjs";
// import { LoaderService } from '../../../../app/services/loader.service';
// import { AuthService } from '../../../../app/services/auth.service';
// import { MessageService } from '../../../../app/services/message.service';
// import { StudentBookService } from '../../../services/student-book.service';
// import { ImgBookHelperService } from '../../../services/img-book-helper.service';
// import { RouteNavigationService } from '../../../services/route-navigation.service';
// import { DrawingToolsService } from '../../../services/drawing-tools.service';
// import { ToolsService } from '../../../services/tools.service';
// import { AppHelperService } from '../../../../app/services/app-helper.service';
// import { Toolbar } from './../../tools/toolbar/toolbar.component';
// import { ToastComponent } from '../../tools/toaster/toast.component';

// import { Notes } from '../../tools/notes/notes.component';
// import { HtmlMetaManagerService } from '../../../../app/services/html-meta-manager.service';
// import translationsEN from '../../../../../assets/i18n/en';
// import translationsES from '../../../../../assets/i18n/es';
// import { NetwordDetectionService } from 'modules/app/services/network-detection.service';
// import { DownloadHelperService } from 'modules/desktop/services/download-helper.service';
// import { HelperService as DesktopHelperService } from 'modules/desktop/services/helper.service';
// import { appSetting } from "../../../../../config/appSettings";
// import  * as dragscroll  from 'dragscroll/dragscroll';
// import { ModalService } from '../../../services/modal.service';
// import * as Konva from 'konva/lib/Core';
// import { Line } from 'konva/lib/shapes/Line';
// import { DomSanitizer } from '@angular/platform-browser';

// import { environment } from 'environments/environment';
// import DesktopConfig from 'modules/desktop/services/config';
// import { NotesDataService } from 'modules/foc/services/notes-data.service';
// import { LastPageDataService } from 'modules/foc/services/last-page-data.service';
// import { DrawingDataService } from 'modules/foc/services/drawing-data.service';
// import { AppUnloadTrackerService } from '../../../services/app-unload-tracker.service';
// import { nanoid } from 'nanoid';
// import { XAPIHelperService } from 'modules/foc/services/xAPI-helper.service';
// import { ApiGatewayHelperService } from 'modules/app/services/apigateway-helper.service';
// import { DesktopEBookVMService } from 'modules/desktop/services/desktop-ebook-vm.service';
// import { TrackUserService } from './../../../services/track-user.service';
// import { TipModal } from '../../tools/tip-modal/tip-modal.component';
// import { DesktopAppEventsService } from 'modules/app/services/desktop-app-events-service';
// import { ProductViewDataService } from 'modules/foc/services/product-view-data.service';
// import { DesktopGlobalStateService } from 'modules/desktop/services/desktop-global-state.service';
// import { AssignmentModal } from '../../tools/assignment-modal/assignment-modal.component';
// import { Dictionary } from '../../tools/dictionary/dictionary.component';

declare var $:any;


@Component({
    selector: 'student.book',
    templateUrl: './student-book.template.html',
    styleUrls: ['./student-book.style.scss'],
})

export class StudentBook {

    // @ViewChild(Toolbar)
    // private toolbarComponent: Toolbar;
    // @ViewChild(TipModal)
    // private tipModal: TipModal;
    // @ViewChild(ToastComponent)
    // private toaster: ToastComponent;
    // @ViewChild(AssignmentModal)
    // private assignmentModal: AssignmentModal;
    // @ViewChild(Dictionary)
    // private dictionaryComponent: Dictionary;
    // isMobileToasterMessageShown:boolean = false;
    // userData:any;
    // imgBook: any; // imgbook instance (created from imgBookService)
    // studentBook: any; // book 
    // entitlements: any; // entitlements
    // bundle: any; // Umbrella
    // bundleCoverUrl: any; // for desktop only
    // sanitizeUrl: any; // for desktop only
    // jumpToPageString: any = "";
    // tocWrapper:any = {};
    // isBookDataLoaded:boolean = false;
    // isNotesBusy : boolean = false;
    // isNoteLoadFailed:boolean = false;
    // isDrawingToastShown:boolean = false;
    // isDrawingToastErrorShown:boolean = false;
    // assignableMaterialAvailable:boolean = true;
    // // In assignment modal, we wait for the user classes data. 
    // // That is why we setup an interval to check for user classes data
    // getClassesInterval:any;  
    // // activeToolbar:any; // it shows the alignment and visibility of toolbar (values - left, right, top, bottom, undefined)
    // // positionToolbar: boolean; // this is a flag for visibility of positioning icons toolbar
    // // sidebar: boolean; // this is a flag for visibility of left drawer

    // currentListView: LIST_VIEW; // shows the current active list. (Accepted values = "LESSON/UNIT")
    // currentPageLayout: any = PAGE_LAYOUT.DOUBLE; // shows current page layout (Accepted values = "single/double")
    // currentPageLabel:any; 
    // currentPage: any = []; // active page opened in imgbook (contains 1 or 2 pages)
    // currentUnit: any = {}; // active unit visible in the unit list view
    // @ViewChild('loHotspotHost', {read: ViewContainerRef}) loHotspotHost: ViewContainerRef;
    // @ViewChildren(Notes) notesChildren: QueryList<Notes>;

    // timerVisible:boolean = false; //timer is visible or not
    // timerArray:any = [0,0,0,0]; //showing 2 values each for minutes and seconds
    // timerMin:any = '00'; // minutes on timer 2 way binding
    // timerSec:any = '00'; // seconds on timer 2 way binding
    // currentTimeInSeconds:any = 0; //current total time in seconds
    // initialTimeEntered:any = 0; //time entered for the first time
    // seconds:any = 0; //seconds calculated from total time in seconds
    // minutes:any = 0; //minutes calculated from total time in seconds
    // timeCheckerforBorder:any = 0; //border color value which is dependent on time
    // timerContainerColor:any = 0; // border color value with reference to time
    // timerRunnerId:any = null; //setInterval id
    // timerMute:boolean = false; //boolean for volume in timer
    // countUpTimerValue:any = '00'; //timer value in count up state
    // timerAudio:any;
    // initialMin:any; //minutes entered on the first time in timer
    // initialSec:any; //seconds entered on the first time in timer
    // undoRedoEventHandler;
    // undoRedoEventListenerCounter = 0;
    // orientationChangeEventHandler;
    // jumpToPageHandler;
    // lastSavedLayout: any = "double";
    // jumpToPageFromNotesPanel:boolean = false;
    // translations: any;
    // bundleId;
    // bookId;

    // private notePinPositionUpdateSubscriber: Subscription;

    // // flag to specify whether the icon SVGs can be prefetched now
    // renderSVGs = false;
    // ios13ScrollTimerReference = undefined;

    // countTypes = {
    //     UP: "up",
    //     DOWN: "down"
    // }

    // timerStates = {
    //     RESET: "reset",
    //     RUNNING: "running",
    //     PAUSE: "pause",
    //     OVER: "over"
    // }

    // selectedCountType: string;
    // selectedTimerState: string;


    // previousPageLabel: any = "";
    
    // isPageLoadedObject = {}; // object to store if page has already been loaded for current book.
    
    // units: any;
    // pageNavigation: PAGE_NAVIGATION; // active (or clicked) navigation button (Accepted values = "next/prev")
    // isToggleLayoutEnabled: boolean = true;
    // isImgbookBusy : boolean = false;
    // isRoman:boolean;
    // // toolbarConfig:any;
    // nextButtonDisabled:boolean = false;
    // previousButtonDisabled:boolean = false;
    // isVideoHotSpotActive: boolean = false;
    // isOrientationChangedWhileVideoPlayerWasActive: boolean = false;
    // orientationChangeDetected: boolean = false;
    // resizeNotesPanelAsOrientationOccured:boolean = false;
    // showAssignmentLoader: boolean = true;
    // // iconConfig:any;
   
    // cookieStatus:any;

    // ebooksArray = [];
    // ebooksMap = {};
    // classId;
    // currentUserClasses;
    // orderOfClassesCallSent;
    // classesPreference;

    // notesData = {}; // to store notes data if fetched from server.
    // noteOverlays = {}; // to store the notes overlay json created from server data. this is deleted as and when the notes data is added to the book overlay json
    // pages = [];
    // pageArray = [];
    // singleNoteConfig = undefined;
    // notesConfig = {
    //     isAnyNoteActive : false
    // }

    // isPageLoadCompleted = false;
    // isBookToggleCompleted = true;
    // isOverlayJsonLoaded = false;

    // codeToColor:any = {
    //     '0' : '#000000',
    //     '1' : '#0002FF',
    //     '2' : '#B90000',
    //     '3' : '#00B32E',
    //     '4' : '#FFFF00',
    //     '5' : '#75F8F8',
    //     '6' : '#F878F8',
    //     '7' : '#78F878',
    //     '8' : '#FFFFFF'
    // }

    // colorToCode:any = {
    //     '#000000' : '0',
    //     '#0002FF' : '1',
    //     '#B90000' : '2',
    //     '#00B32E' : '3',
    //     '#FFFF00' : '4',
    //     '#75F8F8' : '5',
    //     '#F878F8' : '6',
    //     '#78F878' : '7',
    //     '#FFFFFF' : '8'
    // }

    // globalMouseDownTracker = false;

    // overlayLayerConfig:any = {};

    // overlayJson: any = {};

    // /* imgbook layout and zoom variables */
    // currentPageOrientation: any = PAGE_ORIENTATION.FIT_TO_WIDTH;  // shows page orientation (Accepted values = "FIT_TO_SCREEN/FIT_TO_WIDTH")
    // isTouchDevice: boolean = false; // to check if device is touch screen or not

    // lastSetPageOrientation: any = undefined;
    // stageA:any;
    // stage:any;
    // layer:any;
    // line:any;
    // pageZoom:any = {};
    // // pinch gestures handling (Issue - NEMO:5224)
    // pinch :any = {
    //     // stores the previous font size used to calculate scale value.
    //     "defaultFontSize": undefined,
    //     "pinchIn" : false,
    //     "pinchOut" : false,
    //     "pinchEnd" : false,
    //     // flag used to track if the default font size value was calculated inside resizeAllSelectionBoxes function
    //     "resize" : false
    // };
    // //drawing tool config     
    // drawingToolsConfig = this.drawingtoolsService.getDrawingToolsDefaultConfig();

    // storePageAJsontemp = undefined;

    // ctr = 1;
    // newFeatureCounter = {
    //     'A' : {
    //         'mask' : 0,
    //         'spotlight' : 0,
    //         'zoomHotspot' : 0,
    //         'delete' : 0
    //     },
    //     'B' : {
    //         'mask' : 0,
    //         'spotlight' : 0,
    //         'zoomHotspot' : 0,
    //         'delete' : 0
    //     }
    // };

    // newFeatureMap = {
    //     'A' : {
    //         'mask' : [],
    //         'spotlight' : [],
    //         'zoomHotspot' : []
    //     },
    //     'B' : {
    //         'mask' : [],
    //         'spotlight' : [],
    //         'zoomHotspot' : []
    //     },
    // }

    // selectionBoxCollection:any = {};

    // /**
    //  * 
    //     spotmask stored object structure
    //     selectionBoxCollection = {
    //         'pageLabel': {
    //             'mask': [],
    //             'spotlight': [],
    //             'zoomHotspot': [],
    //         },
    //         'pageLabel': {
    //             'mask': [],
    //             'spotlight': [],
    //             'zoomHotspot': [],
    //         }
    //     };

    // */

    
    // // flag to store whether the system is online or offline
    // // needed when book is launched in desktop app
    // isOnline: boolean = false;

    // subscription: Subscription;

    // isDesktopApp = false;
    // productCode: string;
    // dictionaryAvailable: boolean = false;
    // dictCode;
    
    // notes : any;//to store all note that is stored in the memory 
    // toolButtonOfflineState:boolean = true;//to handle offline handling of tools
    
    // //to store the note id and track whether the app is in capture mode or pinning mode(place pin on book on click), this pinConfig is shared between all note.component nodes in order to track which note.component is in pinning mode 
    // pinNoteConfig = {
    //     isCaptureMode: false, //to track whether app is in pinning mode or not
    //     selectedNote: null, //note id of the note for which pin has to be placed on book
    //     isEditCaptureMode: false,  //to track whether we are moving pin of note or not
    //     sideBarToggleForPinNote: false //flag to not exit capture mode in mobile while pinning note
    // };
    // originalHeight = null; //variable to hold the original height, since it changes on opening virtual keyboard in touch devices
    // keyboardHeight = null; //variable to hold the virtual keyboard height
    // selectedPDZ = null; //PDZ hotspot on which tip modal wil be shown 
    // showPDZModalTimeout = null; //variable to hold show pdz modal timeout, so that it can be cleared
    // hidePDZModalTimeout = null; //variable to hold hide pdz modal timeout, so that it can be cleared
    // maskLimit: Number = 5; // variable to hold the number of hide box that can be made on a single page
    // maskLimitToastPageDiv: any; // variable to hold the pageDiv value for which mask limit toast is shown

    // constructor(
    //     private ref: ChangeDetectorRef,
    //     private route: ActivatedRoute,
    //     private router:Router,
    //     private loaderService: LoaderService,
    //     public authService: AuthService,
    //     private messageService:MessageService,
    //     private studentBookService: StudentBookService,
    //     private imgBookHelperService: ImgBookHelperService,
    //     private routeNavigationService: RouteNavigationService,
    //     private drawingtoolsService: DrawingToolsService,
    //     public modalService: ModalService,
    //     public appHelperService: AppHelperService,
    //     public toolsService: ToolsService,
    //     public componentFactoryResolver: ComponentFactoryResolver,
    //     private sanitizer:DomSanitizer,
    //     private networkService: NetwordDetectionService,
    //     private downloadHelperService: DownloadHelperService,
    //     private desktopHelperService: DesktopHelperService,
    //     private htmlMetaManagerService : HtmlMetaManagerService,
    //     private notesDataService : NotesDataService,
    //     private lastPageDataService : LastPageDataService,
    //     private drawingDataService:DrawingDataService,
    //     private xAPIHelperService: XAPIHelperService,
    //     private apiGatewayHelperService: ApiGatewayHelperService,
    //     public appUnloadTrackerService: AppUnloadTrackerService,
    //     private desktopEBookVMService: DesktopEBookVMService,
    //     private trackUserService: TrackUserService,
    //     private desktopAppEventsService: DesktopAppEventsService,
    //     private productViewDataService: ProductViewDataService,
    //     private desktopGlobalStateService: DesktopGlobalStateService,
    // ) {
    //     super(toolsService, componentFactoryResolver);
    //     this.imgbookDblclickEventListener = this.imgbookDblclickEventListener.bind(this);
    //     this.imgbookMouseWheelEventListener = this.imgbookMouseWheelEventListener.bind(this);
    //     this.orientationChangeEventListener = this.orientationChangeEventListener.bind(this);
    //     this.windowScrollEventListener = this.windowScrollEventListener.bind(this);
    //     this.imgbookScrollEventListener = this.imgbookScrollEventListener.bind(this);
    // }  

    ngOnInit() {

        
    }

}

    // NEMO-13942 reload foc on navigation type "back_forward"
//     reloadFocOnBrowserback(event) {
//         let historyTraversal = event.persisted || checkNavigationType();;
        
//         if (historyTraversal) {
//             window.location.reload();
//         }

//         function checkNavigationType() {
//             if (window.performance && window.performance.getEntriesByType) {
//                 let performanceNavigation: any = window.performance.getEntriesByType("navigation")[0];
//                 if (performanceNavigation.type === "back_forward") {
//                     return true;
//                 }
//             }

//             return false;
//         }
//     }

//     getOrderedClasses() {
//         if(!this.currentUserClasses || this.orderOfClassesCallSent){
//             return;
//         }

//         let currTimeStamp = Date.now();
//         let newCurrentUserClasses = [];
//         this.orderOfClassesCallSent = true;

//         //Filter data, remove expired classes
//         this.currentUserClasses.forEach((classObject) => {
//             if (classObject['class']['enddate'] >= currTimeStamp) {
//                 newCurrentUserClasses.push(classObject);
//             }
//         })

//         if(newCurrentUserClasses.length > 1){
//             this.studentBookService.getClassesPreference().then((res:any) => {
//                 this.classesPreference = res.classesPreference;
//             }).catch(err => {
//                 this.classesPreference = {};
//             });
//         }

//         //Group classes according to their spaces and store them in a Map
//         let spaceToClassesArrayMap = new Map();
//         newCurrentUserClasses.forEach((nonExpiredClassObject) => {
//             let classesOfASpace = [];
//             if (spaceToClassesArrayMap.has(nonExpiredClassObject["customSpaceKey"])) {
//                 classesOfASpace = spaceToClassesArrayMap.get(nonExpiredClassObject["customSpaceKey"]);
//                 classesOfASpace.push(nonExpiredClassObject);
//             } else {
//                 spaceToClassesArrayMap.set(nonExpiredClassObject["customSpaceKey"], [nonExpiredClassObject]);
//             }
//         })

//         this.getClassesInterval = setInterval(() => {
//             if (!this.classesPreference && newCurrentUserClasses.length > 1) {
//                 this.showAssignmentLoader = true;
//             } else {
//                 clearInterval(this.getClassesInterval);
//                 this.showAssignmentLoader = false;
                
//                 if(newCurrentUserClasses.length === 1) {
//                     this.classesPreference = {};
//                 }
                
//                 let orderedUserClasses = [];
//                 spaceToClassesArrayMap.forEach((value, key) => {
//                     if (this.classesPreference.hasOwnProperty(key)) {
//                         if (this.classesPreference[key]["myCourses"].hasOwnProperty("classesOrder")) {
//                             let classesOfASpace = spaceToClassesArrayMap.get(key);
//                             this.classesPreference[key]["myCourses"]["classesOrder"].forEach((val) => {
//                                 let classObject = classesOfASpace.find(classsObject => classsObject["uuid"] === val);
//                                 if (classObject) {
//                                     orderedUserClasses.push(classObject);
//                                     classesOfASpace.splice(classesOfASpace.indexOf(classObject), 1);
//                                 }
//                             })
//                             if (classesOfASpace.length != 0) {
//                                 classesOfASpace = sortClasses(classesOfASpace, "title", "asc");
//                                 orderedUserClasses = orderedUserClasses.concat(classesOfASpace);
//                             }
//                             spaceToClassesArrayMap.delete(key);
//                         } else if (this.classesPreference[key]["myCourses"].hasOwnProperty("sort")) {

//                             //Sort classes in ascending/descending order on title/start date/end date
//                             let classesOfASpace = spaceToClassesArrayMap.get(key);
//                             let field = this.classesPreference[key]["myCourses"]["sort"]["field"];
//                             let order = this.classesPreference[key]["myCourses"]["sort"]["order"];
//                             classesOfASpace = sortClasses(classesOfASpace, field, order);
//                             orderedUserClasses = orderedUserClasses.concat(classesOfASpace);
//                             spaceToClassesArrayMap.delete(key);
//                         }
//                     } else {
//                         let classesOfASpace = spaceToClassesArrayMap.get(key);
//                         classesOfASpace = sortClasses(classesOfASpace, "title", "asc");
//                         orderedUserClasses = orderedUserClasses.concat(classesOfASpace);
//                         spaceToClassesArrayMap.delete(key);
//                     }
//                 });

//                 //If no class Preference received, sort them in ascending order on title
//                 if (spaceToClassesArrayMap.size != 0) {
//                     spaceToClassesArrayMap.forEach((arrayOfClasses) => {
//                         arrayOfClasses = sortClasses(arrayOfClasses, "title", "asc");
//                         arrayOfClasses.forEach((val) => {
//                             orderedUserClasses.push(val);
//                         })
//                     })
//                 }
//                 this.currentUserClasses = orderedUserClasses;
                
//                 // Check for assignableMaterial
//                 orderedUserClasses = orderedUserClasses.filter(classObject => classObject.products.length > 0);
//                 if (orderedUserClasses.length > 0) {
//                     this.currentUserClasses = orderedUserClasses;
//                 } else {
//                     this.assignableMaterialAvailable = false;
//                 }
//             }
//         }, 50);

//         function sortClasses(array, field, order) {
//             if (order == "asc") {
//                 if (field == "title") {
//                     array.sort((a, b) => {
//                         if (a.title.toLowerCase() < b.title.toLowerCase())
//                             return -1;
//                         if (a.title.toLowerCase() > b.title.toLowerCase())
//                             return 1;
//                         return 0;
//                     })
//                 } else if (field == "class.enddate") {
//                     array.sort((a, b) => {
//                         if (a.class.enddate < b.class.enddate)
//                             return -1;
//                         if (a.class.enddate > b.class.enddate)
//                             return 1;
//                         return 0;
//                     })
//                 } else if (field == "class.startdate") {
//                     array.sort((a, b) => {
//                         if (a.class.startdate < b.class.startdate)
//                             return -1;
//                         if (a.class.startdate > b.class.startdate)
//                             return 1;
//                         return 0;
//                     })
//                 }
//             } else {
//                 if (field == "title") {
//                     array.sort((a, b) => {
//                         if (a.title.toLowerCase() > b.title.toLowerCase())
//                             return -1;
//                         if (a.title.toLowerCase() < b.title.toLowerCase())
//                             return 1;
//                         return 0;
//                     })
//                 } else if (field == "class.enddate") {
//                     array.sort((a, b) => {
//                         if (a.class.enddate > b.class.enddate)
//                             return -1;
//                         if (a.class.enddate < b.class.enddate)
//                             return 1;
//                         return 0;
//                     })
//                 } else if (field == "class.startdate") {
//                     array.sort((a, b) => {
//                         if (a.class.startdate > b.class.startdate)
//                             return -1;
//                         if (a.class.startdate < b.class.startdate)
//                             return 1;
//                         return 0;
//                     })
//                 }
//             }
//             return array;
//         }
//     }

// 	// NEMO-5224
//     onPinchEndGesture() {
//         if((this.pinch.pinchIn || this.pinch.pinchOut)) {
            
//             let tempSize = JSON.parse(JSON.stringify(this.pinch.defaultFontSize));
//             this.resizeAllSelectionBoxes(tempSize, true);

//             this.pinch.pinchIn = false;
//             this.pinch.pinchOut = false;
//             this.pinch.pinchEnd = true;
//             this.pinch.resize = false;

//             this.pinch.defaultFontSize = parseFloat($("#imgbook").css("font-size").substring(0, $("#imgbook").css("font-size").length-2));

//         }
//         // update the zoom button enabled/ disabled status on pinch end.
//         this.updatePageViewButtonsState();      
//     }

// 	// NEMO-5224
//     onPinchOutGesture() {
//         if(!this.pinch.pinchOut) {
//             this.pinch.pinchOut = true;

//             if(!this.pinch.resize && (!this.pinch.pinchIn || this.pinch.pinchEnd)) {
//                 this.pinch.defaultFontSize = parseFloat($("#imgbook").css("font-size").substring(0, $("#imgbook").css("font-size").length-2));
//             }
            
//             this.pinch.pinchEnd = false;
//             this.pinch.resize = false;
//         }        
//     }

// 	// NEMO-5224
//     onPinchInGesture() {
//         if(!this.pinch.pinchIn) {
//             this.pinch.pinchIn = true;

//             if(!this.pinch.resize && (!this.pinch.pinchOut || this.pinch.pinchEnd)) {
//                 this.pinch.defaultFontSize = parseFloat($("#imgbook").css("font-size").substring(0, $("#imgbook").css("font-size").length-2));
//             }
            
//             this.pinch.pinchEnd = false;
//             this.pinch.resize = false;

//         }
//     }

//     async toggleBook(studentBookCode) {
        
//         if(this.studentBook.meta.code == studentBookCode) return;

//         // force sync data with server
//         // check and post pending data from local storage.
//         await this.checkAndPostPendingUserDataFromLocalStorage();
//         // sync with server and reset vm
//         this.desktopEBookVMService.syncLocalWithServer(true);
//         this.desktopEBookVMService.resetVM();

//         // close the dicitonary on ebook toggle
//         if (this.sidebarConfig["current-sidebar"] == "dictionary" && this.sidebarConfig.isActive) {
//             this.setToolbarProperty("isDictionaryActive", false);
//             this.toggleSidebar('dictionary');
//         }

//         //get page linkages
//         let currentPageLinkage = this.studentBook.meta['book-info'] && this.studentBook.meta['book-info'].pages.page.find(page => page.pagelabel==this.currentPage[0].label).pagelinks;
//         let pageLabelToBeNavigated = currentPageLinkage && currentPageLinkage[studentBookCode];

//         // reset student ebook component
//         this.resetStudentBook(true);
        
//         this.imgBookHelperService.showLoader('toggle-book-loader');

// 		let requiredQueryParams = this.appHelperService.getRequiredQueryParams(this.route.snapshot.queryParams, ['lf', 'cid', 'ltik']);
//         if(pageLabelToBeNavigated){
//             this.currentPageLabel = requiredQueryParams["page"] = pageLabelToBeNavigated;
//         }

//         if(environment.isDesktopApp) {
//             requiredQueryParams['launchMode'] = this.isOnline ? 'online' : 'offline';
//         }
        
//         this.router.navigate(['./../../', studentBookCode, 'view' ], { relativeTo: this.route, queryParams: requiredQueryParams });

//         this.toolbarComponent.studentBookEvents({"onToggleBook": true});
//     }

//     // set the user selected page orienetation (Fit to screen/Fit to width) and then resize using imgbook library
//     setPersistantPageOrientation() {
//         this.currentPageOrientation = this.currentPageOrientation || this.lastSetPageOrientation || PAGE_ORIENTATION.FIT_TO_WIDTH;
//         if(this.currentPageOrientation == PAGE_ORIENTATION.FIT_TO_SCREEN) {
//             this.imgBookHelperService.fitToScreen(this.currentPageLayout);            
//         } else {
//             this.imgBookHelperService.fitToWidth(this.currentPageLayout);
//         }
        
//         this.updatePageViewButtonsState();
//     }

//     ngAfterViewInit() {
//         this.subscription.add(this.route.paramMap.subscribe((params: ParamMap) => {
//                 setTimeout(()=> {   

//                     //NEMO-7275 : eBook page cover will be displayed for a few seconds before redirecting to the Learner Dashboard if the visibility is set to Coming Soon
//                     if(this.route.snapshot.data.bookData && this.route.snapshot.data.bookData.meta.hideContentAsRedirectImminent) {
//                         return;
//                     }

//                     // add check for online/offline if you need to enable preloading in case of online mode for downloaded book
//                     // required when displaying downloaded book from disk itself.
//                     let pagesToPreload = 4;
//                     if(environment.isDesktopApp && this.downloadHelperService.isBookDownloaded(this.studentBook.meta.code)) {
//                         pagesToPreload = 0;
//                     }
                    
//                     this.setContentViewport();
//                     let options = {
//                         "containerId" : "imgbook",
//                         "studentBook" : this.studentBook,
//                         "currentPageLabel" : ""+this.currentPageLabel,
//                         "extUserId" : this.userData.extUserId,
//                         "pagesToPreload" : pagesToPreload,
//                         "onBookDataLoad" : this.onBookDataLoad,
//                         "onPageLoad" : this.onPageLoad,
//                         "onPageLoadCalledAgain" : this.onPageLoadCalledAgain,
//                         "onOverlaySelect" : this.onOverlaySelect,
//                         "onOverlayDblClick" : this.onOverlayDblClick,
//                         "onPageLoadErrorCallback" : this.onPageLoadErrorCallback,
//                         "studentBookInstance" : this,
//                         "appState" : {
//                             "page" : ""+this.currentPageLabel,
//                             "layout" : this.currentPageLayout
//                         },
//                         "onOverlayJSONLoad" : this.onOverlayJSONLoad,
//                         "onPinchInGesture" : this.onPinchInGesture,
//                         "onPinchOutGesture" : this.onPinchOutGesture,
//                         "onPinchEndGesture" : this.onPinchEndGesture,
//                         "onPageLayoutChange" : this.onPageLayoutChange,
// 		                "swipeNextPage" : this.next,
//                         "swipePrevPage" : this.previous
//                     };

//                     this.imgBook  = this.imgBookHelperService.getImgBook(options);

//                     // show LO hotspots in case the book is downloaded and launched in offline mode.
//                     this.imgBookHelperService.setCurrentBookCode(this.studentBook.meta.code);
//                     this.imgBookHelperService.toggleLOHotspotsForNetwork(this.isOnline);


//                     // Hide Loader from body
//                     this.loaderService.hideLoader();
//                 }, 0);

//                 // page navigation panel inside TOC
//                 let that = this;
                

//                 // remove focus from button explicitly
//                 $(".foc-container").on('click', function (event) {
//                     if(document.activeElement.classList.contains('focus-visible')) {
//                         document.activeElement.classList.remove('focus-visible')
//                     }
//                     let noteId = that.toolsService.getSelectedNoteId();
//                     let noteComponent = document.querySelector('#single-note-'+noteId);
//                     let noteReference = that.toolsService.getNotefromNotesMap(noteId);
//                     if(noteComponent && !noteComponent.parentNode.parentNode.contains(event.target)){
//                         if(noteReference){
//                             noteReference.removeSelectedModeFromAllNotes();
//                         }
//                     }
//                     if(noteComponent && noteComponent.parentNode.parentNode.contains(event.target)){
//                         if(noteReference){
//                             noteReference.addSelectedNoteMode(noteId, true);
//                         }
//                     }
//                     that.toolsService.updateFocContainerClickEventData(event);

//                 });

//                 $(".foc-container").on('hide.bs.dropdown', '.feature-dropdown', function (event) {
                    
//                     setTimeout(function() {
//                         // case: when user has already opened dropdown (ex: color sub menu) and is clicking other dropdown (ex: size sub menu), 
//                         //       then we dont want to set 'current-sub-menu' as undefined 
//                         if(event.target.children[0].classList.contains("menu-button") && !event.target.children[0].classList.contains("active")) {
//                             return;
//                         } else {
//                             that.setToolbarProperty("current-sub-menu", null);
//                             that.ref.detectChanges();  
//                         }
//                     });
//                 });

//                 //NEMO-5225 - if selection box is active and mask/spotlight is active then remove selection box once orientation is changed (applicable for mobile & tablet)
//                 window.addEventListener("orientationchange", this.orientationChangeEventListener);

//                 // add global events to track mouse movements for konva.
//                 $(document).on('mousedown.studentbook', '#reader-container-wrapper', function() {
//                     that.globalMouseDownTracker = true;
//                 });
//                 $(document).on('mouseup.studentbook', '#reader-container-wrapper', function() {
//                     that.globalMouseDownTracker = false;
//                 });
//                 $(document).on('mouseleave.studentbook', '#reader-container-wrapper', function() {
//                     that.globalMouseDownTracker = false;
//                 });

//                 // NEMO-7429 scroll handling for ios 13
//                 if (window.navigator && window.navigator.userAgent) {
//                     let agent = window.navigator.userAgent;
//                     let start = agent.indexOf("OS");
//                     let version;

//                     if (agent.indexOf("iPhone") > -1 && start > -1) {
//                         version = agent.substr(start + 3, 3).replace("_", ".");
//                         if (version.indexOf("13") == 0) {
//                             window.addEventListener('scroll', this.windowScrollEventListener);
//                             document.querySelector('#imgbook').addEventListener('scroll', this.imgbookScrollEventListener);
//                         }
//                     }

//                 }

//                 that.subscription.add(that.toolsService.toolbarConfigUpdateObservable$.subscribe((keyValueObject) => {
//                     that.setToolbarProperty(keyValueObject.key, keyValueObject.value);
//                 }));
//                 that.subscription.add(that.drawingDataService.backgroundDrawingRetryResponseObservable$.subscribe((outputResponse) => {
//                     Object.keys(outputResponse).forEach((pageLabel, index)=> {
//                         let pageDIV = (index == 0) ? "A" : "B";
//                         let data = outputResponse[pageLabel].data;
//                         if(data && data != "[]") {
//                             that.paintLinesOnStageFromMinifiedJson(this["stage" + pageDIV], data);
//                             that.updateDrawingSize(pageDIV, data);
//                         }
//                     });
//                     that.getSelectionBox();   
//                     that.toolbarComponent.studentBookEvents({"onDrawingLoaded": true});

//                 }));

//                 // add an observer-subscriber to make changes whenever user drags a note hotspot.
//                 // pinUpdateData contains the changes made in x,y co-ordinates w.r.t the current hotspot position.
//                 // pinUpdateData also contains the noteId of the updated note. 
//                 that.notePinPositionUpdateSubscriber = that.imgBookHelperService.notePinPositionUpdateObservable$.subscribe((pinUpdateData) => {

//                     // for touch devices and devices with width less than 768px the hotspots are translated by 15% in x and y axis.
//                     // this is done so that the relative position of the hotspots is same w.r.t content even though the styles and size changes when checking cross devices. 
//                     // upon placing a pin or dragging the hotspots, user may feel that that in some cases, the hotspot moves upward a little.
//                     // to fix this, we have added a small correction of 15% that is translated earlier.
//                     // 15% of 4.2em (size of hotspot) multiplied by the font-size to get value in pixel. 
//                     let correction = 0;
//                     if (window.innerWidth < 768 || this.imgBookHelperService.isTouchDevice()) {
//                         correction = 0.72 * parseFloat($("#imgbook").css("font-size").substring(0, $("#imgbook").css("font-size").length - 2));
//                     }   

//                     // scale the updated co-ordinates based on imgbook zoom.
//                     let updatedCoords = this.imgBook.getScaledOriginalBookValues({ x: pinUpdateData.changeX + correction, y: pinUpdateData.changeY + correction });

//                     // find the current note from the array of all notes.
//                     this.pages.forEach(page => {
//                         page.notes.forEach(note => {

//                             // if note is found, update the position data in note.
//                             if (note.data.id == pinUpdateData.noteId) {
//                                 note.data.pinPosition.centeredData.bookCoords.positionPX.x += updatedCoords.x;
//                                 note.data.pinPosition.centeredData.bookCoords.positionPX.y += updatedCoords.y;
//                                 note.data.updatePinPosition = true;

//                                 // save the updated note position data on server using xapi.
//                                 this.updateNoteEvent({
//                                     action: "edited",
//                                     data: note
//                                 });

//                                 // add the updated note position in overlay json.
//                                 // using this method removes the existing hotspots and creates new ones. 
//                                 // thus we do not have to take care of removing the translate styles as new hotspots are created everytime. 
//                                 this.addPinOnImgBook([note]);
//                             }

//                         });

//                     });


//                 });
                
//         }));

//         this.setOverlayVariables();

//         // NEMO-5875 fix (occurs only in ios 13 mobile phones only)
//         if(window.navigator && window.navigator.userAgent) {
//             let agent = window.navigator.userAgent; 
//             let start = agent.indexOf("OS");
//             let version;

//             if(agent.indexOf("iPhone") > -1 && start > -1 ) {
//                 version = agent.substr(start+3, 3).replace("_", ".");
//                 if(version.indexOf("13") == 0) {
//                     document.documentElement.style.overflow="scroll";
//                 }
//             }
    
//         }
//     }

//     onOverlayJSONLoad(json) {
//         let overlayJSON = json;
//         this.isOverlayJsonLoaded = true;


//         // notes overlay json is appended to the book overlay json to form a combined overlay json and this combined json is used to render overlays on page.
// 		// after adding notes overlay json to combined json, notes json is deleted to ensure that same overlays are not added multiple times.
//         Object.keys(this.noteOverlays).forEach(serial => {
//             if (overlayJSON[serial]) {
//                 overlayJSON[serial] = overlayJSON[serial].concat(this.noteOverlays[serial]);
//             } else {
//                 overlayJSON[serial] = this.noteOverlays[serial];
//             }
//             delete this.noteOverlays[serial];
//         });

        
//         if(overlayJSON) {
//             this.imgBookHelperService.setOverlayJSON(json);
//             const userRole = this.authService.getUserData().role === "student"? "student": "teacher";
//             let that = this;
//             let availableLPComponents = this.bundle.products.reduce(function(result, product) {
//                     if( !that.isProductSuppressed(product) && product['ext-product'].type === 'OLP' && (product.activation.free[userRole] || product.activation.gated[userRole] && that.entitlements.entities.some(entitlement => entitlement.productcode === product['dls-product'].code))) {
//                         result[product['dls-product'].code] = product['dls-product'].code;   
//                     }
//                     return result;
//             }, {});
//             Object.keys(overlayJSON).forEach(function(pageSerial) {
//                 if(pageSerial != "overlay-config") {
//                     overlayJSON[pageSerial] = overlayJSON[pageSerial].filter(function(hotspot) {

//                         // store original predefined zoom width and height to enlarge correct area.
//                         hotspot.originalW = hotspot.w;
//                         hotspot.originalH = hotspot.h;
                        
//                         // ************* New Hotspot icons and style classes starts *************** //

//                         let classes = "customHotspotClass";

//                         if(that.imgBookHelperService.isTouchDevice()) {
//                             classes += " customTouchDeviceClass";
//                         }

//                         // add class on all pdz hotspots
//                         if(hotspot && hotspot.type == "predefined-zoom"){
//                             classes += " predefinedZoomClass";
//                         }

//                         if(hotspot && hotspot['visible-icon'] == undefined) {
//                             // NEMO-12688: PDZ icons to be made invisible and enable double-click for the same
//                             // if(hotspot.type == "predefined-zoom") {
//                             //     hotspot.w = 32;
//                             //     hotspot.h = 32;
//                             //     hotspot.meta = {
//                             //         visibility : true,
//                             //         iconType : "predefined-zoom"
//                             //     }
//                             //     classes += " customVisibleClass";
//                             // } else 
//                             if(hotspot.type == "learning-object") {
//                                 hotspot.w = 32;
//                                 hotspot.h = 32;
//                                 // different icon types will be added based on metadate recieved from builder.
//                                 hotspot.meta = {
//                                     visibility : true,
//                                     iconType : hotspot.learningPathSubType || "answer-key"
//                                 }
//                                 classes += " customVisibleClass";
//                             } else {
//                                 hotspot.meta = {
//                                     visibility : false,
//                                     iconType : hotspot.type
//                                 }
//                                 classes += " customInvisibleClass";
//                             }
//                         } else {
//                             if(hotspot.type == "learning-object") {
//                                 hotspot.w = hotspot['visible-icon'] ? 32 : hotspot.w;
//                                 hotspot.h = hotspot['visible-icon'] ? 32 : hotspot.h;
//                                 // different icon types will be added based on metadate recieved from builder.
//                                 hotspot.meta = {
//                                     visibility : hotspot['visible-icon'],
//                                     iconType : hotspot.learningPathSubType || "answer-key"
//                                 }
//                             } else if(hotspot.type == "predefined-zoom") {
//                                 // NEMO-12688: PDZ icons to be made invisible and enable double-click for the same
//                                 hotspot.meta = {
//                                     visibility: false,
//                                     iconType: hotspot.type
//                                 }
//                                 hotspot['visible-icon'] = false;
//                             } else {
//                                 hotspot.w = hotspot['visible-icon'] ? 32 : hotspot.w;
//                                 hotspot.h = hotspot['visible-icon'] ? 32 : hotspot.h;
//                                 hotspot.meta = {
//                                     visibility: hotspot['visible-icon'],
//                                     iconType: hotspot.type
//                                 }
//                             }
//                             if(hotspot['visible-icon']) {
//                                 classes += " customVisibleClass";
//                             } else {
//                                 classes += " customInvisibleClass";
//                             }
//                         }

//                         hotspot.classes = classes;
//                         // required classes change in LFIB - $currentOverlay.addClass(jsonData[pageNumber][index].classes); 

//                         // ************* New Hotspot icons and style classes ends *************** //

//                         // ************* New Hotspot tooltip starts *************** //

//                         let tooltip = "";
//                         switch (hotspot.type) {
//                             case "audio": tooltip = that.translations.FOC._COMMON_ACROSS_PAGES.HOTSPOTS.AUDIO; break;
//                             case "audio-package": tooltip = that.translations.FOC._COMMON_ACROSS_PAGES.HOTSPOTS.AUDIO; break;
//                             case "learning-object": if (hotspot.learningPathSubType == 'answer-key') {
//                                                         tooltip = that.translations.FOC._COMMON_ACROSS_PAGES.HOTSPOTS.ANSWER_KEYS;
//                                                     } else if (hotspot.learningPathSubType == 'game') {
//                                                         tooltip = that.translations.FOC._COMMON_ACROSS_PAGES.HOTSPOTS.GAME;
//                                                     } else {
//                                                         tooltip = that.translations.FOC._COMMON_ACROSS_PAGES.HOTSPOTS.ACTIVITY_LO;
//                                                     } break;
//                             case "page": tooltip = that.translations.FOC._COMMON_ACROSS_PAGES.HOTSPOTS.GO_TO_PAGE; break;
//                             case "predefined-zoom": tooltip = that.translations.FOC._COMMON_ACROSS_PAGES.HOTSPOTS.PREDEFINED_ZOOM; break;
//                             case "url": tooltip = that.translations.FOC._COMMON_ACROSS_PAGES.HOTSPOTS.EXTERNAL_LINK; break;
//                             case "video": tooltip = that.translations.FOC._COMMON_ACROSS_PAGES.HOTSPOTS.VIDEO; break;
//                             case "video-package": tooltip = that.translations.FOC._COMMON_ACROSS_PAGES.HOTSPOTS.VIDEO; break;
//                             case "note": tooltip = that.translations.FOC._COMMON_ACROSS_PAGES.HOTSPOTS.NOTE; break;
//                             default: tooltip = that.translations.FOC._COMMON_ACROSS_PAGES.HOTSPOTS.DEFAULT;
//                         }
//                         hotspot.desc = tooltip;

//                         // ************* New Hotspot tooltip ends *************** //


//                         // if hotspot is of type predefined-zoom, create a new hotspot with icon to trigger the hotspot.
//                         if(hotspot.type == "predefined-zoom") {
//                             // NEMO-12688: PDZ icons to be made invisible and enable double-click for the same
//                             hotspot.clickEvents = {singleClick: false, dblClick: true};
//                             hotspot["predefined-zoom"] = {
//                                 x: hotspot.x,
//                                 y: hotspot.y,
//                                 w: hotspot.originalW,
//                                 h: hotspot.originalH
//                             };
//                             return true;
//                         } else if(hotspot.type == "learning-object") {
//                             if( !(hotspot["learning-object"].moduleId && availableLPComponents[hotspot["learning-object"].courseId]) ) {
//                                 return false;
//                             }  
//                         } else if(hotspot.type == "page") {
//                             // empty check to prevent creation of jump to page hotspot if no page is passed.
//                             // fix for sentry issue.
//                             if(!hotspot.page || !hotspot.page.pagelabel || hotspot.page.pagelabel == undefined || hotspot.page.pagelabel == "" || hotspot.page.pagelabel == "undefined" || !that.imgBookHelperService.isPageLabelValid(hotspot.page.pagelabel)) {
//                                 return false;
//                             }
//                         } else if(hotspot.type =="url" && (!hotspot["url"] || !hotspot["url"].path )) {
//                             return false;
//                         } else if (hotspot.type == "note") {
//                             hotspot.attributesObject = {
//                                 'note-id': hotspot.note.id
//                             };
//                             let noteHotspot = $(`[note-id='${hotspot.note.id}']`);
//                             if(noteHotspot && noteHotspot.hasClass('noteSelected')){
//                                 hotspot.classes+= ' noteSelected';
//                             }
//                         }
//                         // if the hotspot does not match any criteria, then create the hotspot as it is.
//                         return true;
//                     });
//                     if(!overlayJSON[pageSerial].length) delete overlayJSON[pageSerial];
//                 }
//             });

//             this.imgBook.setOverlaysJSON(overlayJSON);
//             this.imgBookHelperService.showHotspot({"overlayJSON": true});

//         }
//     }

//     // NEMO-12776 show pdz tip modal if there is a pdz hotspot on loaded page
//     showPDZTipModal(changePosition = false) {
//         // Find all pdz hotspot elements loaded in document
//         let pdzHotspots = Array.from(document.getElementsByClassName('predefinedZoomClass'));
//         if (pdzHotspots.length === 0) {
//             return;
//         }
//         let pgLabel = (pdzHotspots[0]['id'].split("-"))[1].slice(8);
//         if((this.currentPageLayout != PAGE_LAYOUT.DOUBLE) && (pgLabel != this.currentPageLabel)){
//             return;
//         }

//         // Removing clone pdz hotspots
//         pdzHotspots = pdzHotspots.filter(hotspot => !hotspot.id.includes("clone"));

//         // Divide pdz hotspots between left and right page in case of double layout
//         // in single layout all pdz hotspots will be in left 
//         let pdzHotspotLeft = [];
//         let pdzHotspotRight = [];
//         pdzHotspots.forEach(hotspot => {
//             let hotspotBnds = hotspot.getBoundingClientRect();
//             let pageAWidth = document.getElementById('ee-overlaysA').getBoundingClientRect().width;
//             if (hotspotBnds.right > pageAWidth) {
//                 pdzHotspotRight.push(hotspot);
//             } else {
//                 pdzHotspotLeft.push(hotspot);
//             }
//         });

//         // compare function to sort pdz hotspots
//         let pdzCompareFunc = (a, b) => {
//             let bndsA = a.getBoundingClientRect();
//             let bndsB = b.getBoundingClientRect();

//             if (bndsA.top !== bndsB.top) {
//                 if (bndsA.top < bndsB.top) {
//                     return -1;
//                 } else {
//                     return 1;
//                 }
//             } else {
//                 if (bndsA.left < bndsB.left) {
//                     return -1;
//                 } else {
//                     return 1;
//                 }
//             }
//         }

//         // selected pdz will be first preferred from left page if not then from right page
//         if (pdzHotspotLeft.length > 0) {
//             pdzHotspotLeft.sort(pdzCompareFunc);
//             this.selectedPDZ = pdzHotspotLeft[0];
//         } else {
//             pdzHotspotRight.sort(pdzCompareFunc);
//             this.selectedPDZ = pdzHotspotRight[0];
//         }

//         let viewWidth = window.innerWidth || document.documentElement.clientWidth;
//         let viewHeight = (window.innerWidth || document.documentElement.clientWidth) - document.querySelector('#toolbar-wrapper-id').getBoundingClientRect().height;

//         // get coords of selected pdz and calculating position of modal
//         let bnds = this.selectedPDZ.getBoundingClientRect();
//         let position = {
//             top: (bnds.top + (bnds.height / 2)) + 8,
//             left: (bnds.left + (bnds.width / 2)) - 29
//         }

//         // Change position if modal already shown, else show modal when selected pdz is completely in the view
//         if (changePosition) {
//             $(".tip-modal-container.PDZ").css(position);
//         } else {
//             if (bnds.top >= 0 && bnds.left >= 0 && bnds.right <= (viewWidth) && bnds.bottom <= (viewHeight)) {
//                 this.tipModal.showTipModal('PDZ', position);
//             }
//         }

//         // hide tip modal after 3s 
//         if (this.hidePDZModalTimeout) {
//             clearTimeout(this.hidePDZModalTimeout);
//         }
//         this.hidePDZModalTimeout = setTimeout(() => {
//             this.tipModal.hideTipModal('PDZ');
//         }, 3000);
//     }

//     isProductSuppressed(product) {

//         // spaceid is of the form 'org_mqa-sierra-thor'.
//         let isMQA = this.studentBookService.checkIfAnySpaceIsMQA(this.route.snapshot.data.bookData.userSpaces)


//         // check if org is mqa. if true show irrespective of visibility flag.
//         // check if visibility is true, display if true.
//         // product is hidden when org is non mqa and visibility is false.
//         let isHidden = !isMQA && product && product['meta'] && (product['meta']['visibility'] == 'false' || product['meta']['visibility'] == 'coming-soon');

//         // NEMO-6677 : suppress products with visibility hidden or visibility options false.
//         if (isHidden || product && product['meta'] && product['meta']['visibility-options'] && product['meta']['visibility-options']['hide-ebooks']) {
//             return true;
//         }
//         return false;

//     }

//     // callback from LFIB that triggers when page layout is changes automatically upon resize
//     onPageLayoutChange() {
        
//         // reset page load variable for book to false on reset.
//         this.isPageLoadedObject[this.studentBook.meta.code] = false;
        
//     }
    
//     // imgbook handling - START
//     // callback  - called when imgbook is loaded
//     onBookDataLoad(status, numberOfPages) {
//         this.isBookToggleCompleted = true;
//         let that = this;
//         this.isBookDataLoaded = true;
//         this.setContentViewport();
//         let unitsInfo = this.imgBookHelperService.getUnitsInfo(this.studentBook, numberOfPages, this.currentPageLabel);

//         // onBookDataLoad is called when the studentbook content is available and the book is about to be loaded.
//         // this is called only once per book load.
//         // notes data fetched from server needs some of the variables initialized after book load and thus it is called here.
//         // this function modifies the notes data as recieved from server and generates an array of pages that contains the array of notes.
//         this.addNotesDataFetchedFromServerToApp(this.notesData);4

//         // reset notesData after use so as to not pollute the data incase user toggles imgbook
//         this.notesData = {};

//         this.units  = unitsInfo.units;
//         this.currentUnit = unitsInfo.currentUnit;
//         // if url contains a page number that does not belong to this book
//         if(!this.currentUnit) {
//             this.currentUnit = this.units[1];
//             this.currentPageLabel = this.units[1]["start-label"];
//         }

//         this.units.forEach(function(unit) {
//             that.tocWrapper[unit["id"]] = {
//                 'isOpen': false
//             };
//         });

//         this.showListView();
//         //NEMO-8007 default page view fit to width
//         this.setPersistantPageOrientation();
//         this.updatePageViewButtonsState();
//         this.isTouchDevice = this.imgBookHelperService.isTouchDevice();

//         this.toaster.isUiRendered(true);
//         // TODO : check regression for this
//         // NEMO-12688: Disabling zoom-in for imgbook on double-click
// 		// document.getElementById('imgbook').children[0].addEventListener("dblclick", function(event) {
//         //     if(that.newSelectionBoxConfig && that.newSelectionBoxConfig.currentFeature == 'zoom')  {
//         //         return;
//         //      }
//         //     that.zoomPage({zoomType:'ZOOM_IN', NativeEv:event});
//         // });
//         // document.getElementById('imgbook').children[0].addEventListener("dblclick", this.imgbookDblclickEventListener);

//         // Document Ctrl + +/-
//         $(window).on('keydown.studentbook', function (e) {
//             if ((e.ctrlKey || e.metaKey) && ((e.keyCode == 187)||(e.keyCode == 107)) ) {
//                 that.zoomPage({ zoomType: 'ZOOM_IN', NativeEv: e, zoomCentre: true});
//                 return false;
//             }
//             // check for -
//             if ((e.ctrlKey || e.metaKey) && ((e.keyCode == 189) || (e.keyCode == 109))) {
//                 that.zoomPage({ zoomType: 'ZOOM_OUT', NativeEv: e, zoomCentre: true});
//                 return false;
//             }
//             return true;
//         });

//         //Zoom in Zoom out using wheel or trackpad
//         (<any>document.getElementById('imgbook')).addEventListener('wheel', this.imgbookMouseWheelEventListener, { passive: false });
//     }

//     imgbookDblclickEventListener(event){
//         if(this.newSelectionBoxConfig && this.newSelectionBoxConfig.currentFeature == 'zoom')  {
//             return;
//          }
//         this.zoomPage({zoomType:'ZOOM_IN', NativeEv:event});
//     }

//     imgbookMouseWheelEventListener(event: WheelEvent){
//         if(!event.ctrlKey && !event.metaKey){
//             return 
//         }
//         event.preventDefault();
//         event.stopPropagation();
//         event.stopImmediatePropagation();
//         if (event.deltaY < 0) {
//             this.zoomPage({ zoomType: 'ZOOM_IN', NativeEv: event, zoomCentre: true});
//         }
//         else if (event.deltaY > 0) {
//             this.zoomPage({ zoomType: 'ZOOM_OUT', NativeEv: event, zoomCentre: true});
//         }
//     }

//     // callback - called when pages(one or two) are loaded
//     onPageLoad() {
//         // console.log('pgload');
//         // if pageload has already been called, do not call again.
//         // instead call the other page laod function.
//         if(this.isPageLoadedObject[this.studentBook.meta.code]) {
//             this.onPageLoadCalledAgain();
//             return;
//         }
//         this.isPageLoadedObject[this.studentBook.meta.code] = true;

//         this.drawingDataService.setPageLayout();
        
//         this.isImgbookBusy = false;
//         this.setContentViewport();
//         const currentPageInfo = this.imgBookHelperService.getCurrentPage(this.currentUnit, this.units, this.pageNavigation, this.jumpToPageString);
//         this.currentPage = currentPageInfo.pages;            
//         this.toolbarComponent.studentBookEvents({"onPageLoad": true, "page": this.currentPage, "totalPages" : this.units[this.units.length - 1]["end-label"]});
//         this.currentUnit = currentPageInfo.unit;
//         this.currentPageLayout = this.imgBookHelperService.getCurrentPageLayout();
//         this.setPersistantPageOrientation();
//         this.setToolbarProperty('menus.PAGE_VIEW.menu-items.single-double-page-view.currentPageLayout', this.currentPageLayout);
//         this.isImgbookBusy = false;
//         this.imgBookHelperService.hideLoader();
//         this.isToggleLayoutEnabled = this.imgBookHelperService.isToggleLayoutEnabled(this.units, this.currentUnit, this.currentPage);
//         this.setToolbarProperty('menus.PAGE_VIEW.menu-items.single-double-page-view.disabled', !this.isToggleLayoutEnabled);
//         if(this.currentUnit.label == "Cover") {
//             this.showListView();
//         }
//         dragscroll.reset();  // initializing dragscroll event listeners (since the imagebook page is loaded now)         

//         // check if the current book has dictionary available
//         if (this.studentBook["meta"] && this.studentBook["meta"]["model"] && this.studentBook["meta"]["model"]["cup-options"] 
//             && this.studentBook["meta"]["model"]["cup-options"]["dictionary"]
//             && this.studentBook["meta"]["model"]["cup-options"]["dictionary"]["code"]
//             && this.studentBook["meta"]["model"]["cup-options"]["dictionary"]["code"] != "none") {
//             this.dictCode = this.studentBook["meta"]["model"]["cup-options"]["dictionary"]["code"];
//             this.dictionaryAvailable = true;
//         }else {
//             this.dictionaryAvailable = false;
//         }

//         if(this.pageNavigation) {                               // change url param on page load
//             if(this.pageNavigation === PAGE_NAVIGATION.NEXT) {  // set url page param to next page
//                 this.currentPageLabel = this.currentPage[0].label;
//             } else {                                            // set url page param to next page
//                 this.currentPageLabel = this.currentPage[this.currentPage.length - 1].label;
//             }
//             this.resizeSidebar({"pageNavigation" : this.pageNavigation});
//             this.pageNavigation = undefined;
//         } else {
//             this.resizeSidebar();
//         }

//         /* Current page label handling in case of singe page layout.
//         ** Fixes issue in case of switching from double page layout to single page layout. */
//         if(this.currentPage && this.currentPage.length === 1) {
//             this.currentPageLabel = this.currentPage[0].label;
//         }
        
//         this.routeNavigationService.navigate(this.route, this.currentPageLabel); 
//         // prev navigation button disable handling
//         const currentPageLabels = this.currentPage.map(page => page.label);
//         if(currentPageLabels.includes(this.units[0]["start-label"])) { 
//             this.previousButtonDisabled = true;
//             this.setToolbarProperty('previousPage.disabled', this.previousButtonDisabled);
//         } else { 
//             this.previousButtonDisabled = false;
//             this.setToolbarProperty('previousPage.disabled', this.previousButtonDisabled);
//         }

//         // next navigation button disable handling        
//         if(currentPageLabels.includes(this.units[this.units.length-1]["end-label"])) { 
//             this.nextButtonDisabled = true;
//             this.setToolbarProperty('nextPage.disabled', this.nextButtonDisabled);
//         } else { 
//             this.nextButtonDisabled = false;
//             this.setToolbarProperty('nextPage.disabled', this.nextButtonDisabled); 
//         }

//         // preserving user preferred page on server
//         this.lastPageDataService.setLastPageData(this.studentBook.meta.code, this.userData.extUserId, this.spaceId, this.currentPageLabel);

//         if(!isNaN(this.currentPageLabel)) {
//             this.isRoman = false;
//         } else {
//             this.isRoman = true;
//         }

//         // #141 can undo redo on another page reinitialize the config file
//         this.drawingToolsConfig.redoStack = new Array();
//         this.drawingToolsConfig.undoStack = new Array();
//         this.setToolbarProperty('menus.PEN_MENU.menu-items.undo.disabled', true);
//         this.setToolbarProperty('menus.HIGHLIGHTER_MENU.menu-items.undo.disabled', true);
        
//         this.setToolbarProperty('menus.PEN_MENU.menu-items.redo.disabled', true);
//         this.setToolbarProperty('menus.HIGHLIGHTER_MENU.menu-items.redo.disabled', true);
        
//         let defaultFontSize = parseFloat($("#imgbook").css("font-size").substring(0, $("#imgbook").css("font-size").length-2));
//         this.drawingToolsConfig.defaultFontSize = defaultFontSize;
//         this.newSelectionBoxConfig.defaultFontSize = defaultFontSize;


//         this.setToolbarProperty('currentPageLabel', this.currentPageLabel);

//         // to destroy past stages to remove memory leaks
//         // #151 - NEMO-2996 [FOC] Unable to use drawing tools intermittently (iOS)
//         let pagesDIV;
//         let that = this;
//         if(this.currentPageLayout == PAGE_LAYOUT.DOUBLE) {
//             pagesDIV = ["A", "B"];
//         } else {
//             pagesDIV =  ["A"];
//         }
        
//         pagesDIV.forEach(function (pageDIV) {

//             if (document.querySelector('#ee-overlays-clone' + pageDIV)) {
//                 document.querySelector('#ee-overlays-clone' + pageDIV).remove();
//             }

//         });

//         // issue fix. open page in double page view with both pages having hotspots -> single page -> next page -> double page view. Validate result.
//         // hotspots missing from second page.
//         this.ref.detectChanges();
//         this.imgBookHelperService.showHotspot({"pageLoad": true});

//         // toaster message for mobile - to be shown only once
//         if(!this.isMobileToasterMessageShown) {
//             this.toaster.showToast({type:"mobile-message", "visibility" : "mobile"});
//             this.isMobileToasterMessageShown = true;
//         }

//         pagesDIV.forEach(function(pageDIV) {
//             if(that["stage" + pageDIV] !== undefined) {
//                 that["stage" + pageDIV].destroy();
//                 that["stage" + pageDIV].batchDraw();
//             }
//         });

//         this.drawingDataService.setToasterReference(this.toaster);
//         this.xAPIHelperService.setToasterReference(this.toaster);


//         this.initKonva();
//         // activate drawing tools if pen or highlighter button is clicked
//         // if(this.toolbarConfig['current-menu'] && (this.toolbarConfig['current-menu']=='PEN_MENU' || this.toolbarConfig['current-menu']=='HIGHLIGHTER_MENU')) {
//         //     this.toggleDrawingTools(true);
//         // }

//         if(this.toolbarConfig.showDrawingMenu && (this.toolbarConfig.currentTool == 'pen' || this.toolbarConfig.currentTool == 'highlighter' ) ) {
//             this.toggleDrawingTools(true);
//         }

//         // NEMO-5197 : close drawing tools menu on previous next and any page load
//         if(this.toolbarConfig.showDrawingMenu) {
//             this.toggleDrawingMenu(false);
//         }

//         // NEMO-5399 : close selection box menu on previous next and any page load
//         if(this.toolbarConfig.showSelectionBoxMenu) {
//             this.closeAllSelectionBoxes();
//             this.toggleSelectionBoxMenu(false);
//         }

//         // close lo hotspot on prev / next or any page load.
//         // need to improve this if current hotspot is visible on page single double switch.
//         let isLOHotspotVisible = this.checkIfLOHotspotVisible();
//         if(isLOHotspotVisible) {
//             this.closeLOHotspot();
//         }

//         setTimeout(() => {
//             if(!this.renderSVGs){
//                 this.renderSVGs = true;
//             }
//         });
//         setTimeout(() => {
//             this.isPageLoadCompleted = true;

//             // Add show pdz tip modal handler after page load, and bind it on scroll
//             this.pdzTipModalHandler();
//             document.querySelector('#imgbook').removeEventListener('scroll', this.pdzTipModalHandler.bind(this));
//             document.querySelector('#imgbook').addEventListener('scroll', this.pdzTipModalHandler.bind(this));
//         },500);

//         if (!this.isDesktopApp) {
//             this.getOrderedClasses();
//         }
//     }

//     pdzTipModalHandler(){
//         // NEMO-13085 don't show modal in mobile screens
//         if (window.innerWidth < 576) {
//             return;
//         }
//         if(this.selectedPDZ){
//             // if pdz already been selected, change position
//             this.showPDZTipModal(true);
//         }else{
//             // show pdz modal if not shown yet
//             if(this.showPDZModalTimeout){
//                 clearTimeout(this.showPDZModalTimeout);
//             }
//             this.showPDZModalTimeout = setTimeout(() => {
//                 this.showPDZTipModal();
//             }, 250);
//         }
//     }

//     onPageLoadErrorCallback(callerFunction, imagePath, error) {

//         if (this.downloadHelperService.isBookDownloaded(this.studentBook.meta.code)) {
//             this.navigateToUserDashboard();
//             if (this.isOnline) {
//                 $('#assetErrorModal').attr('mode', 'online');
//                 $('#assetErrorModal').modal('show');
//             } else {
//                 $('#assetErrorModal').modal('show');
//             }

//         }

//     }
//     // a callback triggered from LFIB that is called on initial launch of page after onPageLoad has been called.
//     // can be used to manipulate DOM that was not set upon initial launch.
//     // called only once on first load of ebook.
//     onPageLoadCalledAgain() {
//         this.imgBookHelperService.showHotspot();
//         // console.log('pgload2');

//     }

//     checkIfLOHotspotVisible() {

//         let loExists = false; 
//         // check for each of the two pages or single page.
//         let overlaysJSON = this.imgBook.getOverlaysJSON();
//         if(overlaysJSON && this.loHotspotOpenArray.length) {
//             this.currentPage.forEach(page => {
//                 let overlaysOfPage = overlaysJSON[page.serial];
//                 if(overlaysOfPage) {
//                     overlaysOfPage.forEach(overlay => {
//                         if(this.loHotspotOpenArray.indexOf(overlay) > -1) {
//                             loExists = true;
//                         }
//                     });
//                 }
//             });
//         }


//         if(!loExists) {
//             return true;
//         } else {
//             return false;
//         }

//     }

//     toggleUnitPanel(unit) {
//         this.tocWrapper[unit["id"]].isOpen = !this.tocWrapper[unit["id"]].isOpen;
//     }
//     /***   Drawing Tools Handling
//             initialize konva library () - this function retrieves saved stage or create a new one as the case may be, creates event handlers, and other handling (Zoom, layout, Scroll, etc)
//     ***/
//     async initKonva() {
        
//         /** @array - to identify layout (Single/Double) as - a single stage and layer is created for Single Page Layout
//                    - two stages (and layers) are created separately for Double Page Layout
//         ****/
        
//         let pagesDIV;
//         let that = this;
//         let hasLineBeenInOverlay = false; // variable to check if the line has been in an overlay and should be terminated.

//         if(this.currentPageLayout == PAGE_LAYOUT.DOUBLE) {
//             pagesDIV = ["A", "B"];
//         } else {
//             pagesDIV =  ["A"];
//         }

//         let toastId;

//         for (const pageDIV of pagesDIV) {
            
//             let drawingLayer = document.querySelector("#drawing-tools-container-" + pageDIV);
//             if (drawingLayer == null) {
//                 // creating a container for drawing tools (basically it is a canvas layer)
//                 $("#readerpagediv" + pageDIV).append("<div id='drawing-tools-container-" + pageDIV + "'  style='width:100%;height:100%;position:absolute;z-index:4;' class='drawing-tools-container'></div>");
//             }

//             // create a stage
//             that["stage" + pageDIV] = new Konva.Stage({
//                 container: 'drawing-tools-container-' + pageDIV,
//                 width: $("#ee-overlays" + pageDIV).width(),
//                 height: $("#ee-overlays" + pageDIV).height()
//             });
//             that["layer" + pageDIV] = new Konva.Layer();
//             that["stage" + pageDIV].add(that["layer" + pageDIV]);
//             that["layer" + pageDIV].batchDraw();
//             that["stage" + pageDIV].batchDraw();


//             // helper function to fetch konva stage ( drawings from api )
//             // we will fetch data for only when onpage load is called and for the page that is called.
//             // onpageload is called for every page that is loaded.
//             // for double page view it is called twice.
//             // drawback of this approach. -> we may not get latest changes by only navigation to new pages, we may have to refresh the page to get latest changes.
//             // by latest changes i mean changes made simultaneously on 2 different devices on same book same account.
            

//             // helper function
//             let bookCode = that.studentBook.meta.code;
//             let userId = that.userData.extUserId;
            
//             if(that.currentPageLayout == PAGE_LAYOUT.DOUBLE) {
//                 that.addFetchedDrawingsToRespectiveStage(bookCode, userId, [that.currentPage[0].serial, that.currentPage[1].serial]);
//             } else {
//                 that.addFetchedDrawingsToRespectiveStage(bookCode, userId, [that.currentPage[0].serial]);
//             }


//             // TODO : ADD A SNACKBAR OR TOAST TO SIGNIFY THAT GET ALL DRAWINGS IS IN PROGRESS.




            
            
            
//             // fix the issue due to multiple await calls inconsistency.
//             // load a page, go to next page, immediately return to previous page.
//             // the first page will show data for second page, as data from first page was fetched from cache and data
//             // for second page was loaded from await afterwards.
//             // if(that.currentPageLayout == PAGE_LAYOUT.DOUBLE) {
//             //     if(pageSerial != that.currentPage[0].serial && pageSerial != that.currentPage[1].serial) {
//             //         return;
//             //     }
//             // } else {
//             //     if(pageSerial != that.currentPage[0].serial) {
//             //         return;
//             //     }
//             // }


                       

//             let isPaint = false;
//             var lastPos = undefined;
//             let line;
//             let saveLastPartOfSingleContinuousLineThatWasntSaved = false;

//             that["stage" + pageDIV].on('mousedown touchstart', function(e) {
// 				// close already opened dropdown (color or stroke or zoom)
//                 if(that.toolbarConfig["current-sub-menu"]) {
//                     $("[data-menu=" + that.toolbarConfig["current-sub-menu"] + "]").trigger('click');
//                 }

//                 // close stroke color/thickness dropdown when drawing starts but is not closed

//                 if(document.querySelector(".pen-color-dropdown") && document.querySelector(".pen-color-dropdown").classList.contains('show')) {
//                     $(".pen-color-dropdown.show").click()
//                 }

//                 if(document.querySelector(".pen-stroke-dropdown") && document.querySelector(".pen-stroke-dropdown").classList.contains('show')) {
//                     $(".pen-stroke-dropdown.show").click()
//                 }

//                 if(document.querySelector(".highlighter-color-dropdown") && document.querySelector(".highlighter-color-dropdown").classList.contains('show')) {
//                     $(".highlighter-color-dropdown.show").click()
//                 }

//                 if(document.querySelector(".highlighter-stroke-dropdown") && document.querySelector(".highlighter-stroke-dropdown").classList.contains('show')) {
//                     $(".highlighter-stroke-dropdown.show").click()
//                 }

//                 if(that.isTouchDevice && e.evt.touches.length > 1) {
//                     return false;                    
//                 } 
                
//                 that.overlayLayerConfig.timerOverlay = document.querySelector('.timer-overlay-container');
//                 that.overlayLayerConfig.playerOverlay = document.querySelector('.overlay-container');
//                 that.overlayLayerConfig.maskLayerA = document.querySelector('#mask-layer-A');
//                 that.overlayLayerConfig.maskLayerB = document.querySelector('#mask-layer-B');
//                 that.overlayLayerConfig.spotlightLayerA = document.querySelector('#spotlight-layer-A');
//                 that.overlayLayerConfig.spotlightLayerB = document.querySelector('#spotlight-layer-B');
//                 that.overlayLayerConfig.zoomHotspotLayerA = document.querySelector('#zoomHotspot-layer-A');
//                 that.overlayLayerConfig.zoomHotspotLayerB = document.querySelector('#zoomHotspot-layer-B');
                
//                 // disable gestures on touch start
//                 that.imgBook.enableTouchScreenGestures({
//                     disableSwipe: true, 
//                     disablePan: true, 
//                     disablePinch: true
//                 });    

//                 if(that.drawingToolsConfig.isDrawingToolsActive) {
//                     isPaint = true;
//                     saveLastPartOfSingleContinuousLineThatWasntSaved = false;
//                     hasLineBeenInOverlay = false;
//                     var pos = that["stage" + pageDIV].getPointerPosition();
//                     lastPos = pos;
//                     // removing the decimals
//                     pos.x = Math.floor(pos.x);
//                     pos.y = Math.floor(pos.y);

//                     line = new Line({
//                         stroke: that.drawingToolsConfig.strokeColor,
//                         strokeWidth: that.drawingToolsConfig.strokewidth,
//                         opacity: that.drawingToolsConfig.opacity,
//                         globalCompositeOperation:
//                         that.drawingToolsConfig.currentTool === 'pen' ? 'source-over' :
//                         that.drawingToolsConfig.currentTool === 'highlighter' ? 'source-over' :
//                         that.drawingToolsConfig.currentTool === 'eraser' ? 'destination-out' : 'source-over',
//                         lineCap: 'round',
//                         lineJoin : 'round',
//                         tension : 0.3,
//                         points: [(pos.x), (pos.y)],
//                         fontSize: 8,
//                         tool: that.drawingToolsConfig.currentTool[0]
//                     });
//                     that["layer" + pageDIV].add(line);
//                     e.evt.preventDefault();

//                     // singleContinuousLine handling for mouse down (but, we need to handle this on mousemove callback as well)
//                     that.drawingToolsConfig.singleContinuousLine.startPageDIV = pageDIV;
//                     that.drawingToolsConfig.singleContinuousLine.currentPageDIV = pageDIV;                    
//                     that.drawingToolsConfig.singleContinuousLine.lastPosition = JSON.parse(JSON.stringify(pos));
//                     that.drawingToolsConfig.singleContinuousLine.lastLine = line;    
//                 }

//             });


//             that["stage" + pageDIV].on('mousemove touchmove mouseover', function(e) {

//                 that.drawingToolsConfig.singleContinuousLine.currentPageDIV = pageDIV;
    
//                 // updated if check to resolve 5214 regression issue.
//                 // return if the line has been in an overlay.
                
//                 if( (!isPaint && (that.drawingToolsConfig.singleContinuousLine && !that.drawingToolsConfig.singleContinuousLine.startPageDIV) ) || (!isPaint && hasLineBeenInOverlay) ) {
//                     return;
//                 }
                

//                 if(e.evt.type != 'touchmove' && !that.globalMouseDownTracker) {
//                     that["stage" + pageDIV].fire('mouseup', e);
//                     return;
//                 }

//                 if(e.evt.type == 'mouseout' || e.evt.type == 'mouseover') {
//                     if(that.checkIfParentIsOverlay(e.evt.relatedTarget) || that.checkIfParentIsFeatureLayer(e.evt.relatedTarget)) {
//                         hasLineBeenInOverlay = true;
//                         that["stage" + pageDIV].fire('mouseup', e);
//                         return;
//                     } 
//                 }

//                 let readerContainerWrapper:any = document.querySelector('#reader-container-wrapper');
//                 let imagebookScroll:any = document.querySelector('#imgbook');
//                 let sidebarContainer:any = document.querySelector('.sidebar');
//                 if(that.sidebarConfig["current-sidebar"] == "notes") {
//                     sidebarContainer = document.querySelector('.notes-wrapper');
//                 }
//                 if(that.sidebarConfig["current-sidebar"] == "dictionary") {
//                     sidebarContainer = document.querySelector('.dictionary-wrapper');
//                 }
//                 let appContainer:any = document.querySelector('.app-container');
//                 let sidebarWidth = that.sidebarConfig .position === undefined ? 0 : that.sidebarConfig.position === 'left' ? + sidebarContainer.offsetWidth: 0;
//                 let readerContainer:any = document.querySelector('#reader-container');
//                 let offL, offT, scrT, scrL;
//                 if(e.evt.type == 'mousemove') {

//                     offL = readerContainerWrapper.offsetLeft + appContainer.offsetLeft;
//                     offT = readerContainerWrapper.offsetTop + appContainer.offsetTop;
//                     scrT = imagebookScroll.scrollTop;
//                     scrL = imagebookScroll.scrollLeft;
//                     var px1  = e.evt.pageX - offL + scrL - sidebarWidth;
//                     var py1  = e.evt.pageY - offT + scrT;

//                     if (that.currentPageLayout == PAGE_LAYOUT.DOUBLE && pageDIV === 'B') {
//                         px1 = px1 - readerContainerWrapper.offsetWidth/2;
//                     }

//                     that.newFeatureMap[pageDIV]['spotlight'].concat(that.newFeatureMap[pageDIV]['zoomHotspot']).forEach(selector => {

//                         let featureBox:any = document.querySelector(selector);

//                         let x = featureBox.offsetLeft;
//                         let y = featureBox.offsetTop;
//                         let w = featureBox.offsetWidth;
//                         let h = featureBox.offsetHeight;


//                         if (!that.pointliesinbox(x, y, w, h, px1, py1)) {
//                             that["stage" + pageDIV].fire('mouseup', e);
//                             hasLineBeenInOverlay = true;
//                         }

//                     });
//                 }

//                 if(e.evt.type == 'touchmove') {                  


//                     let videoContainer = document.querySelector('.video-container');
//                     let audioContainer = document.querySelector('.audio-container');
//                     let timerContainer = document.querySelector('.timer-overlay');
//                     let loHotspots = document.querySelectorAll('.hotspot-overlay-modal');

//                     let position = {
//                         x : Math.round(e.evt.touches[0].pageX),
//                         y : Math.round(e.evt.touches[0].pageY)
//                     };

//                     let left, top, width, height;


//                     if(audioContainer) {
//                         left = Math.round(audioContainer.getBoundingClientRect().left);
//                         top = Math.round(audioContainer.getBoundingClientRect().top);
//                         width = Math.round(audioContainer.getBoundingClientRect().width);
//                         height = Math.round(audioContainer.getBoundingClientRect().height);

//                         if(that.pointliesinbox(left, top, width, height, position.x, position.y)) {
//                             that["stage" + pageDIV].fire('touchend', e);
//                             hasLineBeenInOverlay = true;
//                         }

//                     }

//                     if(videoContainer) {
//                         left = Math.round(videoContainer.getBoundingClientRect().left);
//                         top = Math.round(videoContainer.getBoundingClientRect().top);
//                         width = Math.round(videoContainer.getBoundingClientRect().width);
//                         height = Math.round(videoContainer.getBoundingClientRect().height);
                        
//                         if(that.pointliesinbox(left, top, width, height, position.x, position.y)) {
//                             that["stage" + pageDIV].fire('touchend', e);
//                             hasLineBeenInOverlay = true;
//                         }

//                     }

//                     if(timerContainer) {
//                         left = Math.round(timerContainer.getBoundingClientRect().left);
//                         top = Math.round(timerContainer.getBoundingClientRect().top);
//                         width = Math.round(timerContainer.getBoundingClientRect().width);
//                         height = Math.round(timerContainer.getBoundingClientRect().height);
                        
//                         if(that.pointliesinbox(left, top, width, height, position.x, position.y)) {
//                             that["stage" + pageDIV].fire('touchend', e);
//                             hasLineBeenInOverlay = true;
//                         }

//                     }

//                     if (loHotspots) {
//                         Array.from(loHotspots).forEach(hotspot => {

//                             left = Math.round(hotspot.getBoundingClientRect().left);
//                             top = Math.round(hotspot.getBoundingClientRect().top);
//                             width = Math.round(hotspot.getBoundingClientRect().width);
//                             height = Math.round(hotspot.getBoundingClientRect().height);

//                             if(that.pointliesinbox(left, top, width, height, position.x, position.y)) {
//                                 that["stage" + pageDIV].fire('touchend', e);
//                             }

//                         });

//                     }


//                     offL = readerContainerWrapper.offsetLeft + appContainer.offsetLeft;
//                     offT = readerContainerWrapper.offsetTop + appContainer.offsetTop;
//                     scrT = -imagebookScroll.scrollTop;
//                     scrL = -imagebookScroll.scrollLeft;

//                     var str = readerContainer.style.transform; 
//                     // scenario: when zoom level is at default (NO ZOOM)
//                     if (str === '') {
//                         scrL = -imagebookScroll.scrollLeft;
//                         scrT = -imagebookScroll.scrollTop;
//                     }
//                     // scenario (limited) : when view port is translated instead of scroll
//                     else if (str.match('translate3d') !== null && str.match('translate3d').length > 0) {
//                         scrL = +readerContainer.style.transform.match(/(-?[0-9\.]+)/g)[1];
//                         scrT = +readerContainer.style.transform.match(/(-?[0-9\.]+)/g)[2];
//                     }
//                     // scenario (limited) : used only for emulator
//                     else if (str.match('translate') !== null && str.match('translate').length > 0) {
//                         scrT = -imagebookScroll.scrollTop;
//                         scrL = -imagebookScroll.scrollLeft;
//                     }


//                     // get page event co-ordinates and apply correction to it.
//                     var px  = e.evt.touches[0].pageX - offL - scrL - sidebarWidth;
//                     var py  = e.evt.touches[0].pageY - offT - scrT;

//                     if (that.currentPageLayout == PAGE_LAYOUT.DOUBLE && pageDIV === 'B') {
//                         px = px - readerContainerWrapper.offsetWidth/2;
//                     }

//                     that.newFeatureMap[pageDIV]['spotlight'].concat(that.newFeatureMap[pageDIV]['zoomHotspot']).forEach(selector => {

//                         let featureBox:any = document.querySelector(selector);

//                         let x = featureBox.offsetLeft;
//                         let y = featureBox.offsetTop;
//                         let w = featureBox.offsetWidth;
//                         let h = featureBox.offsetHeight;


//                         // if the pointer lies in any of the selection box, set flag to true.
//                         if (!that.pointliesinbox(x, y, w, h, px, py)) {
//                             that["stage" + pageDIV].fire('touchend', e);
//                             hasLineBeenInOverlay = true;

//                         }

//                     });

//                     that.newFeatureMap[pageDIV]['mask'].forEach(selector => {

//                         let featureBox:any = document.querySelector(selector);

//                         let x = featureBox.offsetLeft;
//                         let y = featureBox.offsetTop;
//                         let w = featureBox.offsetWidth;
//                         let h = featureBox.offsetHeight;


//                         // if the pointer lies in any of the selection box, set flag to true.
//                         if (that.pointliesinbox(x, y, w, h, px, py)) {
//                             that["stage" + pageDIV].fire('touchend', e);
//                             hasLineBeenInOverlay = true;

//                         }

//                     });

//                     if(that.drawingToolsConfig.isDrawingToolsActive) { 
//                         let stageWidth = Math.floor($("#readerpagediv" + pageDIV).width());
//                         let lastPosition = Math.floor(that.drawingToolsConfig.singleContinuousLine.lastPosition.x); 
//                         let pointerPosition = Math.floor(that["stage" + pageDIV].getPointerPosition().x);

//                         if(pageDIV == "A") {                            

//                             if(that.drawingToolsConfig.singleContinuousLine 
//                                 && that.drawingToolsConfig.singleContinuousLine.lastPosition
//                                 && lastPosition < stageWidth
//                                 && pointerPosition >= stageWidth) {

//                                 that.drawingToolsConfig.singleContinuousLine.startPageDIV = "A";
//                                 that.drawingToolsConfig.singleContinuousLine.currentPageDIV = "B";

//                             } else if(lastPosition >= stageWidth && pointerPosition > stageWidth) {

//                                 that.drawingToolsConfig.singleContinuousLine.startPageDIV = "B";
//                                 that.drawingToolsConfig.singleContinuousLine.currentPageDIV = "B";
                                
//                             } else if(lastPosition >= stageWidth
//                                 && pointerPosition < stageWidth) {

//                                 that.drawingToolsConfig.singleContinuousLine.startPageDIV = "B";
//                                 that.drawingToolsConfig.singleContinuousLine.currentPageDIV = "A";

//                             } else {
//                                 that.drawingToolsConfig.singleContinuousLine.startPageDIV = "A";
//                                 that.drawingToolsConfig.singleContinuousLine.currentPageDIV = "A";   
//                             }
                            
//                         } else if(pageDIV == "B") {
                            
//                             if(that.drawingToolsConfig.singleContinuousLine 
//                                 && lastPosition
//                                 && lastPosition > 0
//                                 && pointerPosition <= 0) {

//                                 that.drawingToolsConfig.singleContinuousLine.startPageDIV = "B";
//                                 that.drawingToolsConfig.singleContinuousLine.currentPageDIV = "A";
                                
//                             } else if(lastPosition <= 0
//                                 && pointerPosition < 0) {

//                                 that.drawingToolsConfig.singleContinuousLine.startPageDIV = "A";
//                                 that.drawingToolsConfig.singleContinuousLine.currentPageDIV = "A";

//                             } else if(lastPosition < 0
//                                 && pointerPosition >= 0) {

//                                 that.drawingToolsConfig.singleContinuousLine.startPageDIV = "A";
//                                 that.drawingToolsConfig.singleContinuousLine.currentPageDIV = "B";
                                
//                             } else {
//                                 if(lastPosition == pointerPosition && lastPosition==0) {
//                                     if(that.drawingToolsConfig.singleContinuousLine.startPageDIV == "B" &&
//                                         that.drawingToolsConfig.singleContinuousLine.currentPageDIV == "A") {
//                                         that.drawingToolsConfig.singleContinuousLine.startPageDIV = "A";
//                                         that.drawingToolsConfig.singleContinuousLine.currentPageDIV = "A";

//                                     } else if(that.drawingToolsConfig.singleContinuousLine.startPageDIV == "A" &&
//                                         that.drawingToolsConfig.singleContinuousLine.currentPageDIV == "B") {
//                                         that.drawingToolsConfig.singleContinuousLine.startPageDIV = "B";
//                                         that.drawingToolsConfig.singleContinuousLine.currentPageDIV = "B";
//                                     }   
//                                 } else {
//                                     that.drawingToolsConfig.singleContinuousLine.startPageDIV = "B";
//                                     that.drawingToolsConfig.singleContinuousLine.currentPageDIV = "B";   
//                                 }   
//                             }
//                         }
//                     }
//                 }

//                 if(that.isTouchDevice && e.evt.touches.length > 1) {
//                     return false;
//                 }

//                 if(that.drawingToolsConfig.isDrawingToolsActive) {

//                     if(!isPaint && (that.drawingToolsConfig.singleContinuousLine && !that.drawingToolsConfig.singleContinuousLine.startPageDIV)) {
//                         return;
//                     }

//                     if(that.drawingToolsConfig.singleContinuousLine && that.drawingToolsConfig.singleContinuousLine.startPageDIV) {
                        
//                         // When user is moving from one stage to the other (Ex: from Stage A to Stage B)
//                         if(that.drawingToolsConfig.singleContinuousLine.startPageDIV != undefined && that.drawingToolsConfig.singleContinuousLine.currentPageDIV != that.drawingToolsConfig.singleContinuousLine.startPageDIV) {
                            
//                             that.drawingToolsConfig.singleContinuousLine.isSingleContinuousLine = true;
//                             that.drawingToolsConfig.singleContinuousLine.id = that.drawingToolsConfig.singleContinuousLine.id ? that.drawingToolsConfig.singleContinuousLine.id : (new Date()).getTime();

//                             let pos =  JSON.parse(JSON.stringify(that.drawingToolsConfig.singleContinuousLine.lastPosition));
                            
//                             let lastPoint;
//                             let lastLine;
//                             let lastDIV;

//                             if((e.evt.type == 'touchmove' && that.drawingToolsConfig.singleContinuousLine.startPageDIV == "A") || (e.evt.type != 'touchmove' && pageDIV == "B")) {
//                                 lastDIV = "A";
//                                 pos.x = 0;
//                                 // last coordinates for line on stage A ( if user moves from stage A to stage B, we have to populate last coordinate for line on stage A)
//                                 lastPoint = {x: $("#readerpagedivA").width(), y: pos.y};
//                                 lastLine = that.drawingToolsConfig.singleContinuousLine.lastLine;
                                
//                                 let newPoints = lastLine.points().concat([(lastPoint.x), (lastPoint.y)]);  
//                                 lastLine.points(newPoints);
//                                 let scale = that.drawingToolsConfig.defaultFontSize/parseFloat($("#imgbook").css("font-size").substring(0, $("#imgbook").css("font-size").length-2));
//                                 lastLine.scale({x:scale, y:scale});
//                                 lastLine.strokeWidth(that.drawingToolsConfig.strokewidth / scale);
//                                 that["stage" + lastDIV].batchDraw();
//                                 that.newBlurDrawingTools();
//                                 e.evt.preventDefault();
                            
//                             } else if((e.evt.type == 'touchmove' && that.drawingToolsConfig.singleContinuousLine.startPageDIV == "B") || (e.evt.type != 'touchmove' && pageDIV=="A")) {
//                                 lastDIV = "B";
//                                 pos.x = $("#readerpagedivA").width();
                                
//                                 // last coordinates for line on stage B ( if user moves from stage B to stage A, we have to populate last coordinate for line on stage B)
//                                 lastPoint = {x: 0, y: pos.y};
                                
//                                 lastLine = that.drawingToolsConfig.singleContinuousLine.lastLine;
//                                 let newPoints = lastLine.points().concat([(lastPoint.x), (lastPoint.y)]);  
//                                 lastLine.points(newPoints);
//                                 let scale = that.drawingToolsConfig.defaultFontSize/parseFloat($("#imgbook").css("font-size").substring(0, $("#imgbook").css("font-size").length-2));
//                                 lastLine.scale({x:scale, y:scale});
//                                 lastLine.strokeWidth(that.drawingToolsConfig.strokewidth / scale);
//                                 that["stage" + lastDIV].batchDraw();
//                                 that.newBlurDrawingTools();
//                                 e.evt.preventDefault();
//                             }

//                             lastLine.attrs.fontSize = parseFloat($("#imgbook").css("font-size").substring(0, $("#imgbook").css("font-size").length-2));
//                             let json = that.getMinifiedJsonFromStage(that["stage" + lastDIV]);
//                             let serial = lastDIV == "A" ? that.currentPage[0].serial : that.currentPage[1].serial;
//                             // drawing a line for A->B without mouseup
//                             that.updateDrawingSize(pageDIV, json);
//                             if(!that.checkIfDrawingSizeExceedesLimit(pageDIV)) {
//                                 that.drawingDataService.saveDrawingData(json,serial);
//                             }
//                             e.evt.preventDefault(); 

//                             if(that.drawingToolsConfig.undoStack && that.drawingToolsConfig.undoStack.length && that.drawingToolsConfig.undoStack[that.drawingToolsConfig.undoStack.length-1].line && 
//                                 that.drawingToolsConfig.undoStack[that.drawingToolsConfig.undoStack.length-1].line._id == lastLine._id) {

//                                 that.drawingToolsConfig.undoStack[that.drawingToolsConfig.undoStack.length-1].type = "singleContinuousLine";
//                                 that.drawingToolsConfig.undoStack[that.drawingToolsConfig.undoStack.length-1].id = that.drawingToolsConfig.singleContinuousLine.id;
                            
//                             } else {
                                
//                                 let temp = {
//                                     type : 'singleContinuousLine',
//                                     line : lastLine,
//                                     pageDiv : lastDIV,
//                                     stageAjson : '',
//                                     stageBjson : '',
//                                     id: that.drawingToolsConfig.singleContinuousLine.isSingleContinuousLine ? that.drawingToolsConfig.singleContinuousLine.id : undefined
//                                 };    
                                
//                                 that.drawingToolsConfig.undoStack.push(temp);
//                                 that.drawingToolsConfig.redoStack = new Array();
//                                 that.setToolbarProperty('menus.PEN_MENU.menu-items.redo.disabled', true);
//                                 that.setToolbarProperty('menus.HIGHLIGHTER_MENU.menu-items.redo.disabled', true);   
                                
//                                 that.setToolbarProperty('menus.PEN_MENU.menu-items.undo.disabled', false);
//                                 that.setToolbarProperty('menus.HIGHLIGHTER_MENU.menu-items.undo.disabled', false);                      
//                             }

//                             that["stage" + lastDIV].batchDraw();
                            
//                             // removing the decimals
//                             pos.x = Math.floor(pos.x);
//                             pos.y = Math.floor(pos.y);


//                             line = new Line({
//                                 stroke: that.drawingToolsConfig.strokeColor,
//                                 strokeWidth: that.drawingToolsConfig.strokewidth,
//                                 opacity: that.drawingToolsConfig.opacity,
//                                 globalCompositeOperation:
//                                 that.drawingToolsConfig.currentTool === 'pen' ? 'source-over' :
//                                 that.drawingToolsConfig.currentTool === 'highlighter' ? 'source-over' :
//                                 that.drawingToolsConfig.currentTool === 'eraser' ? 'destination-out' : 'source-over',
//                                 lineCap: 'round',
//                                 lineJoin : 'round',
//                                 tension : 0.3,
//                                 points: [(pos.x), (pos.y)],
//                                 fontSize: 8,
//                                 tool: that.drawingToolsConfig.currentTool[0]
//                             });

//                             if(that.drawingToolsConfig.undoStack && that.drawingToolsConfig.undoStack.length && that.drawingToolsConfig.undoStack[that.drawingToolsConfig.undoStack.length-1].line 
//                                 && that.drawingToolsConfig.undoStack[that.drawingToolsConfig.undoStack.length-1].line._id == line._id) {
//                                 that.drawingToolsConfig.undoStack[that.drawingToolsConfig.undoStack.length-1].type = "singleContinuousLine";
//                                 that.drawingToolsConfig.undoStack[that.drawingToolsConfig.undoStack.length-1].id = that.drawingToolsConfig.singleContinuousLine.id;
//                             } else {
//                                 let temp = {
//                                     type : 'singleContinuousLine',
//                                     line : line,
//                                     pageDiv : (e.evt.type == 'touchmove' ? that.drawingToolsConfig.singleContinuousLine.currentPageDIV : pageDIV),
//                                     stageAjson : '',
//                                     stageBjson : '',
//                                     id: that.drawingToolsConfig.singleContinuousLine.isSingleContinuousLine ? that.drawingToolsConfig.singleContinuousLine.id : undefined
//                                 };

//                                 saveLastPartOfSingleContinuousLineThatWasntSaved = true;
//                                 lastPos = JSON.parse(JSON.stringify(pos));

//                                 that.drawingToolsConfig.undoStack.push(temp);
//                                 that.drawingToolsConfig.redoStack = new Array();
//                                 that.setToolbarProperty('menus.PEN_MENU.menu-items.redo.disabled', true);
//                                 that.setToolbarProperty('menus.HIGHLIGHTER_MENU.menu-items.redo.disabled', true);   
                                
//                                 that.setToolbarProperty('menus.PEN_MENU.menu-items.undo.disabled', false);
//                                 that.setToolbarProperty('menus.HIGHLIGHTER_MENU.menu-items.undo.disabled', false);                      
//                             }
                            
//                             let actualPageDIV;
//                             actualPageDIV = (e.evt.type == 'touchmove' ? that.drawingToolsConfig.singleContinuousLine.currentPageDIV : pageDIV);
                            
//                             that["layer" + actualPageDIV].add(line);
//                             e.evt.preventDefault();

//                             that.drawingToolsConfig.singleContinuousLine.lastPosition = JSON.parse(JSON.stringify(pos));
                            
//                             if(e.evt.type == 'touchmove') {
//                                 let tempPos = that["stage" + pageDIV].getPointerPosition();
                                
//                                 if(pageDIV == "A") {
//                                     that.drawingToolsConfig.singleContinuousLine.lastPosition = JSON.parse(JSON.stringify(tempPos));            
//                                 } else if(pageDIV == "B") {
//                                     that.drawingToolsConfig.singleContinuousLine.lastPosition = JSON.parse(JSON.stringify(tempPos));            
//                                 }
//                             }

//                             that.drawingToolsConfig.singleContinuousLine.startPageDIV = that.drawingToolsConfig.singleContinuousLine.currentPageDIV;
//                             that.drawingToolsConfig.singleContinuousLine.lastLine = line;
                            
//                             return;
//                         }
//                     }

//                     let pos = that["stage" + pageDIV].getPointerPosition();
//                     let actualPageDIV;

//                     let touchLastPosition = JSON.parse(JSON.stringify(pos));
                    
//                     if(e.evt.type == 'touchmove') { 
//                         if(pageDIV == "A") {
//                             actualPageDIV = "A";
//                             if(that["stageA"].getPointerPosition().x > $("#readerpagedivA").width()) {
//                                 pos.x = pos.x - $("#readerpagedivA").width();         
//                                 actualPageDIV = "B";
//                             }
//                         } else if(pageDIV == "B") {
//                             actualPageDIV = "B";
//                             if(that["stageB"].getPointerPosition().x < 0) {
//                                 pos.x = $("#readerpagedivA").width() - Math.abs(pos.x);  
//                                 actualPageDIV = "A";
//                             }
//                         } 
//                     } else {
//                         actualPageDIV = pageDIV;
//                     }

//                     // removing the decimals
//                     pos.x = Math.floor(pos.x);
//                     pos.y = Math.floor(pos.y);

//                     // added resolution method
//                     var resolution = 3;
//                     var temp = line.points().length;
//                     var lastpoint = line.points();
//                     var lastX = lastpoint[temp-2];
//                     var lastY = lastpoint[temp-1];
//                     var newX = pos.x;
//                     var newY = pos.y;
//                     var dx = newX - lastX;
//                     var dy = newY- lastY;
//                     if( Math.sqrt(dx*dx + dy*dy ) < resolution) return;
                    
//                     var newPoints = line.points().concat([(pos.x), (pos.y)]);
//                     line.points(newPoints);
//                     let scale = that.drawingToolsConfig.defaultFontSize/parseFloat($("#imgbook").css("font-size").substring(0, $("#imgbook").css("font-size").length-2));
//                     line.scale({x:scale, y:scale});
//                     line.strokeWidth(that.drawingToolsConfig.strokewidth / scale);
                    
//                     that["stage" + actualPageDIV].batchDraw();
//                     that.newBlurDrawingTools();

//                     e.evt.preventDefault();   
                    
//                     if(e.evt.type != 'touchmove') {
//                         that.drawingToolsConfig.singleContinuousLine.startPageDIV = pageDIV;
//                         that.drawingToolsConfig.singleContinuousLine.currentPageDIV = pageDIV;
//                         that.drawingToolsConfig.singleContinuousLine.lastPosition = JSON.parse(JSON.stringify(pos));
//                     } else {
//                         that.drawingToolsConfig.singleContinuousLine.lastPosition = JSON.parse(JSON.stringify(touchLastPosition));
                        
//                     }
                    
//                     that.drawingToolsConfig.singleContinuousLine.lastLine = line; 
//                 }
//             });

//             that["stage" + pageDIV].on('mouseup mouseleave touchend', function(e) {
                
//                 if((pageDIV == "A" && (that["stageA"].getPointerPosition().x <= 0 || 
//                                        that["stageA"].getPointerPosition().y <= 0 || 
//                                        that["stageA"].getPointerPosition().y >= $("#readerpagedivA").height())) ||
//                     (pageDIV == "B" && (that["stageB"].getPointerPosition().x >= $("#readerpagedivB").width() || 
//                                        that["stageB"].getPointerPosition().y <= 0 || 
//                                        that["stageB"].getPointerPosition().y >= $("#readerpagedivB").height())) ||
//                     e.evt.type == "mouseup" || e.evt.type == "touchend") {

//                     that.drawingToolsConfig.singleContinuousLine = {
//                         "startPageDIV" : undefined,
//                         "currentPageDIV" : undefined,
//                         "lastPosition" : undefined,
//                         "lastLine" : undefined,
//                         "isSingleContinuousLine" : undefined,
//                         "id": undefined
//                     };    
//                 }

//                 if(e.type == 'mouseleave' && line && hasLineBeenInOverlay) {


//                     that.newFeatureMap[pageDIV]['spotlight'].concat(that.newFeatureMap[pageDIV]['zoomHotspot']).forEach(selector => {

//                         let featureBox:any = document.querySelector(selector);
    
//                         let x = featureBox.offsetLeft;
//                         let y = featureBox.offsetTop;
//                         let w = featureBox.offsetWidth;
//                         let h = featureBox.offsetHeight;

//                         let pts = that.calculateLastCoordinates(x,y,w,h,line.points());

//                         line.points(pts);

//                         that["stage" + pageDIV].batchDraw();
//                         setTimeout(function() {
//                             that.newBlurDrawingTools();
//                         });

//                     });
//                 }

//                 if (!isPaint && !saveLastPartOfSingleContinuousLineThatWasntSaved) {
//                     return;
//                 }

//                 if(e.evt.type == 'mouseout' && e.evt.relatedTarget == null) {
//                     return;
//                 }

//                 if(that.isTouchDevice && e.evt.touches.length > 1) {
//                     return false;
//                 }

//                 if(that.drawingToolsConfig.isDrawingToolsActive) {
//                     isPaint = false;


//                     let pos = that["stage" + pageDIV].getPointerPosition();

//                     // removing the decimals
//                     pos.x = Math.floor(pos.x);
//                     pos.y = Math.floor(pos.y);

//                     // to draw a dot on canvas
//                     if(pos.x === lastPos.x && pos.y === lastPos.y) {
//                         // add 0.1 so that a dot is drawn in IE, Edge and Ipad
//                         line.points(line.points().concat([(pos.x + 0.1), (pos.y + 0.1)]));
//                         let scale = that.drawingToolsConfig.defaultFontSize/parseFloat($("#imgbook").css("font-size").substring(0, $("#imgbook").css("font-size").length-2));
//                         line.scale({x:scale, y:scale});
//                         line.strokeWidth(that.drawingToolsConfig.strokewidth / scale);

//                         // to remove the dot if the menu was open
//                         if(that.toolbarConfig['current-sub-menu'] !== null) {
//                             line.remove();
//                         }

//                     }
                    
//                     line.attrs.fontSize = parseFloat($("#imgbook").css("font-size").substring(0, $("#imgbook").css("font-size").length-2));
//                     let json = that.getMinifiedJsonFromStage(that["stage" + pageDIV]);
//                     let serial = pageDIV == "A" ? that.currentPage[0].serial : that.currentPage[1].serial;

//                     // excess mouseleave events triggered when drawing accross pages and we move mouse from b->a without drawing.
//                     if(e.type != 'mouseleave') {
//                         that.updateDrawingSize(pageDIV, json);
//                         if(!that.checkIfDrawingSizeExceedesLimit(pageDIV)) {
//                             that.drawingDataService.saveDrawingData(json,serial);
//                         }
//                     }


//                     e.evt.preventDefault();    


//                     // need to explicilty store the stage for other page as touch end event is not fired from that page.
//                     if(e.evt.type == 'touchend' && saveLastPartOfSingleContinuousLineThatWasntSaved) {
//                         if(that.currentPageLayout == PAGE_LAYOUT.DOUBLE && pageDIV == 'A') {
//                             let json = that.getMinifiedJsonFromStage(that["stage" + 'B']);
//                             let serial = that.currentPage[1].serial;

//                             that.updateDrawingSize(pageDIV, json);
//                             if(!that.checkIfDrawingSizeExceedesLimit(pageDIV)) {
//                                 that.drawingDataService.saveDrawingData(json,serial);
//                             }


//                         } else if(that.currentPageLayout == PAGE_LAYOUT.DOUBLE && pageDIV == 'B') {
//                             let json = that.getMinifiedJsonFromStage(that["stage" + 'A']);
//                             let serial = that.currentPage[0].serial;
                        
//                             that.updateDrawingSize(pageDIV, json);
//                             if(!that.checkIfDrawingSizeExceedesLimit(pageDIV)) {
//                                 that.drawingDataService.saveDrawingData(json,serial);
//                             }

//                         }
//                     }

//                     that.drawingToolsConfig.redoStack = new Array();
//                     that.setToolbarProperty('menus.PEN_MENU.menu-items.redo.disabled', true);
//                     that.setToolbarProperty('menus.HIGHLIGHTER_MENU.menu-items.redo.disabled', true);   
//                     // that.undoStack.push(line);   

//                     var temp = {
//                         type : 'line',
//                         line : line,
//                         pageDiv : pageDIV,
//                         stageAjson : '',
//                         stageBjson : '',
//                         id: undefined
//                     }

//                     that["stage" + pageDIV].batchDraw();
//                     // #137 Disable eraseall on empty stage (eraser part)
//                     if (that.drawingToolsConfig.currentTool === 'eraser' && that["stage" + pageDIV].children[0].children.length === 1) {
//                         line.remove();
//                         return;
//                     }

//                     setTimeout(function() {
//                         that.newBlurDrawingTools();
//                     });

//                     if( (that.drawingToolsConfig.undoStack && !that.drawingToolsConfig.undoStack.length) || 
//                         (that.drawingToolsConfig.undoStack && that.drawingToolsConfig.undoStack.length && that.drawingToolsConfig.undoStack[that.drawingToolsConfig.undoStack.length-1].type =='delete') || 
//                         that.drawingToolsConfig.undoStack[that.drawingToolsConfig.undoStack.length-1].line && 
//                         that.drawingToolsConfig.undoStack[that.drawingToolsConfig.undoStack.length-1].line._id != line._id) {
                        
//                         if(that.drawingToolsConfig.singleContinuousLine && that.drawingToolsConfig.singleContinuousLine.isSingleContinuousLine) {
//                             temp.type = "singleContinuousLine";
//                             temp.id = that.drawingToolsConfig.singleContinuousLine.id;        
//                         }
//                         that.drawingToolsConfig.undoStack.push(temp);
//                     }
                    
//                     that.setToolbarProperty('menus.PEN_MENU.menu-items.undo.disabled', false);
//                     that.setToolbarProperty('menus.HIGHLIGHTER_MENU.menu-items.undo.disabled', false);
//                 }
//             });
            
//             let width = $("#ee-overlaysA").width()/that.drawingToolsConfig.defaultFontSize + 'em' ;
//             let height = $("#ee-overlaysA").height()/that.drawingToolsConfig.defaultFontSize + 'em';
//             $('#drawing-tools-container-'+pageDIV).children(".konvajs-content").width(width);
//             $('#drawing-tools-container-'+pageDIV).children(".konvajs-content").height(height);
//             $('#drawing-tools-container-'+pageDIV).children(".konvajs-content").children("canvas").width(width);
//             $('#drawing-tools-container-'+pageDIV).children(".konvajs-content").children("canvas").height(height);
//         }
//     }

    
//     async addFetchedDrawingsToRespectiveStage(bookCode, userId, arrayOfPages) {
//         let that = this;
//         let drawingResponse = await this.drawingDataService.fetchMultipleDrawings(bookCode, userId, arrayOfPages, 1);
        
//         if(drawingResponse && drawingResponse.status == 'error' || drawingResponse.status == 'pendingFetch') {
//             // notify toolbar about the status of fetched drawings 
//             that.toolbarComponent.studentBookEvents({"onDrawingLoaded": true, "status": drawingResponse.status});
//             return;
//         }

//         Object.keys(drawingResponse).forEach((pageLabel, index)=> {
//             let pageDIV = (index == 0) ? "A" : "B";
//             let data = drawingResponse[pageLabel].data;
//             if(data && data != "[]") {
//                 that.paintLinesOnStageFromMinifiedJson(this["stage" + pageDIV], data);
//                 that.updateDrawingSize(pageDIV, data);
//             }
//         });
//         that.getSelectionBox();   
//         // notify toolbar about the status of fetched drawings 
//         that.toolbarComponent.studentBookEvents({"onDrawingLoaded": true});


//     }

//     checkIfAllKeysAreEmpty(drawingObject) {

//         let allEmpty = true;

//         Object.keys(drawingObject).forEach(label => {
//             if(allEmpty && drawingObject[label].data != "[]") {
//                 allEmpty = false;
//             }
//         });

//         return allEmpty;

//     }

//     toggleDrawingTools(active : boolean) {
//         let pagesDIV;
//         let that = this;

//         this.drawingToolsConfig.isDrawingToolsActive = !this.drawingToolsConfig.isDrawingToolsActive;
//         if(active != undefined) {
//             this.drawingToolsConfig.isDrawingToolsActive = active;
//         }
//         if(this.currentPageLayout == PAGE_LAYOUT.DOUBLE) {
//             pagesDIV = ["A", "B"];
//         } else {
//             pagesDIV =  ["A"];
//         }
//         pagesDIV.forEach(function(pageDIV) {
//             $("#readerpagediv"+pageDIV).children("#drawing-tools-container-" + pageDIV).css("z-index", that.drawingToolsConfig.isDrawingToolsActive ? 5 : 4);
//         });
//         if(this.drawingToolsConfig.isDrawingToolsActive && this.drawingToolsConfig.showStage) {
//             if($("#imgbook").hasClass("dragscroll")) {
//                $("#imgbook").removeClass("dragscroll");
//                dragscroll.reset();
//             }

//             // disable gestures on touch start
//             that.imgBook.enableTouchScreenGestures({
//                 disableSwipe: true, 
//                 disablePan: true, 
//                 disablePinch: true
//             });   

//             let cursorRadius = (this.drawingToolsConfig.strokewidth*parseFloat($("#imgbook").css("font-size").substring(0, $("#imgbook").css("font-size").length-2))/this.drawingToolsConfig.defaultFontSize)/2;
//             let cursorSVG = `data:image/svg+xml;utf8,<svg id=\"svg\" xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" width=\"${cursorRadius*2}\" height=\"${cursorRadius*2}\"><circle cx=\"${cursorRadius}\" cy=\"${cursorRadius}\" r=\"${cursorRadius}\" fill=\"${hexToRgb(this.drawingToolsConfig.strokeColor)}" /></svg>`;
//             // NEMO-3091 : [FOC] Incorrect color is reflected on pen and highlighter cursor (Mac)
//             $("#imgbook").css("cursor", "default");
//             $("#imgbook").css("cursor", `url('${cursorSVG}') ${cursorRadius} ${cursorRadius}, auto`);                                 

//         } else {
//             if(!$("#imgbook").hasClass("dragscroll")) { 
//                $("#imgbook").addClass("dragscroll");  
//                dragscroll.reset();
//                $("#imgbook").css("cursor", "");                              
//             }

//             // enable gestures on touch end
//             that.imgBook.enableTouchScreenGestures({
//                 disableSwipe: false, 
//                 disablePan: false, 
//                 disablePinch: false
//             });   
            
//         }
//         // hexcode to rgb value (for colour fill in cursor svg)
//         function hexToRgb(hex) {
//             var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
//             return result ? `rgb(${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(result[3], 16)})` : null;
//         }
//     }

//     calculateLastCoordinates(x,y,w,h,pts) {

//         let x3,y3;

//         for(var i=0;i<pts.length;i+=2) {
//             if(!this.pointliesinbox(x,y,w,h,pts[i],pts[i+1])) {
//                 if ( pts[i] < x || pts[i] > x+w) {
//                     let x1 = pts[i-4];
//                     let y1 = pts[i-3];
//                     let x2 = pts[i-2];
//                     let y2 = pts[i-1];

//                     if(pts[i] < x) {
//                         x3 = x;
//                     } else if(pts[i] > x+w) {
//                         x3 = x+w;
//                     }
                    
//                     y3 = ( ( (y2 - y1) / (x2 - x1) ) * ( x3 - x1 ) ) + y1;
                    
//                     pts[i] = x3;
//                     pts[i+1] = y3;

//                 }

//                 if ( pts[i+1] < y || pts[i+1] > y+h) {
//                     let x1 = pts[i-4];
//                     let y1 = pts[i-3];
//                     let x2 = pts[i-2];
//                     let y2 = pts[i-1];

//                     if(pts[i+1] < y) {
//                         y3 = y;
//                     } else if(pts[i+1] > y+h) {
//                         y3 = y+h;
//                     }
                    
//                     x3 =  ( ( ( y3 - y1) * ( x2 - x1) ) / (y2 - y1) ) + x1;
                    
//                     pts[i] = x3;
//                     pts[i+1] = y3;

//                 }
                
//             }
//         }

//         return pts;

//     }

//     // NEMO-12688: PDZ icons to be made invisible and enable double-click for the same
//     onOverlayDblClick(overlaysId , index, pageWidth, pageHeight, fontSize, pageNo, event, pageNumber, jsonData) {

//         if(!jsonData.clickEvents && !jsonData.clickEvents.dblClick){
//             return;
//         }

//         if (this.pinNoteConfig.isCaptureMode) {
//             return;
//         }

//         if(jsonData.type && jsonData.type == "predefined-zoom") {
            
//             this.currentPageOrientation = PAGE_ORIENTATION.FIT_TO_SCREEN; 
//             this.setPersistantPageOrientation();
//             let scale = event.currentTarget.offsetTop / jsonData['predefined-zoom'].y;
//             // this.zoomHotspot(jsonData['predefined-zoom'].x*scale, jsonData['predefined-zoom'].y*scale, jsonData['predefined-zoom'].w*scale, jsonData['predefined-zoom'].h*scale, document.getElementById(overlaysId).getAttribute('pagetype'));
//             this.initZoomHotspot(jsonData['predefined-zoom'].x*scale, jsonData['predefined-zoom'].y*scale, jsonData['predefined-zoom'].w*scale, jsonData['predefined-zoom'].h*scale, document.getElementById(overlaysId).getAttribute('pagetype'), overlaysId);
//             this.tipModal.hideTipModal('PDZ');
//         }
//     }

//     onOverlaySelect(overlaysId , index, pageWidth, pageHeight, fontSize, pageNo, event, pageNumber, jsonData) {
//         let options = {
//             "jsonData" : jsonData,
//             "basepath" : this.studentBook.meta.paths["public-assets"],
//             "onClose" : undefined,
//             "translations" : this.translations,
//             "events" : {
//                 "onOpen" : undefined,
//                 "onDragStart" : undefined,
//                 "navigateToDashboard": undefined
//             }
//         };

//         let that = this;

//         if(jsonData.clickEvents && jsonData.clickEvents.dblClick){
//             return;
//         }
        
//         // Clear hideBox limit toast
//         this.toaster.clearPendingToasts({ hideBox: true });
//         this.maskLimitToastPageDiv = undefined;

//         if(jsonData.type === "page") {
//             this.launchPageHotspot(jsonData.page.pagelabel);
//         }
//         else if(jsonData.type && (jsonData.type == "video-package" || jsonData.type == "video")) {
//             this.overlayJson = jsonData;
//             let that = this;

//             let player = window['dlsVideoPlayer'];
//             options.onClose = function(plyrClosedandReopened) {
                
//                 that.isVideoHotSpotActive = plyrClosedandReopened || false;
//                 that.isOrientationChangedWhileVideoPlayerWasActive = false;

//             }

//             options.events.onOpen = function () {
//                 that.audioVideoLatestWidgetOnTop();
//             }
//             options.events.onDragStart = function () {
//                 that.audioVideoLatestWidgetOnTop();
//             }

//             options.events.navigateToDashboard = function() {
//                 that.navigateToUserDashboard();
//             }

//             player.launchPlayer(options);
//             // player.player.fullscreen.enter();
//             this.isVideoHotSpotActive = true;

//         } else if(jsonData.type && (jsonData.type == "audio-package" || jsonData.type == "audio")) {
//             this.overlayJson = jsonData;
//             let player = window['dlsAudioPlayer'];

//             options.events.onOpen = function () {
//                 that.audioVideoLatestWidgetOnTop();
//             }
//             options.events.onDragStart = function () {
//                 that.audioVideoLatestWidgetOnTop();
//             }

//             options.events.navigateToDashboard = function() {
//                 that.navigateToUserDashboard();
//             }

//             player.launchPlayer(options);
//         } else if(jsonData.type && jsonData.type == "predefined-zoom") {
//             // NEMO-12688: PDZ icons to be made invisible and enable double-click for the same
            
//             // this.imgBookHelperService.fitToScreen(this.lastSavedLayout);            
//             // let scale = event.currentTarget.offsetTop / jsonData['predefined-zoom'].y;
//             // // this.zoomHotspot(jsonData['predefined-zoom'].x*scale, jsonData['predefined-zoom'].y*scale, jsonData['predefined-zoom'].w*scale, jsonData['predefined-zoom'].h*scale, document.getElementById(overlaysId).getAttribute('pagetype'));
//             // this.initZoomHotspot(jsonData['predefined-zoom'].x*scale, jsonData['predefined-zoom'].y*scale, jsonData['predefined-zoom'].w*scale, jsonData['predefined-zoom'].h*scale, document.getElementById(overlaysId).getAttribute('pagetype'), overlaysId);
//         } else if(jsonData.type === "learning-object") {
//             // this.launchLOHotSpot(jsonData["learning-object"], this.activityHost);

//             let isCurrentBookDownloaded = that.downloadHelperService.isBookDownloaded(this.studentBook.meta.code);

//             if (environment.isDesktopApp && !this.isOnline && !isCurrentBookDownloaded) {
//                 return;
//             }

//             jsonData.linkedBookCode = this.studentBook.meta.code;
//             jsonData.isLinkedBookDownloaded = this.downloadHelperService.isBookDownloaded(this.studentBook.meta.code);
//             jsonData.classId = this.classId;
//             jsonData.isContextBasedClass = this.route.snapshot.data.bookData.meta.isContextBasedClass;

//             this.createDynamicLOComponent(jsonData, this.loHotspotHost);
//         } else if(jsonData.type === "url") {

//             // get reference of the anchor tag created to launch new tab.
//             // using anchor tag instead of window.open as window.open may open in new smaller window
//             // instead of new tab in some cases as stated on mdn and stackoverflow.
//             let link: any = document.querySelector('#external-link-button');
            
//             // get link provided in the hotspot.
//             let url = jsonData.url.path;

//             // remove https:// from the url as we will be adding ot on our own.
//             // '//' opens the new url in http or https depending on the url.
//             link.href = "//" + url.replace(/(^\w+:|^)\/\//, '');
            
//             // "_blank" is used to state the the link will be opened in new tab.
//             link.target = '_blank';

//             // programatic click.
//             // do not remove https and other things before launching url.
//             if(environment.isDesktopApp) {
//                 window["focShell"].openExternal(jsonData.url.path);
//             } else {
//                 link.click();
//             }
            
//         } else if (jsonData.type === "note") {

//             let wasRecentlyUpdated = document.querySelector('#' + overlaysId).getAttribute('justupdated');

//             if (wasRecentlyUpdated != 'true') {
//                 this.onNoteHotspotClick(jsonData);
//             }else {
//                 if(this.sidebarConfig.isActive && this.sidebarConfig["current-sidebar"] == "notes"){
//                     this.toolsService.getNotefromNotesMap(jsonData.note.id).addSelectedNoteMode(jsonData.note.id);
//                 }
//             }

//             $(`[note-id='${jsonData.note.id}']`).removeClass("dragEnabled");
        
//         }
//     }

//     onNoteHotspotClick(jsonData){
//         if (window.innerWidth < 576) {
//             //Single Note Config
//             let pageObj = this.pages.find(page => page.label === jsonData.note.label);
//             let noteObj = pageObj.notes.find(note => note.data.id === jsonData.note.id);

//             if (!noteObj) {
//                 console.log("Note not found");
//                 return;
//             }

//             noteObj = JSON.parse(JSON.stringify(noteObj.data));
//             let uniqueID = nanoid(16);
//             noteObj.viewOnMobile = true;
//             noteObj.firstTimeEditing = false;
//             if (this.singleNoteConfig) {
//                 this.autoSaveNoteUponUserActive();
//                 this.singleNoteConfig = undefined;
//                 this.ref.detectChanges();
//             }
//             this.singleNoteConfig = {
//                 data: noteObj,
//                 selector: uniqueID
//             }
//             this.ref.detectChanges();
//             return;
//         }

//         if (!this.sidebarConfig.isActive || this.sidebarConfig["current-sidebar"] !== "notes") {
//             this.toggleSidebar('notes');
//         } else {
//             this.showNoteListView({ noAnimation: true });
//         }

//         this.ref.detectChanges();
//         this.toolsService.getNotefromNotesMap(jsonData.note.id).addSelectedNoteMode(jsonData.note.id);

//     }

// 	launchPageHotspot(pagelabel: any) {
//         // this.jumpToString = pagelabel;
//         // this.setToolbarProperty("jumpToString", this.jumpToString);

//         // this.jumpToPage();
//         let currentPageFromLabel = this.imgBookHelperService.getPageFromLabel(this.units, pagelabel).page; // get jump to selected page
//         this.openPage(currentPageFromLabel[0]); // open the page
//     }

//     // change imgbook layout (single/double)
//     toggleImgbookLayout() {
      
//         this.autoSaveNoteUponUserActive();

//         this.toolbarComponent.studentBookEvents({"onToggleImgbookLayout": true})
//         this.toolbarComponent.removeJumpToPagePanelKeyboardEventListeners();
        
//         this.drawingDataService.postDrawingData();//We will post the statements only if it is not yet posted
//         this.isPageLoadedObject[this.studentBook.meta.code] = false;
//         this.imgBookHelperService.changeImgbookLayout();
        
//         // preserving user preferred layout in local storage
//         let layout;
//         if(this.currentPageLayout == PAGE_LAYOUT.DOUBLE) {
//             layout = PAGE_LAYOUT.SINGLE;
//         } else {
//             layout = PAGE_LAYOUT.DOUBLE;            
//         }
//         let userKey = appSetting.localStorage.foc + "." + this.userData.extUserId + "." + this.studentBook.meta.code + "." + "layout";
//         localStorage.setItem(userKey, layout);
//         this.lastSavedLayout = layout;
//         //NEMO-8007 default page view fit to width
//         this.setPersistantPageOrientation();
//         this.updatePageViewButtonsState();
    
//         this.toggleDrawingTools(false);
//         this.setToolbarProperty("current-sub-menu", null);

//         this.ref.detectChanges();
//         this.imgBookHelperService.showHotspot({"toggleLayout":true});

//         // this.isDrawingPanelOpen = false;

//         // Re initialize the stacks when page layout changes so that user cant undo/redo.
//         this.drawingToolsConfig.undoStack = new Array();
//         this.drawingToolsConfig.redoStack = new Array();

//         this.setToolbarProperty('menus.PEN_MENU.menu-items.undo.disabled', true);
//         this.setToolbarProperty('menus.HIGHLIGHTER_MENU.menu-items.undo.disabled', true);
//         this.setToolbarProperty('menus.PEN_MENU.menu-items.redo.disabled', true);
//         this.setToolbarProperty('menus.HIGHLIGHTER_MENU.menu-items.redo.disabled', true);

//         // NEMO-5197 : close drawing tools menu on previous next and any page load
//         if(this.toolbarConfig.showDrawingMenu) {
//             this.toggleDrawingMenu(false);
//         }

//         // NEMO-5399 : close selection box menu on previous next and any page load
//         if(this.toolbarConfig.showSelectionBoxMenu) {
//             this.toggleSelectionBoxMenu(false);
//         }

//         this.manageMediaPlayerOnPageChange( PAGE_CHANGE_ACTION.LAYOUT_TOGGLE);

//         this.closeAllSelectionBoxes();

//         if (layout == PAGE_LAYOUT.SINGLE && this.maskLimitToastPageDiv == 'B') {
//             // Clear hideBox limit toast
//             this.toaster.clearPendingToasts({ hideBox: true });
//             this.maskLimitToastPageDiv = undefined;
//         }
//     }

//     toggleTimerFoc(state?: boolean): void {
//         this.toggleTimer(state);
//         this.toaster.clearPendingToasts({ hideBox: true });
//         this.maskLimitToastPageDiv = undefined;
//     }

//     // close audio video overlay if current page does not have its hotspot
//     manageMediaPlayerOnPageChange(action?){
//         if(action==PAGE_CHANGE_ACTION.LAYOUT_TOGGLE){
//             let keepOverlay = false;
//             let completeOverlayJsonObject = this.imgBook.getOverlaysJSON();
//             if(this.overlayJson && completeOverlayJsonObject && (window['dlsVideoPlayer'].player || window['dlsAudioPlayer'].player) ) {
//                 let overlayObject = completeOverlayJsonObject[this.currentPage[0].serial];
//                 if(overlayObject) {
//                     overlayObject.forEach(overlay => {
//                         if(overlay == this.overlayJson) {
//                             keepOverlay = true;
//                         }
//                     });
//                 }
//             }

//             let overlayContainer:any = document.querySelector('.overlay-container');
//             if(overlayContainer.style.display == 'flex' && !keepOverlay) {
//                 if(document.querySelector('.overlay-container').firstElementChild == document.querySelector('.video-container')) {
//                     window['dlsVideoPlayer'].destroyPlayer()
//                 } else if(document.querySelector('.overlay-container').firstElementChild == document.querySelector('.audio-overlay-container')) {
//                     window['dlsAudioPlayer'].destroyPlayer()
//                 }
//             }
//         }else{
//             if((document.querySelector('.overlay-container').firstElementChild)){
//                 if(document.querySelector('.overlay-container').firstElementChild == document.querySelector('.video-container')) {
//                     window['dlsVideoPlayer'].destroyPlayer()
//                 } else if(document.querySelector('.overlay-container').firstElementChild == document.querySelector('.audio-overlay-container')) {
//                     window['dlsAudioPlayer'].destroyPlayer()
//                 }
//             }
//         }
        
        
//     }
//     // imgbook handling - END

//     // NEMO-4549 fix for NEMO-7275. After redirect to dashboard, press back button. Blank page is shown. 
//     @HostListener('window:popstate', ['$event'])
//     onPopState(event) {
//         if(this.route.snapshot.data.bookData.meta.hideContentAsRedirectImminent) {
//             this.appHelperService.navigateToDashboardApp([]);
//         }
//     }

//     @HostListener('window:resize', ['$event'])
//     onResize(event) {

//         // pdz tip modal handler on window resize
//         this.pdzTipModalHandler();

//         // close single note if open on window resize
//         if(window.innerWidth > 576){
//             if(this.singleNoteConfig){
//                 this.autoSaveNoteUponUserActive();
//                 this.singleNoteConfig = undefined;
//             }
//         }

//         let h = (window.innerHeight)/2 - 84;
//         $('.assignment-dropdown-menu').css("max-height", h);

//         if(window.innerWidth < 992){
//             $("#assignmentModal").modal('hide');
//         }

//         // close the dicitonary on window resize
//         if (window.innerWidth < 992) {
//             if (this.sidebarConfig["current-sidebar"] == "dictionary" && this.sidebarConfig.isActive) {
//                 this.toggleSidebar('dictionary');
//             }
//         }

//         // pcwidth undefined sentry fix.
//         if(!this.isBookDataLoaded && !this.isOverlayJsonLoaded) {
//             return;
//         }

//         // if a mobile note is active then change position to absolute so toolbar is not visible and do not resize.
//         $('.foc-container').css('position','relative');
//         if(this.singleNoteConfig && this.singleNoteConfig.data.mode == 'editing') {
//             $('.foc-container').css('position','absolute');
//             return;
//         }

//         let that = this;
//         if(this.orientationChangeDetected) {
//             this.orientationChangeDetected = false;
//             setTimeout(function() {
//                 that.getSelectionBox();
//             },100)
//         }

//         // NEMO-5770 : [eReader] Mobile menu becomes partially visible after opening the ToC (iOS devices).
//         // Fix for extra white space on bottom in iphone after screen rotation.
//         if(this.isIosDevice()) {
//             setTimeout(function() {
//                 window.scrollTo(0, 1);
//             }, 400);
//         }

//         var fontsize = parseFloat($("#imgbook").css("font-size").substring(0, $("#imgbook").css("font-size").length-2));

//         this.setContentViewport();
//         // do not resize the toc when note is being edited.. this prevents the onscreen keyboard to lose focus when writing in
//         if( !(this.toolsService.getNoteStatus() && this.isTouchDevice) || this.resizeNotesPanelAsOrientationOccured) {
//             this.resizeNotesPanelAsOrientationOccured = false;
//         }
        
//         this.resizeSidebar({"noScroll":true});

//         setTimeout(function() {
//             // pcwidth undefined sentry fix.
//             if(that.isBookDataLoaded && that.isOverlayJsonLoaded) {   
//                 that.setPersistantPageOrientation();
//                 that.updatePageViewButtonsState();
//                 that.currentPageLayout = that.imgBookHelperService.getCurrentPageLayout();
//                 that.setToolbarProperty('menus.PAGE_VIEW.menu-items.single-double-page-view.currentPageLayout', that.currentPageLayout);
//                 that.isToggleLayoutEnabled = that.imgBookHelperService.isToggleLayoutEnabled(that.units, that.currentUnit, that.currentPage);
//                 that.setToolbarProperty('menus.PAGE_VIEW.menu-items.single-double-page-view.disabled', !that.isToggleLayoutEnabled);
//                 that.resizeAllSelectionBoxes(fontsize);
                
//                 if(that.sidebarConfig.isActive) {
//                     that.toolbarComponent.onSidebarToggle({'sidebar-active': true, "sidebar-position" : that.toolbarConfig.position});
//                 } else {
//                     that.toolbarComponent.onSidebarToggle({'sidebar-active': false, "sidebar-position" : that.toolbarConfig.position});
//                 }
//             }
//         });
        
//     }

//     jumpToPagePanelEventHandler(options?) {
//         if(options.openPage) {
//             let currentPageFromLabel = this.imgBookHelperService.getPageFromLabel(this.units, options.pageLabel).page; // get jump to selected page
//             this.openPage(currentPageFromLabel[0]); 
//             this.manageMediaPlayerOnPageChange();
//         }        
//     }
//     // Set Position of Toolbar
//     // @params - 'left', 'right'
//     setToolbarPosition(position?) {

//         if (this.toolbarConfig['current-menu'] === null) {
//             this.setToolbarProperty('current-menu', 'MAIN_MENU');
//         }
//         this.setToolbarProperty('position', position);

//         // this.activeToolbar = position;
//         // this.positionToolbar = false;
//         this.toggleDrawingTools(this.drawingToolsConfig.isDrawingToolsActive);
//         this.setToolbarProperty("current-sub-menu", null);

//         // #223 : NEMO-3631 - [FoC] - On changing side of toolbar, ToC/notes (previously expanded) should also change side
//         if (this.sidebarConfig.position !== undefined && this.toolbarConfig.position !== this.sidebarConfig.position) {
//             this.toggleSidebar();
//         }    
//     }
    

    
//     preventZoom(e) {
//         e.stopPropagation();
//     }

//     // Open the Menu (Main, Pen, Highlighter, Pageview)
//     // @params - 'PEN_MENU', 'HIGHLIGHTER_MENU', 'PAGE_VIEW'
//     openMenu(menu) {

//         this.setToolbarProperty("current-menu", menu);
//         // activate drawing tools if pen or highlighter button is clicked
//         if(menu == 'PEN_MENU' || menu =='HIGHLIGHTER_MENU') {
//             let tool = (menu == 'PEN_MENU' ? 'pen' : 'highlighter');
//             this.setCurrentTool({tool:tool});
//             this.addUndoRedoEventListeners();
//         }
//     }

//     // Close the Menus and Submenus
//     closeMenu() {

//         if(this.toolbarConfig['current-menu'] == 'PEN_MENU' || this.toolbarConfig['current-menu'] == 'HIGHLIGHTER_MENU'){
//             this.removeUndoRedoEventListeners();
//         }

//         if(this.toolbarConfig['current-menu'] !== 'MAIN_MENU') {
//             this.setToolbarProperty("current-menu", 'MAIN_MENU');
//         } else {
//             this.setToolbarProperty("current-menu", null);
//         }
//         this.setToolbarProperty("current-sub-menu", null);
//         this.toggleDrawingTools(false);      

//     }

//     // Open and close of sub menu panel (dropdown)
//     toggleSubMenu(subMenu) {
        
//         if(this.toolbarConfig["current-sub-menu"] === subMenu) {
//             this.setToolbarProperty("current-sub-menu", null);
//         } else {
//             this.setToolbarProperty("current-sub-menu", subMenu);
//         }

//     }

//     // sidebar handling - START
//     toggleSidebar(currentSidebar?, options?) {

//         let lastPosition = this.sidebarConfig.position;
//         let outerContainer:any = document.querySelector('.outer-container');
//         let wasContentScrollable = Math.abs(outerContainer.offsetWidth - outerContainer.scrollWidth) > 1 ? true : false;

//         // this option (calledfromdeleteNoteEvent) will be passed ONLY for mobile 
//         // NEMO-7069 - when single note is active and user clicks on TOC, the sidebar should be TOC
//         if(this.sidebarConfig["current-sidebar"]=="toc" && options && options.calledfromdeleteNoteEvent)
//             return;

//         if(this.sidebarConfig.position && this.sidebarConfig.position !== this.toolbarConfig.position) {
//             this.sidebarConfig.isActive = true;
//         } else {
//             this.sidebarConfig.isActive = !this.sidebarConfig.isActive;
//         }

//         // switch from toc to notes or vice-versa
//         if (currentSidebar && currentSidebar != this.sidebarConfig['current-sidebar']) {
//             this.sidebarConfig.isActive = true;
//             if (this.sidebarConfig['current-sidebar'] == "toc") {
//                 this.setToolbarProperty("tocActive", false);
//             } else if (this.sidebarConfig["current-sidebar"] == "notes") {
//                 this.setToolbarProperty("notesWrapperActive", false);
//             }else if(this.sidebarConfig["current-sidebar"] == "dictionary") {
//                 this.setToolbarProperty("isDictionaryActive", false);
//             }
//             this.sidebarConfig["current-sidebar"] = currentSidebar;

//             // NEMO-15366: closing the units inside toc when switching from toc to notes/dictionary
//             if (this.sidebarConfig['current-sidebar'] != "toc") {
//                 Object.keys(this.tocWrapper).forEach((unit) => {
//                     this.tocWrapper[unit].isOpen = false;
//                 });
//             }
//         }

//         // close the single note on screen in mobile.
//         if(currentSidebar == 'toc' && this.singleNoteConfig) {
//             this.checkAndDeleteIfNoteCorrespondingToSingleMobileNoteIsEmpty(this.singleNoteConfig);
//             this.singleNoteConfig = undefined;
//         }

// 		// loose unsaved note upon closing notes panel (or switching to TOC panel)
//         if(!this.sidebarConfig.isActive || this.sidebarConfig["current-sidebar"] !== "notes") {
//             // loose newly added note if it is not saved
//             this.autoSaveNoteUponUserActive();
//         }

//         this.ref.detectChanges();
        
//         // Since TOC is overlay for sm devices and non-overlay for >=sm devices 
//         // Fix for when Opened TOC is closed, imgbook should be resized to Fit To Screen (applicable for >=sm devices only)
//         if(this.sidebarConfig.isActive) {
//             var sidebarClass = this.sidebarConfig["current-sidebar"] == "toc" ? ".sidebar" :this.sidebarConfig["current-sidebar"] == "dictionary"?".dictionary-wrapper":".notes-wrapper";
//             window["sidebarType"] = window.getComputedStyle(document.querySelector(sidebarClass)).position == "relative" || 
//             (window.getComputedStyle(document.querySelector(sidebarClass)).right == "0px" && $('.foc-container').width()>=576) 
//             ? "relative" : "absolute"; 
//         }


//         if(this.sidebarConfig.isActive && currentSidebar == 'notes') {

//             if(this.toolbarConfig.showDrawingMenu) {
//                 this.toggleDrawingMenu(false);
//             }
//             if(this.toolbarConfig.showSelectionBoxMenu) {
//                 this.toggleSelectionBoxMenu(false);
//             }
            
//             // make get all notes call - use smart fetching
//             // set isNotesBusy = false in then and catch
			
// 	        this.isNotesBusy = true;
// 	        this.isNoteLoadFailed = false;
//             this.imgBookHelperService.showLoader("notes-loader");
//             this.notesDataService.getNotes(this.route.params["_value"]["studentBookCode"], {"maxRetryAttempt":3})
//             .then((data) => {
                
//                 if(data && data.status == "error") {
//                     this.isNoteLoadFailed = true;
//                     this.toaster.showToast({ type : "notes-fetch-failure" });
//                     this.notesDataService.offlineWorkflow(this.route.params["_value"]["studentBookCode"], {});
//                 } else { 
//                     this.pages = data;          
//                     this.isNoteLoadFailed = false;
//                     // //load pin hotspots of notes
//                     // let notesArr = [];
//                     // for (let index = 0; index < this.pages.length; index++) {
//                     //     const page = this.pages[index];
//                     //     if (!page.notes || page.notes.length === 0) {
//                     //         continue;
//                     //     }
//                     //     notesArr = notesArr.concat(page.notes);
//                     // }
//                     // this.addPinOnImgBook(notesArr);
//                 }

//                 this.isNotesBusy = false;
//                 this.imgBookHelperService.hideLoader("notes-loader");
//                 this.showNoteListView({"noAnimation" : true});
//             }).catch((error) => {
//                 this.isNotesBusy = false;
//                 this.imgBookHelperService.hideLoader("notes-loader");
//                 this.isNoteLoadFailed = true;
//                 this.notesDataService.offlineWorkflow(this.route.params["_value"]["studentBookCode"], {});
//             });
             
//         } else {
//             this.notesDataService.resetOfflineWorkflow();
//         }
        
//         this.sidebarConfig.position = this.toolbarConfig.position;
        
//         this.toolbarComponent.studentBookEvents({"onSidebarToggle": true});
        
//         this.setContentViewport();
//         if(this.sidebarConfig.isActive && this.sidebarConfig["current-sidebar"] == "toc") {
//             this.showListView({"noAnimation" : true});
//         } else if(this.sidebarConfig.isActive && this.sidebarConfig["current-sidebar"] == "notes") {
//             this.showNoteListView({"noAnimation" : true});
//         } 

//         // this.toggleDrawingTools(keepDrawingToolsActiveWhenTOCisClosedButDrawingToolsWereActive);
//         this.setToolbarProperty("current-sub-menu", null);

//         if(!this.sidebarConfig.isActive) {
//             this.sidebarConfig.position = undefined;
//             Object.keys(this.tocWrapper).forEach((code) => {
//                 this.tocWrapper[code].isOpen = false;
//             });   
//         }

//         this.toolsService.setSidebarConfig(this.sidebarConfig);

//         // NEMO-5045 : [eReader] eBook page doesn't shift to the left when opening the TOC from the right side
//         let that = this;
//         setTimeout(function() {
//             // if the toc is currently active and its position is right, programatically scroll imagebook to left by 320 px
//             if(that.sidebarConfig.isActive && that.sidebarConfig.position == 'right') {
//                 if(!that.isTouchDevice) {
//                     document.querySelector('#imgbook').scrollLeft += 320;
//                 } else {
//                     let tempXTrans = that.imgBook.getTranslateCoords().x;
//                     let tempYTrans = that.imgBook.getTranslateCoords().y;
//                     that.imgBook.setTranslateCoords({x:tempXTrans - 320, y:tempYTrans});
//                 }
//             }
            
//             // if the toc is currently closed and its last position was right, programatically scroll imagebook to right by 320 px
//             if(!that.sidebarConfig.isActive && lastPosition == 'right') {
//                 if(!that.isTouchDevice) {
//                     if(document.querySelector('#imgbook').scrollLeft != document.querySelector('#imgbook').scrollWidth - document.querySelector('#imgbook').clientWidth) {
//                         document.querySelector('#imgbook').scrollLeft -= 320;
//                     }
//                 } else {
//                     let tempXTrans = that.imgBook.getTranslateCoords().x;
//                     let tempYTrans = that.imgBook.getTranslateCoords().y;
//                     that.imgBook.setTranslateCoords({x:tempXTrans + 320, y:tempYTrans});
//                 }
//             }
//             if(!that.sidebarConfig.isActive && that.currentPageOrientation != undefined) {
//                 if(window["sidebarType"] == "relative") {
//                     that.setPersistantPageOrientation();                    
//                     that.updatePageViewButtonsState();
//                 }
//             }
//             if(that.sidebarConfig.isActive) {
//                 if(window["sidebarType"] == "relative") {
//                     let height = $(".foc-container").height();
//                     let width = $(".foc-container").width();
//                     that.imgBookHelperService.updateZoomConfig({"height": height, "width": width, "layout" : that.lastSavedLayout});
//                 }
//             }
//             if(that.sidebarConfig.isActive) {
//                 that.toolbarComponent.onSidebarToggle({'sidebar-active': true, "sidebar-position" : that.toolbarConfig.position});
//             } else {
//                 that.toolbarComponent.onSidebarToggle({'sidebar-active': false, "sidebar-position" : that.toolbarConfig.position});
//             }

//             if(that.sidebarConfig["current-sidebar"] == "toc") {
//                 that.setToolbarProperty("tocActive", that.sidebarConfig.isActive);
//             } else if(that.sidebarConfig["current-sidebar"] == "notes") {
//                 that.setToolbarProperty("notesWrapperActive", that.sidebarConfig.isActive);
//             } else if(that.sidebarConfig["current-sidebar"] == "dictionary") {
//                 that.setToolbarProperty("isDictionaryActive", that.sidebarConfig.isActive);
//             }
//             that.setToolbarProperty("sidebarActive", that.sidebarConfig.isActive);

//             that.addHotspotEventListenersforSelectionBox();
//         });

//         if (this.sidebarConfig.position == undefined || lastPosition == undefined) {
//             this.updateLoForTocToggle(this.sidebarConfig.isActive);
//         }


//         this.ref.detectChanges();
//         let overlayContainer:any = document.querySelector('.overlay-container');
//         let timerOverlayContainer:any = document.querySelector('.timer-overlay-container');


//         if (this.sidebarConfig.isActive) {

//             var topOpenEvent = new CustomEvent("toc-open-event", {
//                 detail: {
//                     tocPosition: this.sidebarConfig.position,
//                 },
//             });

//             if (overlayContainer.style.display != 'none') {
//                 overlayContainer.dispatchEvent(topOpenEvent);
//             }

//             if (timerOverlayContainer.style.display != 'none') {
//                 timerOverlayContainer.dispatchEvent(topOpenEvent);
//             }

//             this.LoTocToggleHandling({
//                 eventType : 'toc-open',
//                 detail: {
//                     tocPosition: this.sidebarConfig.position
//                 }
//             })

//         } else {

//             var topCloseEvent = new CustomEvent("toc-close-event", {
//                 detail: {
//                     currentTocPosition: this.sidebarConfig.position,
//                     lastTocPosition: lastPosition,
//                     wasContentScrollable: wasContentScrollable
//                 }
//             });

//             if (overlayContainer.style.display != 'none') {
//                 overlayContainer.dispatchEvent(topCloseEvent);
//             }

//             if (timerOverlayContainer.style.display != 'none') {
//                 timerOverlayContainer.dispatchEvent(topCloseEvent);
//             }

//             this.LoTocToggleHandling({
//                 eventType : 'toc-close',
//                 detail: {
//                     currentTocPosition: this.sidebarConfig.position,
//                     lastTocPosition: lastPosition,
//                     wasContentScrollable: wasContentScrollable
//                 }
//             })

//         }
        
//         // Handle PDZ when sidebar toggle
//         if (document.querySelector('#zoomHotspot-layer-A') != null || document.querySelector('#zoomHotspot-layer-B') != null) {
//             setTimeout(() => {
//                 if (!$('.fitToWidthToolbarButton').hasClass('disabled') && !$('.fitToScreenToolbarButton').hasClass('disabled')) {
//                     this.closeAllSelectionBoxes();
//                     let obj = this.selectionBoxCollection;
//                     let bookCode = this.studentBook.meta.code;
//                     let fontsize = parseFloat($("#imgbook").css("font-size").substring(0, $("#imgbook").css("font-size").length - 2));

//                     if (Object.keys(obj).length != 0) {
//                         Object.keys(obj[bookCode]).forEach(serial => {
//                             // iterate for each feature in the page.
//                             Object.keys(obj[bookCode][serial]).forEach(feature => {
//                                 // iterate for each selector in the feature of a page.
//                                 obj[bookCode][serial][feature].forEach(featureDivConfig => {
//                                     fontsize = parseFloat($("#imgbook").css("font-size").substring(0, $("#imgbook").css("font-size").length - 2));
//                                     let page;

//                                     if (this.currentPageLayout == PAGE_LAYOUT.DOUBLE) {
//                                         if (this.currentPage[0].serial == serial) {
//                                             page = 'A';
//                                         } else if (this.currentPage[1].serial == serial) {
//                                             page = 'B';
//                                         } else {
//                                             return;
//                                         }
//                                     } else {
//                                         if (this.currentPage[0].serial == serial) {
//                                             page = 'A';
//                                         } else {
//                                             return;
//                                         }
//                                     }
//                                     if (feature == 'zoomHotspot') {
//                                         let scale = fontsize / featureDivConfig.fontsize;
//                                         this.implementZoomHotspot(Math.round(featureDivConfig.x * scale), Math.round(featureDivConfig.y * scale), Math.round(featureDivConfig.w * scale), Math.round(featureDivConfig.h * scale), page, undefined, featureDivConfig.uniqueID)
//                                     }
//                                 });
//                             });
//                         });
//                     }
//                 }
//             });
//         }

//         // handle pdz modal on sidebar toggle
//         setTimeout(() => {
//             this.pdzTipModalHandler();
//         });

//         // Clear hideBox limit toast
//         this.toaster.clearPendingToasts({ hideBox: true });
//         this.maskLimitToastPageDiv = undefined;
//     }

//     // resize sidebar to fit the screen
//     resizeSidebar(options?) {
//         options = options || {};
//         if(this.sidebarConfig.isActive) {
//             if(this.sidebarConfig["current-sidebar"] == "toc") {
//                 this.showListView(options);
//             } else if(this.sidebarConfig["current-sidebar"] == "notes") {
//                 this.showNoteListView(options);
//             }else if(this.sidebarConfig["current-sidebar"] == "dictionary") {
//                 if(this.dictionaryComponent){
//                     this.dictionaryComponent.setHeightOfResultContainer();
//                 }
//             }
//         }
//     }
//     // sidebar handling - END
    
//     // shows the current unit list view
//     showListView(options?) {
//         options = options || {};
//         let that = this;
//         let unitsArray = [];
//         this.currentPage.forEach(function(page) {
//             let filteredUnit = that.units.filter(function(unit) {
//                 return unit.start <= page.serial && unit.end >= page.serial;
//             })[0];

//             unitsArray.push(filteredUnit);
//         });

//         if(unitsArray && unitsArray.length) {
//             unitsArray.forEach(function(unit) {
//                 if(unit && unit['id']) {
//                     that.tocWrapper[unit['id']].isOpen = true;
//                 }
//             });
//         }
//         options.unitsArray = unitsArray;
//         this.ref.detectChanges();
//         this.imgBookHelperService.showListView(options);
//     }

//     // resize height of scrollable area when image is loaded.
//     // fix for issue NEMO-5640.
//     resizeSidebarWhenImageIsLoaded() {
//         this.showListView();
//     }

//     showNoteListView(options?) {
//         options = options || {};
//         // preserve expand/collapse state from jump to page via notes panel else dont preserve, juts expand current page section
//         if(!this.jumpToPageFromNotesPanel) {
//             this.pages.forEach(page => {
//                 page.isOpen = false;
//                 if(page.label === this.currentPage[0].label || (this.currentPageLayout=="double" && page.label == this.currentPage[1].label)) {
//                     page.isOpen = true;
//                 }
//                 if($("#collapse-" + page.label).hasClass("show")) {
//                     $("#collapse-" + page.label).removeClass("show"); 
//                 }
//             });
//         }
//         this.jumpToPageFromNotesPanel = false;
//         options.currentPage = this.currentPage;
//         options.noteClass = options.noteClass || ".first-note";
//         this.ref.detectChanges();
        
//         if(this.toolsService.getNoteStatus()) {
//             options.noScroll = true;
//         }
        
//         this.imgBookHelperService.showNoteListView(options);    
//     }

//     // Units and Lesson handling - START
//     openUnit(unit) {
//         this.currentUnit = unit;
//         if(!this.currentPage || !this.currentPage.some(page => this.currentUnit.start <= page.serial && this.currentUnit.end >= page.serial)) {
//             this.openPage(unit.items[0]);
//         }
//         this.showListView();
//     }
//     lastVisitedPage() {
//         let currentPageFromLabel = this.imgBookHelperService.getPageFromLabel(this.units, this.previousPageLabel).page;
//         this.toolbarComponent.studentBookEvents({"onLastVisitedPage": true, "previousPageLabel": this.previousPageLabel});
//         this.openPage(currentPageFromLabel[0]); // this will open the previous page which will also set the previous page label
//         this.previousPageLabel = ""; // this statement is required to reset the previous page label
//         this.setToolbarProperty('previousPageLabel', this.previousPageLabel);
//         // #243 : NEMO-3629: [FoC] Spotlight - If user shift the page via Jump to Page then Spotlight box appear on Navigated page
//         this.closeAllSelectionBoxes();

//     }
//     openPage(page?){

//         this.autoSaveNoteUponUserActive();
        
//         // #243 : NEMO-3629: [FoC] Spotlight - If user shift the page via Jump to Page then Spotlight box appear on Navigated page
//         // #257 : FOC Spotlight- A blank box appear if user change the Page from Book TOC
//         // remove selection boxes 
//         this.closeAllSelectionBoxes();
//         this.toolbarComponent.studentBookEvents({"onPageNavigate": true, "page": page});


//         if(page) {
//             if(!isNaN(this.currentPageLabel)) this.previousPageLabel  = JSON.parse(JSON.stringify(this.currentPageLabel));
//             else this.previousPageLabel = "";

//             this.setToolbarProperty('previousPageLabel', this.previousPageLabel);
            
//             this.currentPage = [page];
//             this.currentPageLabel = page.label;

//             this.setToolbarProperty('currentPageLabel', this.currentPageLabel);

//             // let unit = this.units.filter(function(unit) {return unit.start<=page.serial && unit.end>=page.serial })[0];
//             // this.showListView(unit);
//         }
//         this.isImgbookBusy = true;
//         this.imgBookHelperService.showLoader();
//         this.isDrawingToastShown = false;
//         this.isDrawingToastErrorShown = false;
//         this.toaster.clearPendingToasts(); 
//         this.maskLimitToastPageDiv = undefined;
//         this.isPageLoadCompleted = false;

//         // reset page load variable for book to false on reset.
//         this.isPageLoadedObject[this.studentBook.meta.code] = false;

//         if(this.pageNavigation == PAGE_NAVIGATION.NEXT) {          // open next page using image book inmbuilt function
//             this.imgBook.nextPage(); 
//             this.drawingDataService.postDrawingData();
//         } else if(this.pageNavigation == PAGE_NAVIGATION.PREV) {   // open prev page using image book in built function
//             this.imgBook.prevPage();   
//             this.drawingDataService.postDrawingData();
//         } else {                                                   // normal page navigation (using TOC)
//             this.imgBook.jumpToPageSerial(page.serial); 
//             this.drawingDataService.postDrawingData()
            
//         }

//         //NEMO-8007 default page view fit to width
//         this.setPersistantPageOrientation();
//         this.updatePageViewButtonsState();
//         this.toggleDrawingTools(false);  
//         this.setToolbarProperty("current-sub-menu", null);  
//         this.drawingDataService.resetToastCounter();

//         this.manageMediaPlayerOnPageChange();
                   
//     }  
    
//     next(){

//         this.pageNavigation = PAGE_NAVIGATION.NEXT;
//         this.openPage();
//         this.toggleDrawingTools(false);
//         this.setToolbarProperty("current-sub-menu", null);
//         // this.isDrawingPanelOpen = false;   

//         if(this.toolbarConfig.showDrawingMenu) {
//             this.toggleDrawingMenu(false);
//         }

//         // NEMO-5399 : close selection box menu on previous next and any page load
//         if(this.toolbarConfig.showSelectionBoxMenu) {
//             this.closeAllSelectionBoxes();
//             this.toggleSelectionBoxMenu(false);
//         }
        
//         // remove selection box 
//         this.closeAllSelectionBoxes();
//         this.updatePageViewButtonsState();
//     }

//     previous(){
//         this.pageNavigation = PAGE_NAVIGATION.PREV;
//         this.openPage();
//         this.toggleDrawingTools(false); 
//         this.setToolbarProperty("current-sub-menu", null);
//         // this.isDrawingPanelOpen = false;    

//         if(this.toolbarConfig.showDrawingMenu) {
//             this.toggleDrawingMenu(false);
//         }

//         // NEMO-5399 : close selection box menu on previous next and any page load
//         if(this.toolbarConfig.showSelectionBoxMenu) {
//             this.closeAllSelectionBoxes();
//             this.toggleSelectionBoxMenu(false);
//         }
        
//         // remove selection boxes 
//         this.closeAllSelectionBoxes();
//         this.updatePageViewButtonsState();
//     }

//     // set image container height and width
//     setContentViewport() {
//         this.loaderService.hideLoader();
//         if(this.imgBook) this.imgBook.resizeImgbook();
//     }
    
//     isActivePage(label) {
//         return this.imgBookHelperService.isActivePage(this.currentPage, label);
//     }

//     ngOnDestroy(): void {
//         this.subscription.unsubscribe();
//         this.imgBookHelperService.removeImgBookInstance();
//         this.imgBookHelperService.imgBook = null;
//         document.querySelector('#imgbook').removeEventListener('scroll', this.pdzTipModalHandler.bind(this));
//         this.removeUndoRedoEventListeners();
//         this.appUnloadTrackerService.destroy();
//         window.removeEventListener("orientationchange", this.orientationChangeEventListener);
//         window.removeEventListener('scroll', this.windowScrollEventListener);
//         document.querySelector('#imgbook').removeEventListener('scroll', this.imgbookScrollEventListener);
//         document.getElementById('imgbook').children[0].removeEventListener("dblclick", this.imgbookDblclickEventListener);
//         document.getElementById('imgbook').removeEventListener('wheel', this.imgbookMouseWheelEventListener);
//         $(".foc-container").off('click');
//         $(".foc-container").off('hide.bs.dropdown');
//         $(document).off('.studentbook');
//         $(window).off('keydown.studentbook');
//         this.notePinPositionUpdateSubscriber.unsubscribe();
//         window.removeEventListener("pageshow", this.reloadFocOnBrowserback);

//         // reset all notes and drawings stored in the memory
//         this.resetStudentBook(false);

//         // reset tools service
//         this.toolsService.reset();

//         // reset spotlight mask object
//         this.selectionBoxCollection = {};

//         // clear get ordered classes interval on destroy
//         clearInterval(this.getClassesInterval);
//     } 

//     resetStudentBook(toggleBook = false){

//         this.studentBookService.isEbookInView = false;
//         clearInterval(this.getClassesInterval);
        
//         // reset pages array on ebook toggle so that previous notes are not saved.
//         // reset single note config so that individual note is not saved.
//         this.pages = [];
//         this.singleNoteConfig = undefined;
//         // reset all notes stor4ed in the memory
//         this.notesDataService.resetAllNotes();
//         this.isNoteLoadFailed = false;
//         this.notesDataService.resetOfflineWorkflow();
//         // destroying audio and video players
//         if(window['dlsVideoPlayer'].player) {
//             window['dlsVideoPlayer'].destroyPlayer();
//         } else if(window['dlsAudioPlayer'].player) {
//             window['dlsAudioPlayer'].destroyPlayer();
//         }
        
//         // reset the drawing cache on ebook toggle.
//         this.drawingDataService.emptyDrawingCache();
//         this.isDrawingToastShown = false;
//         this.isDrawingToastErrorShown = false;
//         // close all selection boxes on ebook toggle
//         this.closeAllSelectionBoxes();
//         // reset drawing fetching retry logic
//         this.drawingDataService.resetBackgroundRetryAttempts(true);
//         this.notePinPositionUpdateSubscriber.unsubscribe();

//         // removing event listeners
//         this.imgBookHelperService.removeHotspotEventListeners();
//         for(const pageDIV of ['A', 'B']){
//             if(this["stage" + pageDIV]){
//                 this["stage" + pageDIV].off('mousedown touchstart');
//                 this["stage" + pageDIV].off('mousemove touchmove mouseover');
//                 this["stage" + pageDIV].off('mouseup mouseleave touchend');
//                 this.removeHotspotEventListenersforSelectionBox(pageDIV);
//                 this.removeSelectionBoxEventListenersCallback(pageDIV);
//             }
//         }

//         this.closeAllSelectionBoxes();

//         // remove imgEbookIns from memory
//         this.imgBookHelperService.removeImgBookInstance();
//         this.imgBookHelperService.removeInteractEventListeners();
//         this.isBookToggleCompleted = false;
//         this.isOverlayJsonLoaded = false;
//         this.toaster.isUiRendered(false);

//         // force sync data with server
//         this.desktopEBookVMService.syncLocalWithServer(true);
//         this.desktopEBookVMService.resetVM();

//         // this statement is required to reset the previous page label
//         this.previousPageLabel = "";
//         // set the new toogling state
//         this.setToolbarProperty('previousPageLabel', this.previousPageLabel);

//         // reset page load variable for book to false on reset.
//         this.isPageLoadedObject[this.studentBook.meta.code] = false;

//         this.lastSetPageOrientation = undefined;

//         // #1993 issue fix
//         // resetting toc wrapper and currentPage, since it was causing incorrenct unit states in TOC
//         this.tocWrapper = {};
//         this.currentPage = [];

//         if (toggleBook) {
//             this.desktopAppEventsService.setLastVisitedPage(this.desktopAppEventsService.CONSTANTS.NAVIGATED_PAGE_NAMES.EREADER);
//             this.desktopAppEventsService.setNavigationFromContext(this.studentBook.meta.code);
//         }

//         if (environment.isDesktopApp) {
//             let isBookDownloaded = this.downloadHelperService.isBookDownloaded(this.studentBook.meta.code);
//             let navigatedFrom = this.desktopAppEventsService.CONSTANTS.NAVIGATED_PAGE_NAMES.EREADER;
//             let navigatedFromContext = this.desktopAppEventsService.getNavigationFromContext();

//             let navigatedTo = this.desktopAppEventsService.CONSTANTS.NAVIGATED_PAGE_NAMES.DASHBOARD;
//             if (!this.route.snapshot.paramMap.get('class')) {
//                 navigatedTo = this.desktopAppEventsService.CONSTANTS.NAVIGATED_PAGE_NAMES.PRODUCTDETAILS;
//             }

//             if (toggleBook) {
//                 navigatedTo = this.desktopAppEventsService.CONSTANTS.NAVIGATED_PAGE_NAMES.EREADER;
//             }

//             let eventObject = this.desktopAppEventsService.generateContentEvent(
//                 this.userData.extUserId, this.userData.role, this.studentBook.meta.code, isBookDownloaded,
//                 navigatedFrom, [navigatedFromContext], navigatedTo, this.desktopAppEventsService.CONSTANTS.EVENT_ACTIONS.COMPLETE, this.desktopAppEventsService.CONSTANTS.EVENT_CATEGORIES.CONTENT
//             );
//             this.desktopAppEventsService.generateDesktopEvent(eventObject);


//             // sync events in case ereader experience is ended in online mode.
//             if (environment.isDesktopApp && this.isOnline && !toggleBook) {
//                 this.desktopAppEventsService.syncDesktopEvents(this.userData.extUserId);
//             }
//         }
        
//         if (environment.isDesktopApp) {
//             // clearing cache
//             DLS_IPCCallers.CLEAR_CACHE();
//         }
        
//     }
    
//     //set current tool, size, color for drawing tool panel
//     setCurrentTool($event) {

//         // let desktopDiv:any = document.querySelector(".toolbar-primary")

//         // if($(window).height() <=650) {  
//         //     console.log("trigger for toolbar")
//         //     if($event.tool == "pen") {
//         //         desktopDiv.style["bottom"] = "200px";
//         //     }
//         //     if($event.tool == "highlighter") {
//         //         desktopDiv.style["bottom"] = "132px";//44 + 64 +24
//         //     }
//         // }
//         if (this.newSelectionBoxConfig.currentFeature == 'delete' && this.newSelectionBoxConfig.isActive) {
//             this.initDelete();
//             this.setToolbarProperty('currentTool', undefined);
//         }

//         this.setToolbarProperty('currentTool' , $event.tool);
        
//         // (size or color sub menu is clicked)
//         if($event.check == 'size' || $event.check == 'color') {
//             this.setToolbarProperty(`menus.${$event.tool.toUpperCase()}_MENU.value.stroke-${$event.check}`, $event.value);
//         }

//         if($event.tool == "eraser") {
//             this.drawingToolsConfig.type = "erase";
//         } else {
//             this.drawingToolsConfig.type = undefined;
//         }
        
//         if($event.tool === 'pen') {
//             this.drawingToolsConfig.currentTool = 'pen';
//             this.drawingToolsConfig.opacity = 1;
//             this.drawingToolsConfig.strokeColor = this.toolbarConfig.menus.PEN_MENU.value['stroke-color'];
//             this.drawingToolsConfig.strokewidth = parseInt(this.toolbarConfig.menus.PEN_MENU.value['stroke-size'].substring(0, this.toolbarConfig.menus.PEN_MENU.value['stroke-size'].length-2));
//             this.rotate('pen', this.drawingToolsConfig.strokeColor, this.drawingToolsConfig.strokewidth);
//         }

//         if($event.tool === 'highlighter') {
//             this.drawingToolsConfig.currentTool = 'highlighter';
//             this.drawingToolsConfig.opacity = 0.6;
//             this.drawingToolsConfig.strokeColor = this.toolbarConfig.menus.HIGHLIGHTER_MENU.value['stroke-color'];
//             this.drawingToolsConfig.strokewidth = parseInt(this.toolbarConfig.menus.HIGHLIGHTER_MENU.value['stroke-size'].substring(0, this.toolbarConfig.menus.HIGHLIGHTER_MENU.value['stroke-size'].length-2));
//             this.rotate('highlighter', this.drawingToolsConfig.strokeColor, this.drawingToolsConfig.strokewidth);
            
//         }

//         if($event.tool === 'eraser') {
//             this.drawingToolsConfig.currentTool = 'eraser';
//             this.drawingToolsConfig.opacity = 1;
//             this.drawingToolsConfig.strokeColor = '#FFFFFF';
//             this.drawingToolsConfig.strokewidth = 8;
//         }

//         this.toggleDrawingTools(true);
//     }

//     updateDrawingProperty(toolName, toolValue:any = 'erase') {       
//         this.drawingToolsConfig.type = toolValue;
//         return true;
//     }

//     zoomPage(event) {

//         // variable declaration for NEMO-5853 and NEMO-5648
//         let readerContainer:any = document.querySelector('#reader-container');
//         let scrollLeftBeforeZoom = document.querySelector('.outer-container').scrollLeft;
//         let scrollTopBeforeZoom = document.querySelector('.outer-container').scrollTop;
//         let tempXTransBeforeZoom = +readerContainer.style.transform.match(/(-?[0-9\.]+)/g)[1];
//         let tempYTransBeforeZoom = +readerContainer.style.transform.match(/(-?[0-9\.]+)/g)[2];

//         var fontsize = parseFloat($("#imgbook").css("font-size").substring(0, $("#imgbook").css("font-size").length-2));  
//         if(event.zoomType == 'ZOOM_IN' && this.imgBookHelperService.canZoom('ZOOM_IN')) {
//             this.currentPageOrientation = undefined;
//             this.updatePageViewButtonsState();
//             this.imgBook.zoomin();            
//         } else if(event.zoomType == 'ZOOM_OUT' && this.imgBookHelperService.canZoom('ZOOM_OUT')){
//             this.currentPageOrientation = undefined;            
//             this.updatePageViewButtonsState();
//             this.imgBook.zoomout();
//         }

//         // Variable declaration for NEMO-5648
//         let outerContainer:any = document.querySelector('.outer-container');
//         let newFontsize = parseFloat($("#imgbook").css("font-size").substring(0, $("#imgbook").css("font-size").length-2)); 
//         let tempXTrans = +readerContainer.style.transform.match(/(-?[0-9\.]+)/g)[1];
//         let tempYTrans = +readerContainer.style.transform.match(/(-?[0-9\.]+)/g)[2];
//         let scale = fontsize/newFontsize;
        
//         var sidebarContainer:any = document.querySelector('.sidebar');            
//         if(this.sidebarConfig["current-sidebar"] == "notes") {
//             sidebarContainer = document.querySelector('.notes-wrapper');
//         }
//         if(this.sidebarConfig["current-sidebar"] == "dictionary") {
//             sidebarContainer = document.querySelector('.dictionary-wrapper');
//         }

//         let tocWidth = this.sidebarConfig.position === undefined ? 0 : this.sidebarConfig.position === 'left' ? +sidebarContainer.offsetWidth: 0;

//         /**
//          * in if check
//          * NEMO-5853 : [eReader] Toolbar Zoom - Zoom into centre of page
//          * Seperating the code for zoom and double tap correction.
//         */

//         /**
//          * if else if check
//          * NEMO-5648 : Zoom into location of double tap
//          * Zoom handling only needs to be done with double click and not with button zoomin zoomout so moved all the code inside if check.
//          * As double click is called for both desktop and touch devices we need to seperate them on out own
//          * Step 1 : Scale the translate value or scroll value according to zoom level. This will be moved out in next sprint.
//          * Step 2 : Correction to be added to zoom around the double click pointer location.
//         */ 

//         if (event.NativeEv.type == 'click' || event.zoomCentre) {

//             let xCenter = outerContainer.offsetWidth / 2;
//             let yCenter = outerContainer.offsetHeight / 2;

//             if(event.zoomType == 'ZOOM_IN') {

//                 if ('ontouchstart' in window) {
//                     tempXTrans /= scale;
//                     tempYTrans /= scale;
//                     tempXTrans = tempXTrans - (xCenter / scale - xCenter);
//                     tempYTrans = tempYTrans - (yCenter / scale - yCenter);
//                     this.imgBook.setTranslateCoords({x:tempXTrans, y: tempYTrans});
//                 } else {
//                     outerContainer.scrollLeft /= scale;
//                     outerContainer.scrollTop /= scale;
//                     outerContainer.scrollLeft = outerContainer.scrollLeft + (xCenter / scale - xCenter);
//                     outerContainer.scrollTop = outerContainer.scrollTop + (yCenter / scale - yCenter);
//                 }

//             } else if(event.zoomType == 'ZOOM_OUT') {

//                 if ('ontouchstart' in window) {
//                     tempXTransBeforeZoom = tempXTransBeforeZoom / scale;
//                     tempYTransBeforeZoom = tempYTransBeforeZoom / scale;
//                     tempXTransBeforeZoom = tempXTransBeforeZoom + (xCenter - (xCenter / scale) );
//                     tempYTransBeforeZoom = tempYTransBeforeZoom + (yCenter - (yCenter / scale) );
//                     this.imgBook.setTranslateCoords({x:tempXTransBeforeZoom, y: tempYTransBeforeZoom});
                    
//                 } else {
//                     scrollLeftBeforeZoom = scrollLeftBeforeZoom / scale;
//                     scrollTopBeforeZoom = scrollTopBeforeZoom / scale;
//                     scrollLeftBeforeZoom = scrollLeftBeforeZoom - (xCenter - (xCenter / scale) );
//                     scrollTopBeforeZoom = scrollTopBeforeZoom - (yCenter - (yCenter / scale) );
//                     outerContainer.scrollLeft = scrollLeftBeforeZoom;
//                     outerContainer.scrollTop = scrollTopBeforeZoom;
//                 }

//             }

//         } 
//         // NEMO-12688: Disabling zoom-in for imgbook on double-click

//         // if(event.NativeEv.type == 'dblclick') {
//         //     // check for touch device
//         //     if ('ontouchstart' in window) {

//         //         if(this.sidebarConfig.isActive) {
//         //             var sidebarClass = this.sidebarConfig["current-sidebar"] == "toc" ? ".sidebar" : ".notes-wrapper";
//         //             let tocType = window.getComputedStyle(document.querySelector(sidebarClass)).position == "relative" || 
//         //             (window.getComputedStyle(document.querySelector(sidebarClass)).right == "0px" && $('.foc-container').width()>=576) 
//         //             ? "relative" : "absolute"; 
//         //             if(tocType == 'absolute') {
//         //                 tocWidth = 0;
//         //             } 
//         //         }

//         //         tempXTrans /= scale;
//         //         tempYTrans /= scale;
//         //         tempXTrans = tempXTrans - (event.NativeEv.pageX/scale - event.NativeEv.pageX);
//         //         tempYTrans = tempYTrans - (event.NativeEv.pageY/scale - event.NativeEv.pageY);
//         //         tempXTrans = tempXTrans + (tocWidth/scale - tocWidth);
//         //         this.imgBook.setTranslateCoords({x:tempXTrans, y: tempYTrans});
//         //     } else {
//         //         outerContainer.scrollLeft /= scale; 
//         //         outerContainer.scrollTop /= scale; 
//         //         outerContainer.scrollLeft = outerContainer.scrollLeft + (event.NativeEv.pageX/scale - event.NativeEv.pageX);
//         //         outerContainer.scrollTop = outerContainer.scrollTop + (event.NativeEv.pageY/scale - event.NativeEv.pageY);
//         //         outerContainer.scrollLeft = outerContainer.scrollLeft - (tocWidth/scale - tocWidth);
//         //     }
//         // }


//         this.resizeAllSelectionBoxes(fontsize);

//         event.NativeEv.stopPropagation();
//         this.toggleDrawingTools(false);
//         // this.isDrawingPanelOpen = false;
        
//         // NEMO-5197 : close drawing tools menu on zoomin or zoomout
//         if(this.toolbarConfig.showDrawingMenu) {
//             this.toggleDrawingMenu(false);
//         }

//         // NEMO-5399 : close selection box menu on previous next and any page load
//         if(this.toolbarConfig.showSelectionBoxMenu) {
//             this.toggleSelectionBoxMenu(false);
//         }

//         this.updatePageViewButtonsState();

//         // handle pdz modal handler on zoom page
//         this.pdzTipModalHandler();
//     }

//     updatePageViewButtonsState() {
//         setTimeout(()=> {
//             this.setToolbarProperty('menus.PAGE_VIEW.menu-items.zoom.zoomInDisabled', !this.imgBookHelperService.canZoom('ZOOM_IN'));
//             this.setToolbarProperty('menus.PAGE_VIEW.menu-items.zoom.zoomOutDisabled', (!this.imgBookHelperService.canZoom('ZOOM_OUT')));
//             this.setToolbarProperty('menus.PAGE_VIEW.menu-items.fit-to-width.disabled', this.imgBookHelperService.isFitToWidth());
//             this.setToolbarProperty('menus.PAGE_VIEW.menu-items.fit-to-screen.disabled', this.imgBookHelperService.isFitToScreen());
//         });
//     }

//     zoomSpecificArea(event) {
//         event.stopPropagation();
//     }

//     // change page orientation (Accepted values: 'FIT_TO_WIDTH'/'FIT_TO_SCREEN')
//     changePageOrientation(pageOrientation, event,  disabled = false) {
//         if(disabled) event.stopPropagation();
//         if(!this.isTouchDevice && pageOrientation == this.currentPageOrientation) {
//             return;
//         }
//         this.currentPageOrientation = pageOrientation; 
//         this.lastSetPageOrientation = pageOrientation;
//         setTimeout(()=> {
//             var fontsize = parseFloat($("#imgbook").css("font-size").substring(0, $("#imgbook").css("font-size").length-2));  
            
//             this.setPersistantPageOrientation();
//             this.updatePageViewButtonsState();        
//             this.resizeSidebar();
//             this.toggleDrawingTools(false); 
//             this.setToolbarProperty("current-sub-menu", null);
//             // this.isDrawingPanelOpen = false;     
//             this.resizeAllSelectionBoxes(fontsize);

//             // NEMO-5197 : close drawing tools menu on zoomin or zoomout
//             if(this.toolbarConfig.showDrawingMenu) {
//                 this.toggleDrawingMenu(false);
//             }

//             // NEMO-5399 : close selection box menu on previous next and any page load
//             if(this.toolbarConfig.showSelectionBoxMenu) {
//                 this.toggleSelectionBoxMenu(false);
//             }
            
//             this.updatePageViewButtonsState();

//             // handle pdz modal on FIT_TO_SCREEN/FIT_TO_WIDTH
//             this.pdzTipModalHandler();
//         });
//     }

//     hideAll() {
//         this.drawingToolsConfig.showStage = !this.drawingToolsConfig.showStage;
//         this.setToolbarProperty('menus.PEN_MENU.menu-items.hide.disabled', !this.drawingToolsConfig.showStage);
//         this.setToolbarProperty('menus.HIGHLIGHTER_MENU.menu-items.hide.disabled', !this.drawingToolsConfig.showStage);
//         this.toggleDrawingTools(this.drawingToolsConfig.showStage);
//         let pagesDIV;
//         // let that = this;
//         if(this.currentPageLayout == PAGE_LAYOUT.DOUBLE) {
//             pagesDIV = ["A", "B"];
//         } else {
//             pagesDIV =  ["A"];
//         }
//         if(this.drawingToolsConfig.showStage) {
//             pagesDIV.forEach(function(pageDIV) {
//                 $("#drawing-tools-container-" + pageDIV)[0].style.display = 'block';
//             });
//         } else {
//             pagesDIV.forEach(function(pageDIV) {
//                 $("#drawing-tools-container-" + pageDIV)[0].style.display = 'none';
//             });
//         }
//     }

//     toggleDrawings(state, pageDIV) {

//         if(state) {
//             $("#drawing-tools-container-" + pageDIV)[0].style.display = 'none';
//         } else {
//             $("#drawing-tools-container-" + pageDIV)[0].style.display = 'block';
//         }

//     }
    
//     pointliesinbox(x, y, w, h, px, py) {

//         var x1, y1, x2, y2;
//         x1 = x;
//         y1 = y;
//         x2 = x + w;
//         y2 = y + h;

//         if ( (x1 <= px && px <= x2) && (y1 <= py && py <= y2) ) {
//             return true;
//         }
//         return false;
//     }

//     getMinifiedJsonFromStage(stage) {
//         var lines = stage.find('Line');
//         var finalArray = new Array();
//         lines.forEach(element => {
//             finalArray.push(new Array(element.attrs.tool, element.attrs.fontSize, this.colorToCode[element.attrs.stroke], element.attrs.strokeWidth, element.attrs.points));
//         });
//         return JSON.stringify(finalArray);
//     }

//     paintLinesOnStageFromMinifiedJson(stage, json) {

//         if(!json) {
//             return;
//         }

//         var lines = json;
//         if (typeof json === "string") {
//             lines = JSON.parse(json);
//         }
//         let that = this;
//         lines.forEach(element => {
        
//             let globalCompositeOperation : string;
//             let opacity: number;
//             var lineCap = 'round';
//             var lineJoin = 'round';
//             var tension = 0.3;
//             let scale = parseFloat(that.drawingToolsConfig.defaultFontSize)/parseFloat(element[1]);

//             if(element[0] === 'p') {
//                 globalCompositeOperation = 'source-over';
//                 opacity = 1;

//             } else if (element[0] === 'h') {
//                 globalCompositeOperation = 'source-over';
//                 opacity = 0.6;

//             } else {
//                 globalCompositeOperation = 'destination-out';
//                 opacity = 1;
//             }

//             var l = new Line({
//                 stroke: this.codeToColor[element[2]],
//                 strokeWidth: element[3],
//                 opacity: opacity,
//                 globalCompositeOperation: globalCompositeOperation,
//                 lineCap: lineCap,
//                 lineJoin : lineJoin,
//                 tension : tension,
//                 points: element[4],
//                 fontSize: element[1],
//                 tool: element[0]
//             });
//             l.scale({x:scale, y:scale});
//             stage.children[0].add(l);
//         });

//         stage.children[0].batchDraw();
//         stage.batchDraw();   

//     }

//     initSelectionBoxes(feature?) {  
        
//         let pagesDIV;
//         let that = this;
//         if(this.currentPageLayout == PAGE_LAYOUT.DOUBLE) {
//             pagesDIV = ["A", "B"];
//         } else {
//             pagesDIV =  ["A"];
//         }
//         pagesDIV.forEach(function(pageDIV) {
            
//             var Div:any = document.querySelector('#selection-box-container-' + pageDIV);

//             if (Div === null) {
//                 $("#readerpagediv"+pageDIV).append("<div id='selection-box-container-" + pageDIV + "'  style='width:100%; pointer-events:all; cursor: crosshair;border: 0px solid red;height:100%;position:absolute;z-index:7;' class='selection-box-container'></div>");
//                 $("#selection-box-container-"+pageDIV).append("<div id='selection-box-" + pageDIV + "'  style='width:0px; pointer-events:all; cursor: crosshair;height:0px;background-color: rgba(215,215,215, 0.25);border-radius: 2px;position:absolute;z-index:7;border:2px solid var(--cup-general-color-5);top:-5px;left:-5px;' class='selection-box'></div>");
//             }

//             var $SelectionBoxContainer:any = $('#selection-box-container-' + pageDIV);
//             var SelectionBox:any = document.querySelector('#selection-box-' + pageDIV);
//             var readerContainerWrapper:any = document.querySelector('#reader-container-wrapper');
//             var $imagebookWrapper:any = $('#imgbook_wrapper');
//             var imagebookScroll:any = document.querySelector('#imgbook');
//             var readerContainer:any = document.querySelector('#reader-container');
//             var sidebarContainer:any = document.querySelector('.sidebar');
//             var $toolbarWrapper:any = $('#toolbar-wrapper-id');

//             if(that.sidebarConfig["current-sidebar"] == "notes") {
//                 sidebarContainer = document.querySelector('.notes-wrapper');
//             }
//             if(that.sidebarConfig["current-sidebar"] == "dictionary") {
//                 sidebarContainer = document.querySelector('.dictionary-wrapper');
//             }
//             var appContainer:any = document.querySelector('.app-container');

//             $SelectionBoxContainer.css({
//                 'display': 'block',
//                 'cursor': 'crosshair',
//                 'pointer-events': 'all'
//             });
//             SelectionBox.style.display = 'block';
//             SelectionBox.style.cursor = 'crosshair';
//             imagebookScroll.style.cursor = 'crosshair';
//             SelectionBox.style.backgroundColor = 'rgba(215,215,215, 0.25)';
//             SelectionBox.style.pointerEvents = 'all';
//             SelectionBox.style.top = '-5px';
//             SelectionBox.style.left = '-5px';
//             SelectionBox.style.width = '0px';
//             SelectionBox.style.height = '0px';


//             var oldX;
//             var oldY;
//             var offL;
//             var offT;
//             var scrL;
//             var scrT;
//             var newX;
//             var newY
//             var tocWidth;
//             var isPaint = false;
//             var mouseleave = false;

            
//             $SelectionBoxContainer.on('mousedown', function (e:any) {
//                 if(feature == 'mask' && that.newFeatureCounter[pageDIV]['mask'] >= that.maskLimit) {
//                     that.showHideBoxLimitToast(pageDIV);
//                     return;
//                 }
//                 that.toaster.clearPendingToasts({ hideBox: true });
//                 that.maskLimitToastPageDiv = undefined;
//                 readerContainerWrapper = document.querySelector('#reader-container-wrapper');
//                 sidebarContainer = document.querySelector('.sidebar');
//                 if(that.sidebarConfig["current-sidebar"] == "notes") {
//                     sidebarContainer = document.querySelector('.notes-wrapper');
//                 }
//                 if(that.sidebarConfig["current-sidebar"] == "dictionary") {
//                     sidebarContainer = document.querySelector('.dictionary-wrapper');
//                 }
//                 tocWidth = that.sidebarConfig.position === undefined ? 0 : that.sidebarConfig.position === 'left' ?  +sidebarContainer.offsetWidth: 0;
//                 isPaint = true;
//                 offL = readerContainerWrapper.offsetLeft + appContainer.offsetLeft;
//                 offT = readerContainerWrapper.offsetTop + appContainer.offsetTop;
//                 scrT = imagebookScroll.scrollTop;
//                 scrL = imagebookScroll.scrollLeft;
//                 oldX = e.pageX - offL + scrL - tocWidth;
//                 oldY = e.pageY - offT + scrT;
//                 SelectionBox.currentStage = pageDIV;

//                 if($("#imgbook").hasClass("dragscroll")) {
//                     $("#imgbook").removeClass("dragscroll");
//                     dragscroll.reset();
//                 }

//                 if(feature == 'spotlight' || that.newFeatureCounter[pageDIV]['spotlight'] > 0 || that.newFeatureCounter[pageDIV]['zoomHotspot'] > 0) {
//                     that.closeAllSelectionBoxesOfAPage(pageDIV, false, true);
//                 }

//             });

//             $SelectionBoxContainer.on('mousemove', function (e:any) {

//                 if(isPaint) {
//                     mouseleave = false;
//                     scrT = imagebookScroll.scrollTop;
//                     scrL = imagebookScroll.scrollLeft;
//                     newX = e.pageX - offL + scrL - tocWidth;
//                     newY = e.pageY - offT + scrT;

//                     var left   = newX > oldX ? oldX : newX;
//                     var top    = newY > oldY ? oldY : newY;
//                     var width  = newX > oldX ? newX - oldX : oldX - newX;
//                     var height = newY > oldY ? newY - oldY : oldY - newY;
//                     if (pageDIV === 'B') {
//                         left -= readerContainerWrapper.offsetWidth / 2;
//                     }

//                     SelectionBox.style.left = left + 'px';
//                     SelectionBox.style.top = top + 'px';
//                     SelectionBox.style.width = width + 'px';
//                     SelectionBox.style.height = height + 'px';
//                 }
//             });

//             $SelectionBoxContainer.on('mouseup', function(e:any) {
//                 isPaint = false;

//                 let x = SelectionBox.offsetLeft;
//                 let y = SelectionBox.offsetTop;
//                 let w = parseInt(SelectionBox.style.width);
//                 let h = parseInt(SelectionBox.style.height);
//                 let pDIV = SelectionBox.currentStage;

//                 if(!$("#imgbook").hasClass("dragscroll")) { 
//                     $("#imgbook").addClass("dragscroll");  
//                     dragscroll.reset();                             
//                 }

//                 if ( x == -5 && y == -5 && w == 0 && h == 0 ) {
//                     return;
//                 } else if ( (w < 16 || h < 36) && feature != 'delete' ) {
//                     ({x, y, w, h} = that.calcMinSelBoxDim({x, y, w, h, pDIV}))

//                     if (feature == 'spotlight') {
//                         that.implementSpotlight(x, y, w, h, pDIV);
//                         that.removeSelectionBoxEventListeners();
//                         // NEMO-13917: deselection of spotlight or masking 
//                         // that.initSpotlight();
//                     } else if (feature == 'mask') {
//                         that.implementMask(x, y, w, h, pDIV);
//                         that.removeSelectionBoxEventListeners();
//                         // NEMO-13917: deselection of spotlight or masking
//                         // that.initMask();
//                     }
//                     return;
//                 }
                
//                 if (feature == 'delete') {
//                     that.splitSelectionBoxandCallFeature(x,y,w,h,pDIV,feature,that.currentPageLayout,readerContainerWrapper.offsetWidth);
//                     that.removeSelectionBoxEventListeners();
//                     that.initDelete();
//                 } else if (feature == 'mask') {
//                     that.implementMask(x,y,w,h,pDIV);
//                     that.removeSelectionBoxEventListeners();
//                     // NEMO-13917: deselection of spotlight or masking
//                     // that.initMask();
//                 } else if (feature === 'spotlight') {
//                     that.implementSpotlight(x,y,w,h,pDIV);
//                     that.removeSelectionBoxEventListeners();
//                     // NEMO-13917: deselection of spotlight or masking
//                     // that.initSpotlight();
//                 }

//             });

//             $SelectionBoxContainer.on('mouseleave', function(e:any) {
//                 if (isPaint) {
//                     mouseleave = true;
//                 }
//             });

//             $imagebookWrapper.on('mousemove', mouseMoveCallback);
//             $toolbarWrapper.on('mousemove', mouseMoveCallback);

//             $imagebookWrapper.on('mouseup', mouseUpCallback);

//             $toolbarWrapper.on('mouseup', mouseUpCallback);


//             $SelectionBoxContainer.on('touchstart', function (e:any) {

//                 // disable gestures on touch start
//                 if(feature == 'mask' && that.newFeatureCounter[pageDIV]['mask'] >= that.maskLimit) {
//                     that.showHideBoxLimitToast(pageDIV);
//                     return;
//                 }
//                 that.toaster.clearPendingToasts({ hideBox: true });
//                 that.maskLimitToastPageDiv = undefined;

//                 if(that.isTouchDevice && e.touches.length > 1) {
//                     return false;
//                 }

//                 that.imgBook.enableTouchScreenGestures({
//                     disableSwipe: true, 
//                     disablePan: true, 
//                     disablePinch: true
//                 });    

//                 sidebarContainer = document.querySelector('.sidebar');
//                 if(that.sidebarConfig["current-sidebar"] == "notes") {
//                     sidebarContainer = document.querySelector('.notes-wrapper');
//                 }
//                 if(that.sidebarConfig["current-sidebar"] == "dictionary") {
//                     sidebarContainer = document.querySelector('.dictionary-wrapper');
//                 }
//                 readerContainerWrapper = document.querySelector('#reader-container-wrapper');
//                 tocWidth = that.sidebarConfig.position === undefined ? 0 : that.sidebarConfig.position === 'left' ? +sidebarContainer.offsetWidth: 0;
//                 isPaint = true;
//                 offL = readerContainerWrapper.offsetLeft + appContainer.offsetLeft;
//                 offT = readerContainerWrapper.offsetTop + appContainer.offsetTop;
//                 var str = readerContainer.style.transform; 
//                 // scenario: when zoom level is at default (NO ZOOM)
//                 if (str === '') {
//                     scrT = -imagebookScroll.scrollTop;
//                     scrL = -imagebookScroll.scrollLeft;
//                 }
//                 // scenario (limited) : when view port is translated instead of scroll
//                 else if (str.match('translate3d') !== null && str.match('translate3d').length > 0) {
//                     scrL = +readerContainer.style.transform.match(/(-?[0-9\.]+)/g)[1];
//                     scrT = +readerContainer.style.transform.match(/(-?[0-9\.]+)/g)[2];
//                 }
//                 // scenario (limited) : used only for emulator
//                 else if (str.match('translate') !== null && str.match('translate').length > 0) {
//                     scrT = -imagebookScroll.scrollTop;
//                     scrL = -imagebookScroll.scrollLeft;
//                 } else {
//                     // scenario: left over cases
//                     scrT = -imagebookScroll.scrollTop;
//                     scrL = -imagebookScroll.scrollLeft;
//                 }
//                 oldX = e.touches[0].pageX - offL - scrL - tocWidth;
//                 oldY = e.touches[0].pageY - offT - scrT;
//                 SelectionBox.currentStage = pageDIV;

//                 if(feature == 'spotlight' || that.newFeatureCounter[pageDIV]['spotlight'] > 0 || that.newFeatureCounter[pageDIV]['zoomHotspot'] > 0) {
//                     that.closeAllSelectionBoxesOfAPage(pageDIV, false, true);
//                 }

//                 e.preventDefault();

//             });

//             $SelectionBoxContainer.on('touchmove', function (e:any) {
//                 if(isPaint) {
                    
//                     // disable gestures on touch start

//                     if(that.isTouchDevice && e.touches.length > 1) {
//                         return false;
//                     }

//                     let videoContainer = document.querySelector('.video-container');
//                     let audioContainer = document.querySelector('.audio-container');
//                     let timerContainer = document.querySelector('.timer-overlay');
//                     let loHotspots = document.querySelectorAll('.hotspot-overlay-modal');


//                     let position = {
//                         x : Math.round(e.touches[0].pageX),
//                         y : Math.round(e.touches[0].pageY)
//                     };
//                     let leftPos, topPos, widthPos, heightPos;

//                     if(audioContainer) {
//                         leftPos = Math.round(audioContainer.getBoundingClientRect().left);
//                         topPos = Math.round(audioContainer.getBoundingClientRect().top);
//                         widthPos = Math.round(audioContainer.getBoundingClientRect().width);
//                         heightPos = Math.round(audioContainer.getBoundingClientRect().height);

//                         if(that.pointliesinbox(leftPos, topPos, widthPos, heightPos, position.x, position.y)) {
//                             return;
//                         }

//                     }

//                     if(videoContainer) {
//                         leftPos = Math.round(videoContainer.getBoundingClientRect().left);
//                         topPos = Math.round(videoContainer.getBoundingClientRect().top);
//                         widthPos = Math.round(videoContainer.getBoundingClientRect().width);
//                         heightPos = Math.round(videoContainer.getBoundingClientRect().height);
                        
//                         if(that.pointliesinbox(leftPos, topPos, widthPos, heightPos, position.x, position.y)) {
//                             return;
//                         }

//                     }

//                     if(timerContainer) {
//                         leftPos = Math.round(timerContainer.getBoundingClientRect().left);
//                         topPos = Math.round(timerContainer.getBoundingClientRect().top);
//                         widthPos = Math.round(timerContainer.getBoundingClientRect().width);
//                         heightPos = Math.round(timerContainer.getBoundingClientRect().height);
                        
//                         if(that.pointliesinbox(leftPos, topPos, widthPos, heightPos, position.x, position.y)) {
//                             return;
//                         }

//                     }

//                     if (loHotspots) {
//                         let wasInsideIfCheck = false;
//                         Array.from(loHotspots).forEach(hotspot => {

//                             leftPos = Math.round(hotspot.getBoundingClientRect().left);
//                             topPos = Math.round(hotspot.getBoundingClientRect().top);
//                             widthPos = Math.round(hotspot.getBoundingClientRect().width);
//                             heightPos = Math.round(hotspot.getBoundingClientRect().height);

//                             if(that.pointliesinbox(leftPos, topPos, widthPos, heightPos, position.x, position.y)) {
//                                 wasInsideIfCheck = true;
//                                 return;
//                             }

//                         });

//                         if(wasInsideIfCheck) {
//                             return;
//                         }

//                     }

//                     var str = readerContainer.style.transform; 
//                     // scenario: when zoom level is at default (NO ZOOM)
//                     if (str === '') {
//                         scrT = -imagebookScroll.scrollTop;
//                         scrL = -imagebookScroll.scrollLeft;
//                     }
//                     // scenario (limited) : when view port is translated instead of scroll
//                     else if (str.match('translate3d') !== null && str.match('translate3d').length > 0) {
//                         scrL = +readerContainer.style.transform.match(/(-?[0-9\.]+)/g)[1];
//                         scrT = +readerContainer.style.transform.match(/(-?[0-9\.]+)/g)[2];
//                     }
//                     // scenario (limited) : used only for emulator
//                     else if (str.match('translate') !== null && str.match('translate').length > 0) {
//                         scrT = -imagebookScroll.scrollTop;
//                         scrL = -imagebookScroll.scrollLeft;
//                     } else {
//                         // scenario: left over cases
//                         scrT = -imagebookScroll.scrollTop;
//                         scrL = -imagebookScroll.scrollLeft;
//                     }

//                     newX = e.touches[0].pageX - offL - scrL - tocWidth;
//                     newY = e.touches[0].pageY - offT - scrT;

//                     var left   = newX > oldX ? oldX : newX;
//                     var top    = newY > oldY ? oldY : newY;
//                     var width  = newX > oldX ? newX - oldX : oldX - newX;
//                     var height = newY > oldY ? newY - oldY : oldY - newY;


//                     if(that.currentPageLayout == PAGE_LAYOUT.DOUBLE) {

//                         if (pageDIV === 'A') {
//                             if ( newX < 0 ) {
//                                 left = 0;
//                                 width = oldX;
//                             }
//                             /**
//                              * This modification is for the story delete across double pages. Currently it is for delete only but can be extended to any feture by removing the delete condition.
//                              * If the page is A, then remove the boundry condition that caps the seletion box at the right side.
//                              * This is replaced with the boundry condition of B so it does not exceed that. 
//                              * Same is done for mouse events.
//                              */
//                             if(feature == 'delete') {
//                                 if ( newX > readerContainerWrapper.offsetWidth) {
//                                     width = readerContainerWrapper.offsetWidth - left;
//                                 }
//                             } else {
//                                 if ( newX > readerContainerWrapper.offsetWidth/2) {
//                                     width = readerContainerWrapper.offsetWidth/2 - oldX;
//                                 }
//                             }
//                             if ( newY < 0 ) {
//                                 top = 0;
//                                 height = oldY;
//                             }
//                             if ( newY > readerContainerWrapper.offsetHeight) {
//                                 height = readerContainerWrapper.offsetHeight - oldY;
//                             }
//                         }
//                         if (pageDIV === 'B') {
//                             left -= readerContainerWrapper.offsetWidth / 2;
//                             /**
//                              * This modification is for the story delete across double pages. Currently it is for delete only but can be extended to any feture by removing the delete condition.
//                              * If the page is B, then remove the boundry condition that caps the seletion box at the left side.
//                              * This is replaced with the boundry condition of A so it does not exceed that.
//                              * Same is done for mouse events.
//                              */
//                             if(feature == 'delete') {
//                                 if ( newX < 0) {
//                                     left = -readerContainerWrapper.offsetWidth / 2;
//                                     width = oldX;
//                                 }
//                             } else {
//                                 if ( newX < readerContainerWrapper.offsetWidth/2) {
//                                     left = 0;
//                                     width = oldX - readerContainerWrapper.offsetWidth/2;
//                                 }
//                             }
//                             if ( newX > readerContainerWrapper.offsetWidth) {
//                                 width = readerContainerWrapper.offsetWidth/2 - left - 1;
//                             }
//                             if ( newY < 0 ) {
//                                 top = 0;
//                                 height = oldY;
//                             }
//                             if ( newY > readerContainerWrapper.offsetHeight) {
//                                 height = readerContainerWrapper.offsetHeight - oldY;
//                             }
//                         }
//                     } else {
//                         if ( newX < 0 ) {
//                             left = 0;
//                             width = oldX;
//                         }
//                         if ( newX > readerContainerWrapper.offsetWidth) {
//                             width = readerContainerWrapper.offsetWidth - oldX;
//                         }
//                         if ( newY < 0 ) {
//                             top = 0;
//                             height = oldY;
//                         }
//                         if ( newY > readerContainerWrapper.offsetHeight) {
//                             height = readerContainerWrapper.offsetHeight - oldY;
//                         }
//                     }

//                     SelectionBox.style.left = left + 'px';
//                     SelectionBox.style.width = width + 'px';
//                     SelectionBox.style.top = top + 'px';
//                     SelectionBox.style.height = height + 'px';

//                     e.preventDefault();

//                 }
//             });

//             $SelectionBoxContainer.on('touchend', function(e:any) {

//                 // enable gestures on touch end
                
//                 if(that.isTouchDevice && e.touches.length > 1) {
//                     return false;
//                 }

//                 that.imgBook.enableTouchScreenGestures({
//                     disableSwipe: false, 
//                     disablePan: false, 
//                     disablePinch: false
//                 });


//                 isPaint = false;

//                 let x = SelectionBox.offsetLeft;
//                 let y = SelectionBox.offsetTop;
//                 let w = parseInt(SelectionBox.style.width);
//                 let h = parseInt(SelectionBox.style.height);
//                 let pDIV = SelectionBox.currentStage;


//                 if(!$("#imgbook").hasClass("dragscroll")) { 
//                     $("#imgbook").addClass("dragscroll");  
//                     dragscroll.reset();                             
//                 }

//                 if ( x == -5 && y == -5 && w == 0 && h == 0 ) {
//                     return;
//                 } else if ( w < 5 || h < 5 ) {
//                     if(feature == 'spotlight') {
//                         that.removeSelectionBoxEventListeners();
//                         that.initSpotlight();
//                     } else if (feature == 'mask') {
//                         that.removeSelectionBoxEventListeners();
//                         that.initMask();
//                     }
//                     return;
//                 }
                
//                 if (feature == 'delete') {
//                     that.splitSelectionBoxandCallFeature(x,y,w,h,pDIV,feature,that.currentPageLayout,readerContainerWrapper.offsetWidth);
//                     that.removeSelectionBoxEventListeners();
//                     that.initDelete();
//                 } else if (feature == 'mask') {
//                     that.implementMask(x,y,w,h,pDIV);
//                     that.removeSelectionBoxEventListeners();
//                     // NEMO-13917: deselection of spotlight or masking
//                     // that.initMask();
//                 } else if (feature === 'spotlight') {
//                     that.implementSpotlight(x,y,w,h,pDIV);
//                     that.removeSelectionBoxEventListeners();
//                     // NEMO-13917: deselection of spotlight or masking
//                     // that.initSpotlight();
//                 }    

//                 e.preventDefault();

//             });
            
           
//             function mouseUpCallback(e) {
//                 if (isPaint) {
//                     isPaint = false;
//                     mouseleave = false;
                    

//                     let x = SelectionBox.offsetLeft;
//                     let y = SelectionBox.offsetTop;
//                     let w = parseInt(SelectionBox.style.width);
//                     let h = parseInt(SelectionBox.style.height);
//                     let pDIV = SelectionBox.currentStage;

//                     if(!$("#imgbook").hasClass("dragscroll")) { 
//                         $("#imgbook").addClass("dragscroll");  
//                         dragscroll.reset();                             
//                     }

    
//                     if ( x == -5 && y == -5 && w == 0 && h == 0 ) {
//                         return;
//                     } else if ( w < 16 || h < 36 ) {
//                         ({x, y, w, h} = that.calcMinSelBoxDim({x, y, w, h, pDIV}));

//                         if (feature == 'spotlight') {
//                             that.implementSpotlight(x, y, w, h, pDIV);
//                             that.removeSelectionBoxEventListeners();
//                             // NEMO-13917: deselection of spotlight or masking
//                             // that.initSpotlight();
//                         } else if (feature == 'mask') {
//                             that.implementMask(x, y, w, h, pDIV);
//                             that.removeSelectionBoxEventListeners();
//                             // NEMO-13917: deselection of spotlight or masking
//                             // that.initMask();
//                         }
//                         return;
//                     }
                    
//                     if (feature == 'delete') {
//                         that.splitSelectionBoxandCallFeature(x,y,w,h,pDIV,feature,that.currentPageLayout,readerContainerWrapper.offsetWidth);
//                         that.removeSelectionBoxEventListeners();
//                         that.initDelete();
//                     } else if (feature == 'mask') {
//                         that.implementMask(x,y,w,h,pDIV);
//                         that.removeSelectionBoxEventListeners();
//                         // NEMO-13917: deselection of spotlight or masking
//                         // that.initMask();
//                     } else if (feature === 'spotlight') {
//                         that.implementSpotlight(x,y,w,h,pDIV);
//                         that.removeSelectionBoxEventListeners();
//                         // NEMO-13917: deselection of spotlight or masking
//                         // that.initSpotlight();
//                     }    
//                 }
//             }

//             function mouseMoveCallback(e) {
//                 if (mouseleave) {
//                     scrT = imagebookScroll.scrollTop;
//                     scrL = imagebookScroll.scrollLeft;
//                     newX = e.pageX - offL + scrL - tocWidth;
//                     newY = e.pageY - offT + scrT;

//                     var left   = newX > oldX ? oldX : newX;
//                     var top    = newY > oldY ? oldY : newY;
//                     var width  = newX > oldX ? newX - oldX : oldX - newX;
//                     var height = newY > oldY ? newY - oldY : oldY - newY;

//                     if(that.currentPageLayout == PAGE_LAYOUT.DOUBLE) {
//                         if (pageDIV === 'A') {
//                             if ( newX < 0 ) {
//                                 left = 0;
//                                 width = oldX;
//                             }
//                             /**
//                              * This modification is for the story delete across double pages. Currently it is for delete only but can be extended to any feture by removing the delete condition.
//                              * If the page is A, then remove the boundry condition that caps the seletion box at the right side.
//                              * This is replaced with the boundry condition of B so it does not exceed that. 
//                              * Same is done for touch events.
//                              */
//                             if(feature == 'delete') {
//                                 if ( newX > readerContainerWrapper.offsetWidth) {
//                                     width = readerContainerWrapper.offsetWidth - left;
//                                 }
//                             } else {
//                                 if ( newX > readerContainerWrapper.offsetWidth/2) {
//                                     width = readerContainerWrapper.offsetWidth/2 - oldX;
//                                 }
//                             }
//                             if ( newY < 0 ) {
//                                 top = 0;
//                                 height = oldY;
//                             }
//                             if ( newY > readerContainerWrapper.offsetHeight) {
//                                 height = readerContainerWrapper.offsetHeight - oldY;
//                             }
//                         }
//                         if (pageDIV === 'B') {
//                             left -= readerContainerWrapper.offsetWidth / 2;
//                             /**
//                              * This modification is for the story delete across double pages. Currently it is for delete only but can be extended to any feture by removing the delete condition.
//                              * If the page is B, then remove the boundry condition that caps the seletion box at the left side.
//                              * This is replaced with the boundry condition of A so it does not exceed that.
//                              * Same is done for touch events.
//                              */
//                             if(feature == 'delete') {
//                                 if ( newX < 0) {
//                                     left = -readerContainerWrapper.offsetWidth / 2;
//                                     width = oldX;
//                                 }
//                             } else {
//                                 if ( newX < readerContainerWrapper.offsetWidth/2) {
//                                     left = 0;
//                                     width = oldX - readerContainerWrapper.offsetWidth/2;
//                                 }
//                             }
//                             if ( newX > readerContainerWrapper.offsetWidth) {
//                                 width = readerContainerWrapper.offsetWidth/2 - left - 1;
//                             }
//                             if ( newY < 0 ) {
//                                 top = 0;
//                                 height = oldY;
//                             }
//                             if ( newY > readerContainerWrapper.offsetHeight) {
//                                 height = readerContainerWrapper.offsetHeight - oldY;
//                             }
//                         }
//                     } else {
//                         if ( newX < 0 ) {
//                             left = 0;
//                             width = oldX;
//                         }
//                         if ( newX > readerContainerWrapper.offsetWidth) {
//                             width = readerContainerWrapper.offsetWidth - oldX;
//                         }
//                         if ( newY < 0 ) {
//                             top = 0;
//                             height = oldY;
//                         }
//                         if ( newY > readerContainerWrapper.offsetHeight) {
//                             height = readerContainerWrapper.offsetHeight - oldY;
//                         }
//                     }
//                     SelectionBox.style.left = left + 'px';
//                     SelectionBox.style.width = width + 'px';
//                     SelectionBox.style.top = top + 'px';
//                     SelectionBox.style.height = height + 'px';
//                 }
//             }
            
//         });
//     }

//     /**
//      * Modify the dimensions of selection box when selection box is smaller then expected
//      * @param dimensions object structure {x, y, w, h}
//      */
//     calcMinSelBoxDim({x, y, w, h, pDIV}) {
//         let growWidth = false;
//         let growHeight = false;
//         let oldWidth = 0;
//         let oldHeight = 0;

//         if (w < 16) {
//             growWidth = true;
//             oldWidth = w;
//             w = 16;
//         }

//         if (h < 36) {
//             growHeight = true;
//             oldHeight = h;
//             h = 36;
//         }

//         if (growWidth) {
//             x = x - ((w - oldWidth) / 2);
//         }
//         if (growHeight) {
//             y = y - ((h - oldHeight) / 2);
//         }

//         //Adjusting position so that SelectionBox does not grow outside the limits
//         let selectionBoxContainerBounds = document.querySelector('#selection-box-container-' + pDIV).getBoundingClientRect();
//         if (x < 0) {
//             x = 0;
//         }
//         if (y < 0) {
//             y = 0;
//         }
//         if ((x + w) > selectionBoxContainerBounds.width) {
//             x = x - ((x + w) - selectionBoxContainerBounds.width);
//         }
//         if ((y + h) > selectionBoxContainerBounds.height) {
//             y = y - ((y + h) - selectionBoxContainerBounds.height);
//         }

//         return {x, y, w, h};
//     }

//     splitSelectionBoxandCallFeature(x,y,w,h,pageDIV,feature,pageLayout,widthOfWrapper) {

//         /**
//          * function to split a double page selection into two individual selection boxes , 1 per page.
//          * If selection box is within the page then treat it as the default case.
//          * If selection box is across 2 pages then split it from x to width of imgbook/2 for page A,
//          * and 0 to w - width of imgbook / 2.
//          * 
//          * Another flag skipUndoRedo is introduced for undo redo handling (to skip pushing current stage in stack as it will be pushed by next iteration).
//          */
//         if (pageLayout == PAGE_LAYOUT.DOUBLE) {
//             if(pageDIV == 'A') {
//                 if(x+w < widthOfWrapper/2) {
//                     this.implementDelete(x,y,w,h,'A', false);
//                 } else {
//                     this.implementDelete(x,y,Math.round(widthOfWrapper/2) - x + 1,h,'A', true);
//                     this.implementDelete(0,y, x + w - Math.round(widthOfWrapper/2) + 1,h,'B', false);
//                 }
//             } else {
//                 if(x > 0) {
//                     this.implementDelete(x,y,w,h,'B',false);
//                 } else {
//                     this.implementDelete(Math.round(widthOfWrapper/2) + x - 1,y,Math.abs(x) + 1,h,'A', true);
//                     this.implementDelete(0,y, w + x + 1,h,'B', false);
//                 }
//             }
//         } else {
//             this.implementDelete(x,y,w,h,pageDIV,false);
//         }

//     }

//     checkIfParentIsOverlay(element) {

//         let timerOverlay = this.overlayLayerConfig.timerOverlay;
//         let playerOverlay = this.overlayLayerConfig.playerOverlay;

//         while(element && element.parentNode) {
//             element = element.parentNode;
//             if(element == timerOverlay || element == playerOverlay) {
//                 return true;
//             }
//         }

//         return false;
        

//     }

//     checkIfParentIsFeatureLayer(element) {
//         let maskLayerA = this.overlayLayerConfig.maskLayerA
//         let maskLayerB = this.overlayLayerConfig.maskLayerB
//         let spotlightLayerA = this.overlayLayerConfig.spotlightLayerA
//         let spotlightLayerB = this.overlayLayerConfig.spotlightLayerB
//         let zoomHotspotLayerA = this.overlayLayerConfig.zoomHotspotLayerA
//         let zoomHotspotLayerB = this.overlayLayerConfig.zoomHotspotLayerB

//         while(element && element.parentNode) {
//             if(element == maskLayerA || element == maskLayerB || element == spotlightLayerA || element == spotlightLayerB || element == zoomHotspotLayerA || element == zoomHotspotLayerB) {
//                 return true;
//             }
//             element = element.parentNode;
//         }
//         return false;
//     }

//     undo() {
        
//         if(this.drawingToolsConfig.undoStack.length == 0) {
//             return;
//         }

//         var temp = this.drawingToolsConfig.undoStack.pop();

//         if(this.drawingToolsConfig.undoStack.length == 0) {
//             this.setToolbarProperty('menus.PEN_MENU.menu-items.undo.disabled', true);
//             this.setToolbarProperty('menus.HIGHLIGHTER_MENU.menu-items.undo.disabled', true);            
//         } else {
//             this.setToolbarProperty('menus.PEN_MENU.menu-items.undo.disabled', false);
//             this.setToolbarProperty('menus.HIGHLIGHTER_MENU.menu-items.undo.disabled', false);            
//         }

//         if (temp.type === 'line' || temp.type =="singleContinuousLine") {
//             let pageDIV = temp.pageDiv;

//             var lines = this["stage" + pageDIV].find('Line');
//             lines[lines.length - 1].remove();
//             this["stage" + pageDIV].batchDraw();

//             this.drawingToolsConfig.redoStack.push(temp);
//             this.setToolbarProperty('menus.PEN_MENU.menu-items.redo.disabled', false);
//             this.setToolbarProperty('menus.HIGHLIGHTER_MENU.menu-items.redo.disabled', false);

//             let json = this.getMinifiedJsonFromStage(this["stage" + pageDIV]);
//             let serial;

//             if(this.currentPageLayout == PAGE_LAYOUT.DOUBLE) {
//                 serial = pageDIV == "A" ? this.currentPage[0].serial : this.currentPage[1].serial;
//             } else {
//                 serial = this.currentPage[0].serial;
//             }
            
//             this.updateDrawingSize(pageDIV, json);
//             if(!this.checkIfDrawingSizeExceedesLimit(pageDIV)) {
//                 this.drawingDataService.saveDrawingData(json,serial);
//             }

//             if(temp.type == "singleContinuousLine" && this.drawingToolsConfig.undoStack.length &&
//                 this.drawingToolsConfig.undoStack[this.drawingToolsConfig.undoStack.length-1].id == temp.id) {
//                 this.undo();
//             }
//         } 

//         if (temp.type === 'delete') {
//             let pagesDIV;
//             let that = this;
//             if(this.currentPageLayout == PAGE_LAYOUT.DOUBLE) {
//                 pagesDIV = ["A", "B"];
//             } else {
//                 pagesDIV =  ["A"];
//             }

//             pagesDIV.forEach(function(pageDIV) {
//                 var tempJSON = temp['stage'+pageDIV+'json'];
//                 temp['stage'+pageDIV+'json'] = that.getMinifiedJsonFromStage(that['stage'+pageDIV]);
//                 that["stage" + pageDIV].find('Line').forEach(element => {
//                     element.remove();
//                 });
//                 that["stage" + pageDIV].batchDraw();
//                 that.paintLinesOnStageFromMinifiedJson(that['stage'+pageDIV], tempJSON);
//                 let json = that.getMinifiedJsonFromStage(that["stage" + pageDIV]);
//                 let serial = pageDIV == "A" ? that.currentPage[0].serial : that.currentPage[1].serial;

//                 that.updateDrawingSize(pageDIV, json);
//                 if(!that.checkIfDrawingSizeExceedesLimit(pageDIV)) {
//                     that.drawingDataService.saveDrawingData(json,serial);
//                 }


//             });

//             this.drawingToolsConfig.redoStack.push(temp);
//             this.setToolbarProperty('menus.PEN_MENU.menu-items.redo.disabled', false);
//             this.setToolbarProperty('menus.HIGHLIGHTER_MENU.menu-items.redo.disabled', false);

//         }

//         let that = this;
//         setTimeout(function() {
//             that.newBlurDrawingTools();
//         });

//     }

//     redo() {

//         if(this.drawingToolsConfig.redoStack.length == 0) {
//             return;
//         }

//         var temp = this.drawingToolsConfig.redoStack.pop();

//         if(this.drawingToolsConfig.redoStack.length == 0) {
//             this.setToolbarProperty('menus.PEN_MENU.menu-items.redo.disabled', true);
//             this.setToolbarProperty('menus.HIGHLIGHTER_MENU.menu-items.redo.disabled', true);            
//         } else {
//             this.setToolbarProperty('menus.PEN_MENU.menu-items.redo.disabled', false);
//             this.setToolbarProperty('menus.HIGHLIGHTER_MENU.menu-items.redo.disabled', false);            
//         }
        
//         if (temp.type === 'line' || temp.type =="singleContinuousLine") {
//             this["layer" + temp.pageDiv].add(temp.line);
//             this["layer" + temp.pageDiv].batchDraw();

//             let json = this.getMinifiedJsonFromStage(this["stage" + temp.pageDiv]);
//             this.drawingToolsConfig.undoStack.push(temp);
//             this.setToolbarProperty('menus.PEN_MENU.menu-items.undo.disabled', false);
//             this.setToolbarProperty('menus.HIGHLIGHTER_MENU.menu-items.undo.disabled', false);

//             let pageDIV = temp.pageDiv;
//             let serial;
//             if(this.currentPageLayout == PAGE_LAYOUT.DOUBLE) {
//                 serial = pageDIV == "A" ? this.currentPage[0].serial : this.currentPage[1].serial;
//             } else {
//                 serial = this.currentPage[0].serial;
//             }

//             this.updateDrawingSize(pageDIV, json);
//             if(!this.checkIfDrawingSizeExceedesLimit(pageDIV)) {
//                 this.drawingDataService.saveDrawingData(json,serial);
//             }


//             if(temp.type == "singleContinuousLine" && this.drawingToolsConfig.redoStack.length &&
//                 this.drawingToolsConfig.redoStack[this.drawingToolsConfig.redoStack.length-1].id == temp.id) {
//                 this.redo();
//             }
             
//         } 
//         if (temp.type === 'delete') {

//             let pagesDIV;
//             let that = this;

//             if(this.currentPageLayout == PAGE_LAYOUT.DOUBLE) {
//                 pagesDIV = ["A", "B"];
//             } else {
//                 pagesDIV =  ["A"];
//             }

//             pagesDIV.forEach(function(pageDIV) {
//                 var tempJSON = temp['stage'+pageDIV+'json'];
//                 temp['stage'+pageDIV+'json'] = that.getMinifiedJsonFromStage(that['stage'+pageDIV]);
//                 that["stage" + pageDIV].find('Line').forEach(element => {
//                     element.remove();
//                 });
//                 that["stage" + pageDIV].batchDraw();
//                 that.paintLinesOnStageFromMinifiedJson(that['stage'+pageDIV], tempJSON);
//                 let json = that.getMinifiedJsonFromStage(that["stage" + pageDIV]);
//                 let serial = pageDIV == "A" ? that.currentPage[0].serial : that.currentPage[1].serial;
                
//                 that.updateDrawingSize(pageDIV, json);
//                 if(!that.checkIfDrawingSizeExceedesLimit(pageDIV)) {
//                     that.drawingDataService.saveDrawingData(json,serial);
//                 }


//             });

//             this.drawingToolsConfig.undoStack.push(temp);
//             this.setToolbarProperty('menus.PEN_MENU.menu-items.undo.disabled', false);
//             this.setToolbarProperty('menus.HIGHLIGHTER_MENU.menu-items.undo.disabled', false);


//         }

//         let that = this;
//         setTimeout(function() {
//             that.newBlurDrawingTools();
//         });

//     }

//     addUndoRedoEventListeners() {
//         if(this.undoRedoEventListenerCounter > 0) {
//             return;
//         }
//         this.undoRedoEventHandler = this.undoRedoKeyboardEventListener.bind(this);
//         document.addEventListener('keydown', this.undoRedoEventHandler);
//         this.undoRedoEventListenerCounter++;
//     }

//     removeUndoRedoEventListeners() {
//         document.removeEventListener('keydown', this.undoRedoEventHandler);
//         this.undoRedoEventListenerCounter--;
//         this.undoRedoEventListenerCounter = this.undoRedoEventListenerCounter < 0 ? 0 : this.undoRedoEventListenerCounter;
//     }

//     undoRedoKeyboardEventListener(event) {
//         /**
//          * Check for undo or redo.
//          * Uses ctrl + y for windows and command + shift + z for mac.
//          * Uses ctrl + z for windows and command + z for mac.
//         */

//         if(navigator.appVersion.indexOf("Mac") != -1) {
//             // handling for Mac and command key
//             if (event.metaKey && event.shiftKey && event.keyCode == 90) {
//                 this.redo();
//             } else if ( event.metaKey && !event.shiftKey && event.keyCode == 90) {
//                 this.undo();
//             }
//         } else {
//             // handling for windows and ctrl key
//             if ( event.ctrlKey && event.keyCode == 89 ) {
//                 this.redo();
//             } else if ( event.ctrlKey && event.keyCode == 90) {
//                 this.undo();
//             }
//         }

//     }

//     orientationChangeEventListener(){
//         // that.removeSelectionBox();

//         this.orientationChangeDetected = true;

//         if (window['dlsVideoPlayer'].player) {
//             this.isOrientationChangedWhileVideoPlayerWasActive = true;
//         }

//         // close the single note on screen in mobile on orientation change.
//         if (this.singleNoteConfig) {
//             this.checkAndDeleteIfNoteCorrespondingToSingleMobileNoteIsEmpty(this.singleNoteConfig);
//             this.singleNoteConfig = undefined;
//         }

//         // set a flag to track orientation change when notes are active. Use this to allow resize.
//         if (this.toolsService.getNoteStatus()) {
//             this.resizeNotesPanelAsOrientationOccured = true;
//         }

//         this.closeAllSelectionBoxes();

//         // handle pdz modal on orientation change
//         this.pdzTipModalHandler();
//     }

//     windowScrollEventListener(e) {
//         e.preventDefault();
//         e.stopPropagation();
//         e.stopImmediatePropagation();
//         // console.log('scroll window');

//         this.ios13ScrollTimerReference = undefined
//         clearTimeout(this.ios13ScrollTimerReference);
//         this.ios13ScrollTimerReference = setTimeout(() => {
//             if(!this.singleNoteConfig && !this.toolsService.getNoteStatus()) {
//                 window.scroll(0, 0);
//                 clearTimeout(this.ios13ScrollTimerReference);
//             }
//         }, 200);


//     }

//     imgbookScrollEventListener(e) {
//         // console.log('scroll imgbook');
//         e.preventDefault();
//         e.stopPropagation();
//         e.stopImmediatePropagation();


//         this.ios13ScrollTimerReference = undefined
//         clearTimeout(this.ios13ScrollTimerReference);
//         this.ios13ScrollTimerReference = setTimeout(() => {
//             if(!this.singleNoteConfig && !this.toolsService.getNoteStatus()) {
//                 window.scroll(0, 0);
//                 clearTimeout(this.ios13ScrollTimerReference);
//             }
//         }, 200);

//     }

//     switch() {
//         if (this.toolbarConfig.position == 'left') {
//             this.setToolbarProperty("position", 'right');
//         } else {
//             this.setToolbarProperty("position", 'left');
//         }

//         if (this.sidebarConfig.position !== undefined && this.sidebarConfig.position !== this.toolbarConfig.position) {
//             this.toggleSidebar();
//         }

//         // Clear hideBox limit toast
//         this.toaster.clearPendingToasts({ hideBox: true });
//         this.maskLimitToastPageDiv = undefined;
//     }

//     toggleTools() {
//         this.setToolbarProperty('showTools', !this.toolbarConfig.showTools);

//         if(this.toolbarConfig.showTools) {
//             setTimeout(function() {
//                 let penButton:any = document.querySelector(".pen-button");
//                 penButton.focus();
//             });
        
//         }
        
//         if(!this.toolbarConfig.showTools && this.toolbarConfig.showDrawingMenu) {
//             this.toggleDrawingMenu(false);
//         }

//         // NEMO-5399 : close selection box menu on previous next and any page load
//         if(this.toolbarConfig.showSelectionBoxMenu) {
//             this.toggleSelectionBoxMenu(false);
//         }

//         // Clear hideBox limit toast
//         this.toaster.clearPendingToasts({ hideBox: true });
//         this.maskLimitToastPageDiv = undefined;
//     }

//     // /**
//     //  * function to show Assignment modal
//     //  */
//     showAssignmentModal() {
//         this.assignmentModal.showAssignmentModal();
//     }

//     toggleDrawingMenu(toggle?) {

//         // // prevent drawing menu to open while a drawing fetch call is pending
//         // let isPending = false;
//         // let bookCode = this.studentBook.meta.code;
//         // let userId = this.userData.extUserId;
//         // if(this.currentPageLayout == PAGE_LAYOUT.DOUBLE) {
//         //     isPending = this.drawingDataService.getPendingCallStatus(bookCode, userId, this.currentPage[0].serial) && this.drawingDataService.getPendingCallStatus(bookCode, userId, this.currentPage[1].serial)
//         // } else {
//         //     isPending = this.drawingDataService.getPendingCallStatus(bookCode, userId, this.currentPage[0].serial) 
//         // }
//         // if(isPending) {
//         //     return;
//         // }


//         if(toggle !== undefined) {
//             this.setToolbarProperty('showDrawingMenu', toggle);
//         } else {
//             this.setToolbarProperty('showDrawingMenu', !this.toolbarConfig.showDrawingMenu);
//         }

//         if(this.toolbarConfig.showDrawingMenu && this.sidebarConfig.isActive && this.sidebarConfig["current-sidebar"]=="notes") {
//             this.toggleSidebar();
//         }

//         if(this.toolbarConfig.showDrawingMenu) {
//             this.toggleSelectionBoxMenu(false);
//         } else {
//             this.changeSelectionBoxPointerEvents();
//         }

//         if(this.toolbarConfig.showDrawingMenu) {
//             this.addUndoRedoEventListeners();
//         } else {
//             this.removeUndoRedoEventListeners();
//         }
        
//         if(this.toolbarConfig.currentTool == undefined) {
//             this.setCurrentTool({tool:'pen', value: this.toolbarConfig.menus.PEN_MENU.value['stroke-color'], check:'color'});
//             this.toggleDrawingTools(this.toolbarConfig.showDrawingMenu);
//         } else if (this.toolbarConfig.currentTool == 'pen' || this.toolbarConfig.currentTool  == 'highlighter') {
//             this.toggleDrawingTools(this.toolbarConfig.showDrawingMenu);
//         } else if (this.toolbarConfig.currentTool == 'delete') {
//             this.toggleSelectionDelete(this.toolbarConfig.showDrawingMenu);
//         } else {
//             this.toggleDrawingTools(false);
//         }

//         // Clear hideBox limit toast
//         this.toaster.clearPendingToasts({ hideBox: true });
//         this.maskLimitToastPageDiv = undefined;

//     }

//     toggleSelectionDelete(activate) {
        
//         let deleteActive = this.newSelectionBoxConfig.currentFeature == 'delete' && this.newSelectionBoxConfig.isActive;
//         // let desktopDiv:any = document.querySelector(".toolbar-primary")

//         // if($(window).height() <=650) {  
//         //     console.log("trigger for toolbar")
//         //     desktopDiv.style["bottom"] = "88px";
            
//         // }
//         if(activate && deleteActive) {
//             return;
//         } else if(!activate && deleteActive) {
//             this.initDelete();

//         } else if (activate && !deleteActive) {
//             this.initDelete();
//         } else {
//             return;
//         }

//     }

//     toggleSelectionBoxMenu(toggle?) {

//         if(toggle !== undefined) {
//             this.setToolbarProperty('showSelectionBoxMenu', toggle);
//         } else {
//             this.setToolbarProperty('showSelectionBoxMenu', !this.toolbarConfig.showSelectionBoxMenu);
//         }

//         if(this.toolbarConfig.showSelectionBoxMenu && this.sidebarConfig.isActive && this.sidebarConfig["current-sidebar"]=="notes") {
//             this.toggleSidebar();
//         }

//         if(this.toolbarConfig.showSelectionBoxMenu) {
//             this.toggleDrawingMenu(false);
//         } else {
//             this.changeSelectionBoxPointerEvents();
//         }

//         if (!this.toolbarConfig.showSelectionBoxMenu && !this.newSelectionBoxConfig.isActive) {
//             return;
//         }

//         if(this.toolbarComponent.getLastActiveFeature() == undefined || this.toolbarComponent.getLastActiveFeature() == 'spotlight' ) {
//             this.initSpotlight();
//         } else if(this.toolbarComponent.getLastActiveFeature() == 'mask' ) {
//             this.initMask();
//         } else {
//             this.initSpotlight();
//         }
        
//     }

//     // function to check and disable the pointer events on selection box if the selection box menu or drawing menu is opened.
//     // it also enables the pointer events on selection box and disables the pointer events on selection box layer in case both the menus are closed.
//     changeSelectionBoxPointerEvents(){
//         let pagesDIV;
//         if(this.currentPageLayout == PAGE_LAYOUT.DOUBLE) {
//             pagesDIV = ["A", "B"];
//         } else {
//             pagesDIV =  ["A"];
//         }

//         if(this.toolbarConfig.showSelectionBoxMenu) {
//             pagesDIV.forEach(pageDIV => {
                
//                 let selectionBoxContainer:any = document.querySelector('#selection-box-container-'+pageDIV);
//                 if(selectionBoxContainer) selectionBoxContainer.style.pointerEvents = 'all';
//                 this.newFeatureMap[pageDIV]['spotlight'].concat(this.newFeatureMap[pageDIV]['zoomHotspot']).forEach(selector => {
    
//                     let featureBox:any = document.querySelector(selector);
//                     featureBox.style.pointerEvents = 'none';
//                 });

//             });
//         } else {
//             pagesDIV.forEach(pageDIV => {

//                 let selectionBoxContainer:any = document.querySelector('#selection-box-container-'+pageDIV);
//                 if(selectionBoxContainer) selectionBoxContainer.style.pointerEvents = 'none';
//                 this.newFeatureMap[pageDIV]['spotlight'].concat(this.newFeatureMap[pageDIV]['zoomHotspot']).forEach(selector => {
    
//                     let featureBox:any = document.querySelector(selector);
//                     if(!this.toolbarConfig.showDrawingMenu){
//                         featureBox.style.pointerEvents = 'all';
//                     } else {
//                         featureBox.style.pointerEvents = 'none';
//                     }
//                 });

//             });
//         }
//     }

//     rotate(tool, color, width) {


//         if (tool =='pen') {

//             let index1 = this.toolbarConfig.menus.PEN_MENU['menu-items'].color['stroke-color'].findIndex( function(colors) {
//                 return colors == color;
//             })

//             for(var i=0; i<index1;i++) {
//                 this.toolbarConfig.menus.PEN_MENU['menu-items'].color['stroke-color'].push(this.toolbarConfig.menus.PEN_MENU['menu-items'].color['stroke-color'].shift());
//             }


//             let index2 = this.toolbarConfig.menus.PEN_MENU['menu-items'].width['stroke-size'].findIndex( function(widths) {
//                 return widths == width+'px';
//             })


//             for(var i=0; i<index2;i++) {
//                 this.toolbarConfig.menus.PEN_MENU['menu-items'].width['stroke-size'].push(this.toolbarConfig.menus.PEN_MENU['menu-items'].width['stroke-size'].shift());
//                 this.toolbarConfig.menus.PEN_MENU['menu-items'].width['stroke-size-svg-name'].push(this.toolbarConfig.menus.PEN_MENU['menu-items'].width['stroke-size-svg-name'].shift());
//             }

//             this.toolbarConfig.menus.PEN_MENU.value['stroke-size-svg-name'] = this.toolbarConfig.menus.PEN_MENU['menu-items'].width['stroke-size-svg-name'][0];


//         }

//         if(tool == 'highlighter') {

//             let index1 = this.toolbarConfig.menus.HIGHLIGHTER_MENU['menu-items'].color['stroke-color'].findIndex( function(colors) {
//                 return colors == color;
//             })

//             for(var i=0; i<index1;i++) {
//                 this.toolbarConfig.menus.HIGHLIGHTER_MENU['menu-items'].color['stroke-color'].push(this.toolbarConfig.menus.HIGHLIGHTER_MENU['menu-items'].color['stroke-color'].shift());
//             }





//             let index2 = this.toolbarConfig.menus.HIGHLIGHTER_MENU['menu-items'].width['stroke-size'].findIndex( function(widths) {
//                 return widths == width+'px';
//             })


//             for(var i=0; i<index2;i++) {
//                 this.toolbarConfig.menus.HIGHLIGHTER_MENU['menu-items'].width['stroke-size'].push(this.toolbarConfig.menus.HIGHLIGHTER_MENU['menu-items'].width['stroke-size'].shift());
//                 this.toolbarConfig.menus.HIGHLIGHTER_MENU['menu-items'].width['stroke-size-svg-name'].push(this.toolbarConfig.menus.HIGHLIGHTER_MENU['menu-items'].width['stroke-size-svg-name'].shift());
//             }

//             this.toolbarConfig.menus.HIGHLIGHTER_MENU.value['stroke-size-svg-name'] = this.toolbarConfig.menus.HIGHLIGHTER_MENU['menu-items'].width['stroke-size-svg-name'][0];
            
//         }
//     }

//     toggleMobileTools(tool) {

//         // // prevent drawing menu to open while a drawing fetch call is pending
//         // let isPending = false;
//         // let bookCode = this.studentBook.meta.code;
//         // let userId = this.userData.extUserId;
//         // if(this.currentPageLayout == PAGE_LAYOUT.DOUBLE) {
//         //     isPending = this.drawingDataService.getPendingCallStatus(bookCode, userId, this.currentPage[0].serial) && this.drawingDataService.getPendingCallStatus(bookCode, userId, this.currentPage[1].serial)
//         // } else {
//         //     isPending = this.drawingDataService.getPendingCallStatus(bookCode, userId, this.currentPage[0].serial) 
//         // }
//         // if(isPending) {
//         //     return;
//         // }

//         if(this.toolbarConfig.currentTool == undefined) {
//             if(tool == 'pen' || tool == 'highlighter') {
//                 this.setCurrentTool({tool:tool});
//             } else if(tool == 'delete') {
//                 this.initDelete();
//             }
//         } else {
//             if (this.toolbarConfig.currentTool == 'pen' && tool == 'pen') {
//                 this.toggleDrawingTools(false);
//                 this.setToolbarProperty('currentTool', undefined);
//             } else if (this.toolbarConfig.currentTool == 'pen' && tool == 'highlighter') {
//                 this.setCurrentTool({tool:tool});
//             } else if (this.toolbarConfig.currentTool == 'pen' && tool == 'delete') {
//                 this.toggleDrawingTools(false);
//                 this.initDelete();
//             } else if (this.toolbarConfig.currentTool == 'highlighter' && tool == 'highlighter') {
//                 this.toggleDrawingTools(false);
//                 this.setToolbarProperty('currentTool', undefined);
//             } else if (this.toolbarConfig.currentTool == 'highlighter' && tool == 'pen') {
//                 this.setCurrentTool({tool:tool});
//             } else if (this.toolbarConfig.currentTool == 'highlighter' && tool == 'delete') {
//                 this.toggleDrawingTools(false);
//                 this.initDelete();
//             } else if (this.toolbarConfig.currentTool == 'delete' && tool == 'delete') {
//                 this.initDelete(); 
//                 this.setToolbarProperty('currentTool', undefined);
//             } else if (this.toolbarConfig.currentTool == 'delete' && tool == 'pen') {
//                 this.initDelete();
//                 this.setCurrentTool({tool:tool});
//             } else if (this.toolbarConfig.currentTool == 'delete' && tool == 'highlighter') {
//                 this.initDelete();
//                 this.setCurrentTool({tool:tool});
//             }
//         }

//         if (this.toolbarConfig.currentTool) {
//             this.addUndoRedoEventListeners();
//         } else {
//             this.removeUndoRedoEventListeners();
//         }

//         if(this.toolbarConfig.currentTool && this.sidebarConfig.isActive && this.sidebarConfig["current-sidebar"]=="notes") {
//             this.toggleSidebar();
//         }

//         // close the single note on screen in mobile on orientation change.
//         if (this.singleNoteConfig) {
//             this.checkAndDeleteIfNoteCorrespondingToSingleMobileNoteIsEmpty(this.singleNoteConfig);
//             this.singleNoteConfig = undefined;
//         }

//     }

//     initSpotlight(event?) {

//         if (event) {
//             event.stopPropagation();
//         }

//         this.toolbarComponent.setLastActiveFeature("spotlight");

//         if(this.newSelectionBoxConfig.currentFeature == 'spotlight' && this.newSelectionBoxConfig.isActive) {
//             this.newSelectionBoxConfig.currentFeature = undefined;
//             this.newSelectionBoxConfig.isActive = false;
//             this.updateToolbarForSelectionBoxConfig({});
//             this.removeSelectionBoxEventListeners();
//         } else {
//             if(this.newSelectionBoxConfig.currentFeature != undefined && this.newSelectionBoxConfig.currentFeature != 'spotlight') {
//                 this.removeSelectionBoxEventListeners();
//             }
//             this.newSelectionBoxConfig.currentFeature = 'spotlight';
//             this.newSelectionBoxConfig.isActive = true;
//             this.updateToolbarForSelectionBoxConfig({});
//             this.initSelectionBoxes('spotlight');
//         }


//     }

//     initMask(event?) {

//         if (event) {
//             event.stopPropagation();
//         }

//         this.toolbarComponent.setLastActiveFeature("mask");

//         if(this.newSelectionBoxConfig.currentFeature == 'mask' && this.newSelectionBoxConfig.isActive) {
//             this.newSelectionBoxConfig.currentFeature = undefined;
//             this.newSelectionBoxConfig.isActive = false;
//             this.removeSelectionBoxEventListeners();
//             this.updateToolbarForSelectionBoxConfig({});
//         } else {
//             if(this.newSelectionBoxConfig.currentFeature != undefined && this.newSelectionBoxConfig.currentFeature != 'mask') {
//                 this.removeSelectionBoxEventListeners();
//             }
//             this.newSelectionBoxConfig.currentFeature = 'mask';
//             this.newSelectionBoxConfig.isActive = true;
//             this.updateToolbarForSelectionBoxConfig({});
//             this.initSelectionBoxes('mask');
//         }

//     }

//     initDelete() {


//         if(this.newSelectionBoxConfig.currentFeature == 'delete' && this.newSelectionBoxConfig.isActive) {
//             this.newSelectionBoxConfig.currentFeature = undefined;
//             this.newSelectionBoxConfig.isActive = false;
//             this.updateToolbarForSelectionBoxConfig({});
//             this.removeSelectionBoxEventListeners();
//         } else {
//             if(this.newSelectionBoxConfig.currentFeature != undefined && this.newSelectionBoxConfig.currentFeature != 'delete') {
//                 this.removeSelectionBoxEventListeners();
//             }
//             this.setToolbarProperty('currentTool','delete');
//             this.toggleDrawingTools(false);
//             this.newSelectionBoxConfig.currentFeature = 'delete';
//             this.newSelectionBoxConfig.isActive = true;
//             this.updateToolbarForSelectionBoxConfig({});
//             this.initSelectionBoxes('delete');
//         }


//     }

//     initZoomHotspot(x,y,w,h,pageDIV, overlaysId) {

//         // as only 1 zoom hotspot is allowed, we close all other selection boxes present
//         this.closeAllSelectionBoxes();
//         this.implementZoomHotspot(x,y,w,h,pageDIV, overlaysId);
//     }


//     implementSpotlight(x,y,w,h,pageDIV,UID?) {

//         // check if spotlight layer already exists. If not create a new spotlight layer.
//         let SpotlightLayer = document.querySelector('#spotlight-layer-' + pageDIV);
//         if(SpotlightLayer == null) {
//             $("#readerpagediv"+pageDIV).append("<div id='spotlight-layer-" + pageDIV + "'  style='width:100%; pointer-events:all;border: 0px solid red;height:100%;position:absolute;z-index:6;'></div>");
//         }

//         // Get a unique id number from a generator to create unique spotlight containers.
//         let uniqueID = this.getUniqueId();
//         if(UID){
//             uniqueID = UID;
//         }

//         // Create a new and unique spotlight container and add a canvas to it.
//         $("#spotlight-layer-" + pageDIV).append("<div id='spotlight-div-" + uniqueID + "'  style='width:100%; overflow:hidden; pointer-events:none;border: 2px solid black;height:100%;position:absolute;z-index:4;'></div>");
//         $("#spotlight-div-" + uniqueID).append("<canvas id='spotlight-canvas-" + uniqueID + "'  style='position:absolute;z-index:4;'></canvas>");

//         this.addCloseDivToSelectionBox("#spotlight-div-" + uniqueID, 'spotlight' ,uniqueID, pageDIV);


//         // Position the newly created spotlight div using the coordinates passed from selection box creator.
//         let spotlightDiv:any = document.querySelector('#spotlight-div-' + uniqueID);
//         let spotlightLayer:any = document.querySelector('#spotlight-layer-' + pageDIV);
//         spotlightDiv.style.left = x + 'px';
//         spotlightDiv.style.top = y + 'px';
//         spotlightDiv.style.width = w + 'px';
//         spotlightDiv.style.height = h + 'px';
//         spotlightDiv.style.touchAction = 'none';
//         spotlightDiv.style.minWidth = '16px';
//         spotlightDiv.style.minHeight = '36px';
//         spotlightDiv.style.maxWidth = (spotlightLayer.offsetWidth - spotlightDiv.offsetLeft) + "px";
//         spotlightDiv.style.maxHeight = (spotlightLayer.offsetHeight - spotlightDiv.offsetTop) + "px";

//         this.addSelBoxDragResizeHandler(spotlightDiv, pageDIV);

//         spotlightDiv.fontSize = parseFloat($("#imgbook").css("font-size").substring(0, $("#imgbook").css("font-size").length-2));

//         // Get the image of the pageDiv and add it to canvas.
//         // Style and Position the canvas such that image matches the background.
//         var img:any = document.querySelector('#readerpagediv'+pageDIV).querySelector('.imageLayer');
//         var canv:any = document.querySelector('#spotlight-canvas-'+uniqueID);
//         canv.width = img.naturalWidth;
//         canv.height = img.naturalHeight;

//         canv.style.width = spotlightLayer.offsetWidth + 'px';
//         canv.style.height = spotlightLayer.offsetHeight + 'px';

//         var ctx = canv.getContext("2d");
//         ctx.drawImage(img, 0, 0);

//         canv.style.marginLeft = -(x+2) + 'px';
//         canv.style.marginTop = -(y+2) + 'px';

//         // blur the original imagebook image
//         var readerPageDiv = document.querySelector('#readerpagediv'+pageDIV);
//         var image:any = readerPageDiv.getElementsByClassName('imageLayer')[0];
//         image.style.filter = 'blur(10px)';
//         image.style.webkitFilter = 'blur(10px)';

//         // increment the count of number of feature div on the page.
//         this.newFeatureCounter[pageDIV]['spotlight'] += 1;

//         // push the feature in respective map.
//         this.newFeatureMap[pageDIV]['spotlight'].push("#spotlight-div-" + uniqueID);

//         this.addHotspotEventListenersforSelectionBox();
//         this.newBlurDrawingTools();
//         this.imgBookHelperService.hideHotspot({"feature" : "hideAll", pageDIV: pageDIV});

//         // incase any spotlight is currently active, disable dragging of note hotspots.
//         this.imgBookHelperService.setHotspotDragState(true);

//         this.storeSelectionBox({page: pageDIV, feature: 'spotlight', uniqueID: +uniqueID});

//         // Clear hideBox limit toast
//         this.toaster.clearPendingToasts({ hideBox: true });
//         this.maskLimitToastPageDiv = undefined;

//     }

//     // To show hide box limit toast
//     showHideBoxLimitToast(pageDiv) {
//         this.maskLimitToastPageDiv = pageDiv;
//         this.removeSelectionBoxEventListeners();
//         this.toaster.showToast({ type: "mask-limit",maskLimit: this.maskLimit });
//     }

//     implementMask(x,y,w,h,pageDIV,UID?) {

//         // NEMO-13908: limit number of masks to 5
//         if(this.newFeatureCounter[pageDIV]['mask'] >= 5 ){
//             return;
//         }

//         // check if mask layer already exists. If not create a new mask layer.
//         let MaskLayer = document.querySelector('#mask-layer-' + pageDIV);
//         if(MaskLayer == null) {
//             $("#readerpagediv"+pageDIV).append("<div id='mask-layer-" + pageDIV + "'  style='width:100%; pointer-events:none;border: 0px solid red;height:100%;position:absolute;z-index:6;'></div>");
//         }

//         // Get a unique id number from a generator to create unique mask containers.
//         let uniqueID = this.getUniqueId();
//         if(UID){
//             uniqueID = UID;
//         }

//         // Create a new and unique mask container and add a canvas to it.
//         $("#mask-layer-" + pageDIV).append("<div id='mask-div-" + uniqueID + "'  style='width:100%; overflow:hidden; pointer-events:all;border: 2px solid black;height:100%;position:absolute;z-index:4;'></div>");
//         $("#mask-div-" + uniqueID).append("<canvas id='mask-canvas-" + uniqueID + "'  style='position:absolute;z-index:4;'></canvas>");
        
//         this.addCloseDivToSelectionBox("#mask-div-" + uniqueID, 'mask' ,uniqueID, pageDIV);
        

//         // Position the newly created mask div using the coordinates passed from selection box creator.
//         let maskDiv:any = document.querySelector('#mask-div-' + uniqueID);
//         let maskLayer:any = document.querySelector('#mask-layer-' + pageDIV);
//         maskDiv.style.left = x + 'px';
//         maskDiv.style.top = y + 'px';
//         maskDiv.style.width = w + 'px';
//         maskDiv.style.height = h + 'px';
//         maskDiv.style.touchAction = 'none';
//         maskDiv.style.minWidth = '16px';
//         maskDiv.style.minHeight = '36px';
//         maskDiv.style.maxWidth = (maskLayer.offsetWidth - maskDiv.offsetLeft) + "px";
//         maskDiv.style.maxHeight = (maskLayer.offsetHeight - maskDiv.offsetTop) + "px";
        
//         this.addSelBoxDragResizeHandler(maskDiv, pageDIV);

//         // NEMO-10810: 'Hide' tool issue identified in Usability Testing Interviews
//         // issue: for small selection area, masking tool did not provide correct blur.
//         // issue with filter is chrome and edge specific, no issue with firefox and safari.
//         // fixed issue by using backdrop-filter blur along with filter blur.
//         // at the time of implementation, backdrop-filter is not supported by firefox.
//         maskDiv.style.backdropFilter = 'blur(10px)';
//         maskDiv.style['-webkit-backdrop-filter'] = 'blur(10px)';

//         maskDiv.fontSize = parseFloat($("#imgbook").css("font-size").substring(0, $("#imgbook").css("font-size").length-2));

//         // Get the image of the pageDiv and add it to canvas.
//         // Style and Position the canvas such that image matches the background.
//         var img:any = document.querySelector('#readerpagediv'+pageDIV).querySelector('.imageLayer');
//         var canv:any = document.querySelector('#mask-canvas-'+uniqueID);
//         canv.width = img.naturalWidth;
//         canv.height = img.naturalHeight;

//         canv.style.width = maskLayer.offsetWidth + 'px';
//         canv.style.height = maskLayer.offsetHeight + 'px';

//         var ctx = canv.getContext("2d");
//         canv.style.filter = 'blur(10px)';
//         canv.style.webkitFilter = 'blur(10px)';
//         ctx.drawImage(img, 0, 0);

//         canv.style.marginLeft = -(x+2) + 'px';
//         canv.style.marginTop = -(y+2) + 'px';
        
//         // increment the count of number of feature div on the page.
//         this.newFeatureCounter[pageDIV]['mask'] += 1;

//         // push the feature in respective map.
//         this.newFeatureMap[pageDIV]['mask'].push("#mask-div-" + uniqueID);

//         this.addHotspotEventListenersforSelectionBox();
//         this.newBlurDrawingTools();
//         this.imgBookHelperService.hideHotspot({x:x, y:y, w:w, h:h, "feature" : "mask", pageDIV: pageDIV});

//         // incase any Mask is currently active, disable dragging of note hotspots.
//         this.imgBookHelperService.setHotspotDragState(true);

//         this.storeSelectionBox({page: pageDIV, feature: 'mask', uniqueID: +uniqueID});

//     }

//     implementDelete(x,y,w,h,pageDIV,skipPushInStack) {

//         let that = this;

//         var temp = {
//             type : 'delete',
//             line : undefined,
//             pageDiv : undefined,
//             stageAjson : this.getMinifiedJsonFromStage(this["stage" + 'A']),
//             stageBjson : undefined,
//         }

//         let readerContainer:any = document.querySelector('#reader-container');
//         let containerHeight = readerContainer.offsetHeight;
//         let containerWidth = readerContainer.offsetWidth;

//         if(this.currentPageLayout == PAGE_LAYOUT.DOUBLE) {
//             temp.stageBjson = this.getMinifiedJsonFromStage(this["stage" + 'B']);
//             containerWidth /= 2;
//         }

//         let isdeleted = false;

//         var scale = this.drawingToolsConfig.defaultFontSize / parseFloat($("#imgbook").css("font-size").substring(0, $("#imgbook").css("font-size").length-2));

//         temp.pageDiv = pageDIV;

//         x = x == 0 ? -2 : x;
//         y = y == 0 ? -2 : y;


//         var lines = that["stage" + pageDIV].find('Line');
//         var originalLinesArray = new Array();
//         var newLinesArray = new Array();


//         for (var i = 0; i<lines.length; i++) {

//             var wasLineInBox = false;
//             var points = lines[i].points();
//             var parentArray = new Array();
//             var newArr = new Array();

//             for (var j=0; j<points.length; j+=2) {
//                 if ( that.pointliesinbox(x*scale, y*scale, w*scale, h*scale, points[j]*lines[i].scale().x, points[j+1]*lines[i].scale().y) || 
//                     that.pointOutofReach(x*scale, y*scale, w*scale, h*scale, points[j]*lines[i].scale().x, points[j+1]*lines[i].scale().y, containerWidth, containerHeight)) {
//                     wasLineInBox = true;
//                     parentArray.push(newArr);
//                     newArr = new Array();
//                 } else {
//                     newArr.push(points[j],points[j+1]);
//                 }
//             }

//             if(wasLineInBox) {
//                 isdeleted = true;
//                 parentArray.push(newArr);
//                 originalLinesArray.push(lines[i]);

//                 lines[i].remove();

//                 for (var k=0; k<parentArray.length; k++) {
//                     if (parentArray[k].length === 0) {
//                         continue;
//                     }

//                     var templine1 = new Konva.Line({
//                         stroke: lines[i].stroke(),
//                         strokeWidth: lines[i].strokeWidth(),
//                         opacity: lines[i].opacity(),
//                         globalCompositeOperation: lines[i].attrs.globalCompositeOperation,
//                         lineCap: lines[i].attrs.lineCap,
//                         lineJoin: lines[i].attrs.lineJoin,
//                         tension: lines[i].attrs.tension,
//                         points: parentArray[k],
//                         fontSize: lines[i].attrs.fontSize,
//                         tool: lines[i].attrs.tool
//                     });
//                     templine1.scale(lines[i].scale());
                    

//                     // remove lonely point
//                     if (templine1.points().length <= 2) {
//                         continue;
//                     }
//                     newLinesArray.push(templine1);
//                     that["layer" + pageDIV].add(templine1);
//                     that["stage" + pageDIV].batchDraw();
//                 }
//             } else {
//                 var templine2 = lines[i].clone();
//                 lines[i].remove();
//                 that["layer" + pageDIV].add(templine2);
//                 that["layer" + pageDIV].batchDraw();
//             }
//         }

//         // save the stage after delete for persistance
//         that["stage" + pageDIV].batchDraw();
//         let json = that.getMinifiedJsonFromStage(that["stage" + pageDIV]);
//         let serial = pageDIV == "A" ? that.currentPage[0].serial : that.currentPage[1].serial;

//         that.updateDrawingSize(pageDIV, json);
//         if(!that.checkIfDrawingSizeExceedesLimit(pageDIV)) {
//             that.drawingDataService.saveDrawingData(json,serial);
//         }



//         /**
//          * Handling for undo redo when delete is applied across double pages.
//          * These checks are meant for page B as it is called after page A.
//          * We store data of stage A if something was deleted in previous iteration.
//          * If the delete was meant to be skipped and something was deleted then store the stage before delete in a variable.
//          * If the delete was not meant to be skipped and something was deleted then use stage A stage stored in previous iteration and push in stack with current page B stage.
//          * If the delete was not meant to be skipped and nothing was deleted and we had stage a json stored in previous iteration the, 
//          * push nothing for stage b but push for stage a as it was stored
//          */

//         if(skipPushInStack && isdeleted) {
//             this.storePageAJsontemp = temp.stageAjson;
//         }

//         if(isdeleted && !skipPushInStack) {

//             if(this.storePageAJsontemp !== undefined) {
//                 temp.stageAjson = this.storePageAJsontemp;
//                 this.storePageAJsontemp = undefined;
//             }

//             this.drawingToolsConfig.undoStack.push(temp);
//             this.drawingToolsConfig.redoStack = new Array();

//             this.setToolbarProperty('menus.PEN_MENU.menu-items.undo.disabled', false);
//             this.setToolbarProperty('menus.HIGHLIGHTER_MENU.menu-items.undo.disabled', false);
//             this.setToolbarProperty('menus.PEN_MENU.menu-items.redo.disabled', true);
//             this.setToolbarProperty('menus.HIGHLIGHTER_MENU.menu-items.redo.disabled', true);

//         } else if( !isdeleted && !skipPushInStack && this.storePageAJsontemp !== undefined) {

//             temp.stageAjson = this.storePageAJsontemp;
//             this.storePageAJsontemp = undefined;
//             this.drawingToolsConfig.undoStack.push(temp);
//             this.drawingToolsConfig.redoStack = new Array();

//             this.setToolbarProperty('menus.PEN_MENU.menu-items.undo.disabled', false);
//             this.setToolbarProperty('menus.HIGHLIGHTER_MENU.menu-items.undo.disabled', false);
//             this.setToolbarProperty('menus.PEN_MENU.menu-items.redo.disabled', true);
//             this.setToolbarProperty('menus.HIGHLIGHTER_MENU.menu-items.redo.disabled', true);
//         }

//         setTimeout(function() {
//             that.newBlurDrawingTools();
//         });
//     }

//     pointOutofReach(x,y,w,h,px,py,cw,ch) {

//         if( (px < 0 && x < 2 ) || (py < 0 && y < 2) ) {
//             return true;
//         } else if ( px > x + w && x + w + 5 > cw ) {
//             return true;
//         } else if ( py > y + h && y + h + 5 > ch ) {
//             return true;
//         } else {
//             return false;
//         }

//     }

//     // Fucntion to enable the drag & resize of selection box and to disbale the imagebook pan when selection box is being dragged or resized.
//     addSelBoxDragResizeHandler(draggableArea, pageDIV){

//         this.addSelectionBoxResizeHandle(draggableArea, pageDIV);

//         let that = this;
//         let feature = draggableArea.id.split('-')[0];
//         let id = draggableArea.id.split('-')[2];
//         let readerContainer:any = document.querySelector('#readerpagediv'+pageDIV);
//         let resizeDiv:any = document.querySelector('.'+feature+'-bottom-right-resizer-'+id);

//         interact(draggableArea)
//         .pointerEvents({
//             holdDuration: 100,
//         })
//         .on('hold', function (event) {
//             var interaction = event.interaction
            
//             if (!interaction.interacting() && !that.toolbarConfig.showDrawingMenu) {
//                 draggableArea.style.cursor = 'move';
//                 interaction.start(
//                     { name: 'drag' },
//                     event.interactable,
//                     event.currentTarget,
//                 )
//             }
//         })
//         .draggable({
//             manualStart: true,
// 			allowFrom: draggableArea,
//             ignoreFrom: '.'+feature+'-bottom-right-resizer-'+id,
// 			listeners: {
// 				start () {
//                     that.imgBookHelperService.hideHotspot({"feature" : 'hideAll', pageDIV: pageDIV});

//                     if($("#imgbook").hasClass("dragscroll")) {
//                         $("#imgbook").removeClass("dragscroll");
//                         dragscroll.reset();
//                      }
         
//                      // disable gestures on touch start
//                      that.imgBook.enableTouchScreenGestures({
//                          disableSwipe: true, 
//                          disablePan: true, 
//                          disablePinch: true
//                      }); 
//                 },
// 				move(event) {
//                     draggableArea.style.left = draggableArea.offsetLeft + event.dx + "px";
//                     draggableArea.style.top = draggableArea.offsetTop + event.dy + "px";
//                     draggableArea.children[0].style.marginLeft = draggableArea.children[0].offsetLeft - event.dx + "px";
//                     draggableArea.children[0].style.marginTop = draggableArea.children[0].offsetTop - event.dy + "px";
//                     resizeDiv.style.left = resizeDiv.offsetLeft + event.dx + "px";
//                     resizeDiv.style.top = resizeDiv.offsetTop + event.dy + "px";
// 				},
//                 end() {
//                     if(feature == 'spotlight'){
//                         that.imgBookHelperService.hideHotspot({"feature" : 'hideAll', pageDIV: pageDIV});
//                     } else {
//                         that.imgBookHelperService.hideHotspot({x:draggableArea.offsetLeft, y:draggableArea.offsetTop, w:draggableArea.offsetWidth, h:draggableArea.offsetHeight, "feature" : feature, pageDIV: pageDIV});
//                     }
//                     draggableArea.style.maxWidth = (readerContainer.offsetWidth - draggableArea.offsetLeft) + "px";
//                     draggableArea.style.maxHeight = (readerContainer.offsetHeight - draggableArea.offsetTop) + "px";
//                     that.enableDragScroll();
//                     that.storeSelectionBox({page: pageDIV, feature: feature, uniqueID: +id});
//                 }
// 			},
// 			restrict: {
// 				restriction: readerContainer,
// 				elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
// 			},
// 		});
//     }

//     // Fucntion to disable the drag & resize of selection box
//     disableSelBoxDragResize(selector) {
//         interact(selector).draggable(false).resizable(false);
//     }
    
//     //  Function to enable the imagebook pan after selection box has been dragged or resized.
//     enableDragScroll() {
//         if(!$("#imgbook").hasClass("dragscroll")) { 
//             $("#imgbook").addClass("dragscroll");  
//             dragscroll.reset();
//             $("#imgbook").css("cursor", "");                              
//          }

//          // enable gestures on touch end
//          this.imgBook.enableTouchScreenGestures({
//              disableSwipe: false, 
//              disablePan: false, 
//              disablePinch: false
//          });
//     }

//     implementZoomHotspot(x,y,w,h,pageDIV, overlaysId, UID?) {


//         // check if zoomHotspot layer already exists. If not create a new zoomHotspot layer.
//         let ZoomHotspotLayer = document.querySelector('#zoomHotspot-layer-' + pageDIV);
//         if(ZoomHotspotLayer == null) {
//             $("#readerpagediv"+pageDIV).append("<div id='zoomHotspot-layer-" + pageDIV + "'  style='width:100%; pointer-events:all;border: 0px solid green;height:100%;position:absolute;z-index:6;'></div>");
//         }

//         // Get a unique id number from a generator to create unique zoomHotspot containers.
//         let uniqueID = this.getUniqueId();
//         if(UID){
//             uniqueID = UID;
//         }
        
//         // Create a new and unique mask container and add a canvas to it.
//         $("#zoomHotspot-layer-" + pageDIV).append("<div id='zoomHotspot-div-" + uniqueID + "'  style='width:100%; overflow:hidden; pointer-events:none;border: 2px solid black;height:100%;position:absolute;z-index:4;'></div>");
//         $("#zoomHotspot-div-" + uniqueID).append("<canvas id='zoomHotspot-canvas-" + uniqueID + "'  style='position:absolute;z-index:4;'></canvas>");
        
//         this.addCloseDivToSelectionBox("#zoomHotspot-div-" + uniqueID, 'zoomHotspot' ,uniqueID, pageDIV);
        
//         // The following process is similar to adding a spotlight.

//         // Position the newly created zoomHotspotDiv using the coordinates passed from selection box creator.
//         let zoomHotspotDiv:any = document.querySelector('#zoomHotspot-div-' + uniqueID);
//         let zoomHotspotLayer:any = document.querySelector('#zoomHotspot-layer-' + pageDIV);

//         zoomHotspotDiv.style.left = x + 'px';
//         zoomHotspotDiv.style.top = y + 'px';
//         zoomHotspotDiv.style.width = w + 'px';
//         zoomHotspotDiv.style.height = h + 'px';

//         zoomHotspotDiv.fontSize = parseFloat($("#imgbook").css("font-size").substring(0, $("#imgbook").css("font-size").length-2));

//         // To zoom the page using in-built zoom functions to cover the max possible area in viewport.

//         var imagebookScroll:any = document.querySelector('#imgbook');
//         var defaultFontSize = parseFloat($("#imgbook").css("font-size").substring(0, $("#imgbook").css("font-size").length-2));
//         var oldFontSize = parseFloat($("#imgbook").css("font-size").substring(0, $("#imgbook").css("font-size").length-2));
//         var newFontSize = parseFloat($("#imgbook").css("font-size").substring(0, $("#imgbook").css("font-size").length-2));
//         var scale = newFontSize / defaultFontSize;

//         let tempWindowWidth= window.innerWidth;
//         if(this.sidebarConfig.isActive){
//             tempWindowWidth-=320;
//         }

//         let toolbarHeight = document.querySelector('#toolbar-wrapper-id').getBoundingClientRect().height;

//         while(true) {
//             oldFontSize = parseFloat($("#imgbook").css("font-size").substring(0, $("#imgbook").css("font-size").length-2));
//             if(this.imgBookHelperService.canZoom('ZOOM_IN')) {
//                 oldFontSize = newFontSize;
//                 this.currentPageOrientation = undefined;
//                 this.imgBook.zoomin();
//                 newFontSize = parseFloat($("#imgbook").css("font-size").substring(0, $("#imgbook").css("font-size").length-2));
//                 scale = newFontSize / defaultFontSize;  
//                 if (scale * w < tempWindowWidth && scale * h < (window.innerHeight - toolbarHeight)) {
//                     // newFontSize = parseFloat($("#imgbook").css("font-size").substring(0, $("#imgbook").css("font-size").length-2));
//                 } else {
//                     if(this.imgBookHelperService.canZoom('ZOOM_OUT')){
//                         this.currentPageOrientation = undefined;            
//                         this.imgBook.zoomout();
//                         newFontSize = oldFontSize;
//                         break;
//                     }
//                 }
//             } else {
//                 break;
//             }
//         }  

//         this.updatePageViewButtonsState();
//         this.currentPageOrientation = undefined;
        
        
//         // Get the image of the pageDiv and add it to canvas.
//         // Style and Position the canvas such that image matches the background.
//         var img:any = document.querySelector('#readerpagediv'+pageDIV).querySelector('.imageLayer');
//         var canv:any = document.querySelector('#zoomHotspot-canvas-'+uniqueID);



//         let tempImgHeight = img.naturalHeight;
//         let tempImgWidth = img.naturalWidth;


//         if(this.isIosDevice() && tempImgHeight*tempImgWidth >= this.newSelectionBoxConfig.magicNumber) {
//             tempImgHeight = 3000;
//             tempImgWidth = 3000;
//         }

//         canv.width = tempImgWidth;
//         canv.height = tempImgHeight;

//         canv.style.width = zoomHotspotLayer.offsetWidth + 'px';
//         canv.style.height = zoomHotspotLayer.offsetHeight + 'px';

//         var ctx = canv.getContext("2d");
//         ctx.drawImage(img, 0, 0);

//         canv.style.marginLeft = -(x+2) + 'px';
//         canv.style.marginTop = -(y+2) + 'px';

//         // blur the original imagebook image
//         let pagesDivArray = this.currentPageLayout == PAGE_LAYOUT.DOUBLE ? ['A', 'B'] : ['A'];
//         for (let index = 0; index < pagesDivArray.length; index++) {
//             const pagesDiv = pagesDivArray[index];
//             var readerPageDiv = document.querySelector('#readerpagediv' + pagesDiv);
//             var image: any = readerPageDiv.getElementsByClassName('imageLayer')[0];
//             image.style.filter = 'blur(10px)';
//             image.style.webkitFilter = 'blur(10px)';
//         }
//         // increment the count of number of feature div on the page.
//         this.newFeatureCounter[pageDIV]['zoomHotspot'] += 1;

//         // push the feature in respective map.
//         this.newFeatureMap[pageDIV]['zoomHotspot'].push("#zoomHotspot-div-" + uniqueID);

//         this.addHotspotEventListenersforSelectionBox();
//         this.newBlurDrawingTools();


//         // resize the selection box and its content w.r.t. new zoom level.
//         this.resizeSelectionBox(defaultFontSize, 'zoomHotspot', uniqueID, pageDIV);

//         let zoomArea = {
//             x: document.querySelector(this.newFeatureMap[pageDIV].zoomHotspot[0]).offsetLeft,
//             y: document.querySelector(this.newFeatureMap[pageDIV].zoomHotspot[0]).offsetTop,
//             w: document.querySelector(this.newFeatureMap[pageDIV].zoomHotspot[0]).offsetWidth,
//             h: document.querySelector(this.newFeatureMap[pageDIV].zoomHotspot[0]).offsetHeight
//         };
//         this.imgBookHelperService.hideHotspot({x:zoomArea.x, y:zoomArea.y, w:zoomArea.w, h:zoomArea.h, "feature" : "predefined-zoom", pageDIV: pagesDivArray, overlaysId:overlaysId});

//         // re position the image book to make the div in center.
//         scale = newFontSize / defaultFontSize;
//         var windowWidth = tempWindowWidth;
//         var windowHeight = window.innerHeight- toolbarHeight;
//         var readerContainerWrapper:any = document.querySelector('#reader-container-wrapper');
//         let readerContainer:any = document.querySelector('#reader-container');
//         var str = readerContainer.style.transform; 
//         // scenario: when zoom level is at default (NO ZOOM)
//         if (str === '') {
//             imagebookScroll.scrollLeft = x*scale - (windowWidth - w*scale)/2;
//             imagebookScroll.scrollTop = y*scale - (windowHeight - h*scale)/2;

//             if (this.currentPageLayout == PAGE_LAYOUT.DOUBLE && pageDIV == 'B') {
//                 imagebookScroll.scrollLeft = readerContainerWrapper.offsetWidth/2 + x*scale - (windowWidth - w*scale)/2;
//             }       
//         }
//         // scenario (limited) : when view port is translated instead of scroll
//         else if (str.match('translate3d') !== null && str.match('translate3d').length > 0) {
//             let tempXTrans = -(x*scale - (windowWidth - w*scale)/2);
//             let tempYTrans = -(y*scale - (windowHeight - h*scale)/2);
//             if (this.currentPageLayout == PAGE_LAYOUT.DOUBLE && pageDIV === 'B') {
//                 tempXTrans = -(readerContainerWrapper.offsetWidth/2 + x*scale - (windowWidth - w*scale)/2);
//             }
//             this.imgBook.setTranslateCoords({x:tempXTrans, y: tempYTrans});
//         }
//         // scenario (limited) : used only for emulator
//         else if (str.match('translate') !== null && str.match('translate').length > 0) {    

//             if ("ontouchstart" in document. documentElement) {
//                 let tempXTrans = -(x*scale - (windowWidth - w*scale)/2);
//                 let tempYTrans = -(y*scale - (windowHeight - h*scale)/2);
//                 if (this.currentPageLayout == PAGE_LAYOUT.DOUBLE && pageDIV === 'B') {
//                     tempXTrans = -(readerContainerWrapper.offsetWidth/2 + x*scale - (windowWidth - w*scale)/2);
//                 }
//                 this.imgBook.setTranslateCoords({x:tempXTrans, y: tempYTrans}); 
//             } else {
//                 imagebookScroll.scrollLeft = x*scale - (windowWidth - w*scale)/2;
//                 imagebookScroll.scrollTop = y*scale - (windowHeight - h*scale)/2;
    
//                 if (this.currentPageLayout == PAGE_LAYOUT.DOUBLE && pageDIV === 'B') {
//                     imagebookScroll.scrollLeft = readerContainerWrapper.offsetWidth/2 + x*scale - (windowWidth - w*scale)/2;
//                 }    
//             }

//         } else {
//             // scenario: left over cases
//             imagebookScroll.scrollLeft = x*scale - (windowWidth - w*scale)/2;
//             imagebookScroll.scrollTop = y*scale - (windowHeight - h*scale)/2;

//             if (this.currentPageLayout == PAGE_LAYOUT.DOUBLE && pageDIV === 'B') {
//                 imagebookScroll.scrollLeft = readerContainerWrapper.offsetWidth/2 + x*scale - (windowWidth - w*scale)/2;
//             }       
//         }

//         // incase any zoomHotspot is currently active, disable dragging of note hotspots.
//         this.imgBookHelperService.setHotspotDragState(true);
//         this.storeSelectionBox({page: pageDIV, feature: 'zoomHotspot', uniqueID: +uniqueID});
//     }

//     removeSelectionBoxEventListeners() {

//         $("#imgbook").addClass("dragscroll");  
//         dragscroll.reset();      

//         let pagesDIV;
//         let that = this;
//         if(this.currentPageLayout == PAGE_LAYOUT.DOUBLE) {
//             pagesDIV = ["A", "B"];
//         } else {
//             pagesDIV =  ["A"];
//         }

//         pagesDIV.forEach(function(pageDIV) {

//             that.removeSelectionBoxEventListenersCallback(pageDIV);

//             var SelectionBox:any = document.querySelector('#selection-box-' + pageDIV);
//             SelectionBox.style.cursor = '';
//             SelectionBox.style.backgroundColor = 'transparent';
    
//             that.newSelectionBoxConfig.currentFeature = undefined;
//             that.newSelectionBoxConfig.isActive = false;
//             that.updateToolbarForSelectionBoxConfig({});

//         });

//     }

//     removeSelectionBoxEventListenersCallback(pageDIV){
//         var $SelectionBoxContainer:any = $('#selection-box-container-' + pageDIV);

//         if($SelectionBoxContainer == null) {
//             return;
//         }

//         $SelectionBoxContainer.css({
//             'display': 'none',
//             'cursor': ''
//         });
        
//         $SelectionBoxContainer.off('mousedown');
//         $SelectionBoxContainer.off('mousemove');
//         $SelectionBoxContainer.off('mouseup');
//         $SelectionBoxContainer.off('mouseleave');
//         $SelectionBoxContainer.off('touchstart');
//         $SelectionBoxContainer.off('touchleave');
//         $SelectionBoxContainer.off('touchend');

//         var Imagebook:any = document.querySelector('#imgbook');
//         var $ImagebookWrapper:any = $('#imgbook_wrapper');
//         var $toolbarWrapper:any = $('#toolbar-wrapper-id');


//         Imagebook.style.cursor = '';
//         $ImagebookWrapper.off('mousemove');
//         $ImagebookWrapper.off('mouseup');
//         $toolbarWrapper.off('mousemove');
//         $toolbarWrapper.off('mouseup');
//     }

//     getUniqueId() {
//         return this.ctr++;
//     }

//     addCloseDivToSelectionBox(selector, feature ,id, pageDIV) {
        
//         // append a close button the feature div to close it.
//         // ui fix: close button was not visible for small selection boxes
//         $(selector).append("<button id='" + feature + "-close-button-" + id + "' title='" + this.translations.FOC._COMMON_ACROSS_PAGES.SELECTION_BOX.CLOSE + "' style=' border: 0; z-index: 4; pointer-events:all; outline: 0; background: transparent; padding: 0px 2px; margin: 0px; position: absolute; right: 0; top:0; color: var(--cup-general-color-5); font-size: 10px''> <i class='nemo-close-new nemo-font' aria-hidden='true'></i></button>");

//         // add event listeners to the close button.
//         let closeButton = document.querySelector('#'+feature+"-close-button-" + id);
//         let that = this;
//         closeButton.addEventListener('click', function(e) {
//             that.closeNewSelectionBox(selector, feature, id, pageDIV, { deleteSelection: true, hideMaskLimitToast:true });
//         });

//     }

//     // Function to append resize handle to the feature layer of selection box and enable its resize
//     addSelectionBoxResizeHandle(draggableArea, pageDIV) {
//         let top = draggableArea.offsetTop + draggableArea.offsetHeight - 16;
//         let left = draggableArea.offsetLeft + draggableArea.offsetWidth - 16;
//         let that = this;
//         let feature = draggableArea.id.split('-')[0];
//         let id = draggableArea.id.split('-')[2];

//         $(draggableArea.parentNode).append("<div class='" + feature + "-bottom-right-resizer-" + id + `' style=' border: 0; z-index: 4; background: transparent; pointer-events:all; position: absolute; left: ${left}px; top: ${top}px; height: 16px; width: 16px; padding: 0px; cursor: nwse-resize; font-size: 10px; touch-action: none'><img class = '${feature}-bottom-right-resizer-${id}' src="resize-black-new.svg"></div>`);
        
//         let readerContainer:any = document.querySelector('#readerpagediv'+pageDIV);
//         let resizeDiv:any = document.querySelector('.'+feature+'-bottom-right-resizer-'+id);

//         interact(resizeDiv).resizable({
//             edges: {
//                 bottom: [`.${feature}-bottom-right-resizer-${id}`],	// Resize if pointer target matches selector
//                 right: [`.${feature}-bottom-right-resizer-${id}`], 	// Resize if pointer target is the given Element
//             },
//             listeners: {
//                 start(){
//                     that.imgBookHelperService.hideHotspot({"feature" : 'hideAll', pageDIV: pageDIV});

//                     if($("#imgbook").hasClass("dragscroll")) {
//                         $("#imgbook").removeClass("dragscroll");
//                         dragscroll.reset();
//                      }
         
//                      // disable gestures on touch start
//                      that.imgBook.enableTouchScreenGestures({
//                          disableSwipe: true, 
//                          disablePan: true, 
//                          disablePinch: true
//                      });
//                 },
//                 move(event) {
//                     if(draggableArea.offsetWidth > 15){
//                         draggableArea.style.width = draggableArea.offsetWidth + event.dx + "px";
//                     }
                    
//                     if(draggableArea.offsetHeight > 35){
//                         draggableArea.style.height = draggableArea.offsetHeight + event.dy + "px";
//                     }

//                     resizeDiv.style.left = draggableArea.offsetLeft + draggableArea.offsetWidth - 16 + "px";
//                     resizeDiv.style.top = draggableArea.offsetTop + draggableArea.offsetHeight - 16 + "px";
//                 },
//                 end(event){
//                     if(feature == 'spotlight'){
//                         that.imgBookHelperService.hideHotspot({"feature" : 'hideAll', pageDIV: pageDIV});
//                     } else {
//                         that.imgBookHelperService.hideHotspot({x:draggableArea.offsetLeft + event.dx, y:draggableArea.offsetTop + event.dy, w:draggableArea.offsetWidth, h:draggableArea.offsetHeight, "feature" : feature, pageDIV: pageDIV});
//                     }
//                     that.enableDragScroll();
//                     that.storeSelectionBox({page: pageDIV, feature: feature, uniqueID: +id});
//                 }
//             },
//             modifiers: [
//                 interact.modifiers.restrictEdges({
//                     outer: readerContainer,
//                 }),
//             ],
//             inertia: true
//         });
//     }

//     updateSelBoxSizeAndResizeDivPosition(selector, page, top, left, height, width) {     
//         let readerContainer: any = document.querySelector('#readerpagediv'+page);
//         let feature = selector.id.split('-')[0];
//         let id = selector.id.split('-')[2];
//         let resizeDiv:any = document.querySelector('.'+feature+'-bottom-right-resizer-'+id);

//         // update the position of resize div wrt the feature box's new position
//         resizeDiv.style.left = left + width - 16 + "px";
//         resizeDiv.style.top = top + height - 16 + "px";
//         // update selection box's max width and max height wrt the reader page
//         selector.style.maxWidth = (readerContainer.offsetWidth - left) + "px";
//         selector.style.maxHeight = (readerContainer.offsetHeight - top) + "px";
//     }

//     removeSelectionBoxResizeHandle(feature, id) {
//         document.querySelector("."+ feature + "-bottom-right-resizer-" + id).remove();
//     }

//     closeNewSelectionBox(selector, feature, id, pageDIV, options: any = {}) {

//         var fontsize = parseFloat($("#imgbook").css("font-size").substring(0, $("#imgbook").css("font-size").length-2));

//         // remove the selector from feature map
//         for (var i = 0; i < this.newFeatureMap[pageDIV][feature].length ; i++) {
//             if(this.newFeatureMap[pageDIV][feature][i] == selector) {
//                 this.newFeatureMap[pageDIV][feature].splice(i,1);
//             }
//         }

//         // decrement the count of currently made feature divs.
//         this.newFeatureCounter[pageDIV][feature] -= 1;

//         // remove the feature div.
//         let featureDiv:any = document.querySelector(selector);
        
//         /**
//          * NEMO - 5527 Reopened : in ios devices, remove does not remove canvas from memory and all the canvases
//          * stack up to overflow the 384MB memory allocated.
//          * so we resize the canvas to 0 to use least memory.
//          */
//         let featureCanv:any = document.querySelector('#'+feature+'-canvas-'+id);
//         featureCanv.width = 0;
//         featureCanv.height = 0;
//         featureCanv.parentNode.removeChild(featureCanv);

//         featureDiv.remove();
//         if(feature != 'zoomHotspot'){
//             this.removeSelectionBoxResizeHandle(feature, id);
//         }

//         this.disableSelBoxDragResize(selector);

//         let selectionBoxContainer:any = document.querySelector('#selection-box-container-'+pageDIV);
//         if(selectionBoxContainer) selectionBoxContainer.style.pointerEvents = 'all';

//         // if it was a last spotlight on the page then remove the layer.
//         if(feature == 'spotlight' && this.newFeatureCounter[pageDIV][feature] <= 0) {
//             document.querySelector("#spotlight-layer-" + pageDIV).remove();
//             this.newUnBlurDrawing(pageDIV);
//         }

//         // if it was a last zoomHotspot on the page then remove the layer and show zoom hotspot event listeners.
//         if (feature == 'zoomHotspot' && this.newFeatureCounter[pageDIV][feature] <= 0) {
//             document.querySelector("#zoomHotspot-layer-" + pageDIV).remove();
//             let pagesDivArray = this.currentPageLayout == PAGE_LAYOUT.DOUBLE ? ['A', 'B'] : ['A'];
//             for (let index = 0; index < pagesDivArray.length; index++) {
//                 const pageDIV = pagesDivArray[index];

//                 this.newUnBlurDrawing(pageDIV);
//             }

//             if (options.zoomReset) {
//                 //NEMO-8007 default page view fit to width
//                 this.setPersistantPageOrientation();
//                 this.updatePageViewButtonsState();

//             }

//         }

//         // if it was a last mask on the page then remove the layer.
//         if(feature == 'mask' && this.newFeatureCounter[pageDIV][feature] <= 0) {
//             document.querySelector("#mask-layer-" + pageDIV).remove();
//         }

//         // if it is last was last sum of spotlight and zoomhotspot then remove the original image blur
//         if(this.newFeatureCounter[pageDIV]['spotlight'] <= 0 && this.newFeatureCounter[pageDIV]['zoomHotspot'] <= 0) {
//             let pagesDivArray = [pageDIV];
//             if (feature == 'zoomHotspot') {
//                 pagesDivArray = this.currentPageLayout == PAGE_LAYOUT.DOUBLE ? ['A', 'B'] : ['A'];
//             }
//             for (let index = 0; index < pagesDivArray.length; index++) {
//                 const pageDIV = pagesDivArray[index];
//                 var readerPageDiv = document.querySelector('#readerpagediv'+pageDIV);
//                 var image:any = readerPageDiv.getElementsByClassName('imageLayer')[0];
//                 image.style.filter = 'none';
//                 image.style.webkitFilter = 'none';
//             }
//         }

//         // if there are no selections boxes active then show the zoomhotspot icons.
//         if (this.newFeatureCounter[pageDIV]['spotlight'] <= 0 && this.newFeatureCounter[pageDIV]['zoomHotspot'] <= 0 && this.newFeatureCounter[pageDIV]['mask'] <= 0) {
//             let pagesDivArray;
//             if (feature == 'zoomHotspot') {
//                 pagesDivArray = this.currentPageLayout == PAGE_LAYOUT.DOUBLE ? ['A', 'B'] : ['A'];
//             } else {
//                 pagesDivArray = [pageDIV];
//             }
//             pagesDivArray.forEach(page => {
//                 let options;
//                 options = { pageDIV: page };
//                 this.imgBookHelperService.showHotspot(options);
//                 for (let index = 0; index < options.pageDIV.length; index++) {
//                     const pageDIV = options.pageDIV[index];
//                     var readerPageDiv = document.querySelector('#readerpagediv' + pageDIV);
//                     var image: any = readerPageDiv.getElementsByClassName('imageLayer')[0];
//                     image.style.filter = 'none';
//                     image.style.webkitFilter = 'none';
//                 }
//                 // incase all spotlight/masks/zoomHotspots is closed, enable dragging of note hotspots.
//                 this.imgBookHelperService.setHotspotDragState(false);
//             });
//         }

//         this.resizeAllSelectionBoxes(fontsize);

//         if(options.deleteSelection){
//             this.deleteSelectionBoxFromMemory({page: pageDIV, feature: feature, uniqueID: +id});
//         }

//         if(feature == 'zoomHotspot') {
//             this.getSelectionBox();
//         }

//         if (options.hideMaskLimitToast) {
//             // Clear hideBox limit toast
//             this.toaster.clearPendingToasts({ hideBox: true });
//             this.maskLimitToastPageDiv = undefined;
//         }
//     }

//     closeAllSelectionBoxes() {
//         // create a copy to iterate the object as the original is being modified.
//         let tempMap = JSON.parse(JSON.stringify(this.newFeatureMap));

//         // iterate over all stored feature selectors to close them individually.
//         // iterate for each page.
//         Object.keys(tempMap).forEach(page => {
//             // iterate for each feature in the page.
//             Object.keys(tempMap[page]).forEach(feature => {
//                 // iterate for each selector in the feature of a page.
//                 tempMap[page][feature].forEach(selector => {
//                     // resize them accordingly.
//                     this.closeNewSelectionBox(selector, feature, selector.split('-')[2], page, { zoomReset: true })
//                 });

//             });

//         });


//     }

//     closeAllSelectionBoxesOfAPage(page, zoomReset, deleteSelection) {


//         // create a copy to iterate the object as the original is being modified.
//         let tempMap = JSON.parse(JSON.stringify(this.newFeatureMap));

//         // iterate over all stored feature selectors to close them individually.
//         // iterate for each feature in the page.
//         Object.keys(tempMap[page]).forEach(feature => {
//             // iterate for each selector in the feature of a page.
//             tempMap[page][feature].forEach(selector => {
//                 // resize them accordingly.
//                 this.closeNewSelectionBox(selector, feature, selector.split('-')[2], page, { zoomReset, deleteSelection });
//             });

//         });

//     }

//     resizeAllSelectionBoxes(prevFontSize, fromPinchEvent?) {

//         let fontsize = parseFloat($("#imgbook").css("font-size").substring(0, $("#imgbook").css("font-size").length-2));
        
//         if(fromPinchEvent) {
//             this.pinch.defaultFontSize = fontsize;
//             this.pinch.resize = true;
//         }

//         // iterate over all stored feature selectors to resize them individually.
//         // iterate for each page.
//         Object.keys(this.newFeatureMap).forEach(page => {
//             // iterate for each feature in the page.
//             Object.keys(this.newFeatureMap[page]).forEach(feature => {
//                 // iterate for each selector in the feature of a page.
//                 this.newFeatureMap[page][feature].forEach(selector => {
//                     // resize them accordingly.
//                     this.resizeSelectionBox(prevFontSize, feature, selector.split('-')[2] ,page)
//                 });

//             });

//         });

//         // re-add event listeners for increased/decreased sizes.
//         this.addHotspotEventListenersforSelectionBox();

//     }

//     resizeAllSelectionBoxesofAFeature(prevFontSize, feature, fromPinchEvent?) {

//         let fontsize = parseFloat($("#imgbook").css("font-size").substring(0, $("#imgbook").css("font-size").length-2));
        
//         if(fromPinchEvent) {
//             this.pinch.defaultFontSize = fontsize;
//             this.pinch.resize = true;
//         }

//         // iterate over all stored feature selectors to resize them individually.
//         // iterate for each page.
//         Object.keys(this.newFeatureMap).forEach(page => {
//             // iterate for each selector in the feature of a page.
//             this.newFeatureMap[page][feature].forEach(selector => {
//                 // resize them accordingly.
//                 this.resizeSelectionBox(prevFontSize, feature, selector.split('-')[2], page);
//             });
//         });

//         // re-add event listeners for increased/decreased sizes.
//         this.addHotspotEventListenersforSelectionBox();

//     }

//     resizeSelectionBox(previousFontSize, feature, id, pageDIV) {
        
//         //calculate new font size.
//         let fontsize = parseFloat($("#imgbook").css("font-size").substring(0, $("#imgbook").css("font-size").length-2));

//         // get scale value to scale the original dimensions w.r.t. new zoom value.

//         let selectionBox:any = document.querySelector("#" + feature + '-div-' + id);
//         let featureLayer:any = document.querySelector("#" + feature + '-layer-' + pageDIV);
//         let featureCanvas:any = document.querySelector("#" + feature + '-canvas-' + id);

//         previousFontSize = selectionBox.fontSize || previousFontSize;
//         selectionBox.fontSize = fontsize;
//         let scale = previousFontSize/fontsize;

//         // resize the canvas inside a div.
//         featureCanvas.style.width = featureLayer.offsetWidth + 'px';
//         featureCanvas.style.height = featureLayer.offsetHeight + 'px';

//         // scale selection box.
//         var top = parseFloat(selectionBox.style.top);
//         var left = parseFloat(selectionBox.style.left);
//         var width = parseFloat(selectionBox.style.width);
//         var height = parseFloat(selectionBox.style.height);
                
//         top =  top / scale;
//         left =  left / scale;
//         width =  width / scale;
//         height =  height / scale;

//         // re-position the div.
//         selectionBox.style.top = top + 'px';
//         selectionBox.style.left = left + 'px';
//         selectionBox.style.height = height + 'px';
//         selectionBox.style.width = width + 'px';

//         // re-position the image inside of the div.
//         featureCanvas.style.marginLeft = -(left+2) + 'px';
//         featureCanvas.style.marginTop = -(top+2) + 'px';

//         if(feature != 'zoomHotspot'){
//             this.updateSelBoxSizeAndResizeDivPosition(selectionBox, pageDIV, top, left, height, width);
//         }

//     }

//     addHotspotEventListenersforSelectionBox() {


//         // initialize variables to get corrected page x and page y values
//         let that = this;
//         var readerContainerWrapper:any = document.querySelector('#reader-container-wrapper');
//         var imagebookScroll:any = document.querySelector('#imgbook');
//         var sidebarContainer:any = document.querySelector('.sidebar');
//         if(that.sidebarConfig["current-sidebar"] == "notes") {
//             sidebarContainer = document.querySelector('.notes-wrapper');
//         }
//         if(that.sidebarConfig["current-sidebar"] == "dictionary") {
//             sidebarContainer = document.querySelector('.dictionary-wrapper');
//         }
//         var appContainer:any = document.querySelector('.app-container');
//         var tocWidth = this.sidebarConfig.position === undefined ? 0 : this.sidebarConfig.position === 'left' ? +sidebarContainer.offsetWidth: 0;
//         var readerContainer:any = document.querySelector('#reader-container');
//         var offL, offT, scrT, scrL;
        
//         // add event listeners to both A and B pages.
//         let pagesDIV;
//         if(this.currentPageLayout == PAGE_LAYOUT.DOUBLE) {
//             pagesDIV = ["A", "B"];
//         } else {
//             pagesDIV =  ["A"];
//         }

//         pagesDIV.forEach(function(pageDIV) {
        
//             // layer to apply event listener to.
//             var $readerpagediv:any = $('#readerpagediv'+pageDIV);

//             // remove existing event listeners if any.
//             that.removeHotspotEventListenersforSelectionBox(pageDIV);

//             // exit if no spotlight selection layer is present in the page.
//             let spotlightLayer:any = document.querySelector('#spotlight-layer-'+pageDIV);
//             let zoomHotspotLayer:any = document.querySelector('#zoomHotspot-layer-'+pageDIV);
//             let maskLayer:any = document.querySelector('#mask-layer-'+pageDIV);
//             if(spotlightLayer == null && zoomHotspotLayer == null && maskLayer == null) {
//                 return;
//             }

//             // by default the layer should allow all events to pass through
//             if(spotlightLayer != null) {
//                 spotlightLayer.style.pointerEvents = 'none';
//             }
//             if(zoomHotspotLayer != null) {
//                 zoomHotspotLayer.style.pointerEvents = 'none';
//             }

//             // to check if the device supports touch
//             let touchEvent = false;
            
//             // handling for touch events
//             $readerpagediv.on('touchstart', function(e:any) {

//                 touchEvent = true;

//                 offL = readerContainerWrapper.offsetLeft + appContainer.offsetLeft;
//                 offT = readerContainerWrapper.offsetTop + appContainer.offsetTop;
//                 scrT = imagebookScroll.scrollTop;
//                 scrL = imagebookScroll.scrollLeft;

//                 touchEvent = true;

//                 offL = readerContainerWrapper.offsetLeft + appContainer.offsetLeft;
//                 offT = readerContainerWrapper.offsetTop + appContainer.offsetTop;
//                 scrT = imagebookScroll.scrollTop;
//                 scrL = imagebookScroll.scrollLeft;

//                 var str = readerContainer.style.transform; 
//                 // scenario: when zoom level is at default (NO ZOOM)
//                 if (str === '') {
//                     scrT = -imagebookScroll.scrollTop;
//                     scrL = -imagebookScroll.scrollLeft;
//                 }
//                 // scenario (limited) : when view port is translated instead of scroll
//                 else if (str.match('translate3d') !== null && str.match('translate3d').length > 0) {
//                     scrL = +readerContainer.style.transform.match(/(-?[0-9\.]+)/g)[1];
//                     scrT = +readerContainer.style.transform.match(/(-?[0-9\.]+)/g)[2];
//                 }
//                 // scenario (limited) : used only for emulator
//                 else if (str.match('translate') !== null && str.match('translate').length > 0) {
//                     scrT = -imagebookScroll.scrollTop;
//                     scrL = -imagebookScroll.scrollLeft;
//                 } else {
//                     // scenario: left over cases
//                     scrT = -imagebookScroll.scrollTop;
//                     scrL = -imagebookScroll.scrollLeft;
//                 }



//                 // get page event co-ordinates and apply correction to it.
//                 var px  = e.touches[0].pageX - offL - scrL - tocWidth;
//                 var py  = e.touches[0].pageY - offT - scrT;

//                 if (that.currentPageLayout == PAGE_LAYOUT.DOUBLE && pageDIV === 'B') {
//                     px = px - readerContainerWrapper.offsetWidth/2;
//                 }

//                 let inSelectionBox = false;


//                 that.newFeatureMap[pageDIV]['spotlight'].concat(that.newFeatureMap[pageDIV]['zoomHotspot']).concat(that.newFeatureMap[pageDIV]['mask']).forEach(selector => {

//                     // by default the selection box should not block any pointer events.
//                     let featureBox:any = document.querySelector(selector);
//                     featureBox.style.pointerEvents = 'none';

//                     let x = featureBox.offsetLeft;
//                     let y = featureBox.offsetTop;
//                     let w = featureBox.offsetWidth;
//                     let h = featureBox.offsetHeight;


//                     // if the pointer lies in any of the selection box, set flag to true.
//                     if (that.pointliesinbox(x, y, w, h, px, py)) {
//                         inSelectionBox = true;
//                     }

//                     if(inSelectionBox && !that.toolbarConfig.showDrawingMenu && featureBox.id.split('-')[0] != 'zoomHotspot' || featureBox.id.split('-')[0] == 'mask'){
//                         featureBox.style.pointerEvents = 'all';
//                     }

//                 });

//                 // if flag is true then let pointer events to pass through, else stop them.
//                 if(inSelectionBox) {
//                     if(spotlightLayer != null) {
//                         spotlightLayer.style.pointerEvents = 'none';
//                     }
//                     if(zoomHotspotLayer != null) {
//                         zoomHotspotLayer.style.pointerEvents = 'none';
//                     }
//                 } else {
//                     if(spotlightLayer != null) {
//                         spotlightLayer.style.pointerEvents = 'all';
//                     }
//                     if(zoomHotspotLayer != null) {
//                         zoomHotspotLayer.style.pointerEvents = 'all';
//                     }
//                 }


//             });

//             // handling for mouse events
//             $readerpagediv.on('mousemove', function(e:any) {

//                 // if touch device is found then return
//                 if(touchEvent) {
//                     return;
//                 }

//                 offL = readerContainerWrapper.offsetLeft + appContainer.offsetLeft;
//                 offT = readerContainerWrapper.offsetTop + appContainer.offsetTop;
//                 scrT = imagebookScroll.scrollTop;
//                 scrL = imagebookScroll.scrollLeft;


//                 // get page event co-ordinates and apply correction to it.
//                 var px  = e.pageX - offL + scrL - tocWidth;
//                 var py  = e.pageY - offT + scrT;

//                 if (that.currentPageLayout == PAGE_LAYOUT.DOUBLE && pageDIV === 'B') {
//                     px = px - readerContainerWrapper.offsetWidth/2;
//                 }

//                 // flag to see if the pointer is in atleast 1 of many spotlight boxes.
//                 let inSelectionBox = false;

//                 // if no spotlight selection box is present then set flag to true/
//                 // a failsafe check. should not be called.
//                 if(that.newFeatureMap[pageDIV]['spotlight'].length <= 0 && that.newFeatureMap[pageDIV]['zoomHotspot'].length <= 0 && that.newFeatureMap[pageDIV]['mask'].length <= 0) {
//                     inSelectionBox = true;
//                 }

//                 // check if the pointer is in any of the selection boxes.
//                 that.newFeatureMap[pageDIV]['spotlight'].concat(that.newFeatureMap[pageDIV]['zoomHotspot']).concat(that.newFeatureMap[pageDIV]['mask']).forEach(selector => {

//                     // by default the selection box should not block any pointer events.
//                     let featureBox:any = document.querySelector(selector);
//                     featureBox.style.pointerEvents = 'none';

//                     let x = featureBox.offsetLeft;
//                     let y = featureBox.offsetTop;
//                     let w = featureBox.offsetWidth;
//                     let h = featureBox.offsetHeight;


//                     // if the pointer lies in any of the selection box, set flag to true.
//                     if (that.pointliesinbox(x, y, w, h, px, py)) {
//                         inSelectionBox = true;
//                     }
       
//                     if(inSelectionBox && !that.toolbarConfig.showDrawingMenu && featureBox.id.split('-')[0] != 'zoomHotspot' || featureBox.id.split('-')[0] == 'mask'){
//                         featureBox.style.pointerEvents = 'all';
//                     }

//                 });

//                 // if flag is true then let pointer events to pass through, else stop them.
//                 if(inSelectionBox) {
//                     if(spotlightLayer != null) {
//                         spotlightLayer.style.pointerEvents = 'none';
//                     }
//                     if(zoomHotspotLayer != null) {
//                         zoomHotspotLayer.style.pointerEvents = 'none';
//                     }
//                 } else {
//                     if(spotlightLayer != null) {
//                         spotlightLayer.style.pointerEvents = 'all';
//                     }
//                     if(zoomHotspotLayer != null) {
//                         zoomHotspotLayer.style.pointerEvents = 'all';
//                     }
//                 }

//             });

//         });
//     }

//     removeHotspotEventListenersforSelectionBox(pageDIV) {
//         var $readerpagediv:any = $('#readerpagediv'+pageDIV);
//         $readerpagediv.off('touchstart');
//         $readerpagediv.off('mousemove');
//     }

//     newBlurDrawingTools() {

//         // iterate all spotlights in all pages
//         Object.keys(this.newFeatureMap).forEach(page => {
//             // iterate for each feature in the page and apply blur respectively.
//             this.newFeatureMap[page]['spotlight'].forEach(selector => {
//                 this.addDrawingtoolsCanvasToSpotlight(selector, selector.split('-')[2] ,page)
//             });

//             this.newFeatureMap[page]['zoomHotspot'].forEach(selector => {
//                 let pagesDivArray = this.currentPageLayout == PAGE_LAYOUT.DOUBLE ? ['A', 'B'] : [page];
//                 for (let index = 0; index < pagesDivArray.length; index++) {
//                     const pageDiv = pagesDivArray[index];
//                     this.addDrawingtoolsCanvasToZoomHotspot(selector, selector.split('-')[2] ,pageDiv, pageDiv != page)
//                 }
//             });

//             this.newFeatureMap[page]['mask'].forEach(selector => {
//                 this.addDrawingtoolsCanvasToMask(selector, selector.split('-')[2] ,page)
//             });

//         });

//     }

//     addDrawingtoolsCanvasToSpotlight(selector, id, page) {

//         var konvaCanvas:any = document.querySelector('#drawing-tools-container-'+page).children[0].children[0];
//         var spotCanvas:any = document.querySelector('#spotlight-canvas-'+id);

//         var spotCtx = spotCanvas.getContext('2d');


//         var img:any = document.querySelector('#readerpagediv'+page).querySelector('.imageLayer');
//         spotCtx.clearRect(0, 0, spotCanvas.width, spotCanvas.height);
//         spotCtx.drawImage(img, 0, 0, spotCanvas.width, spotCanvas.height);
//         spotCtx.drawImage(konvaCanvas, 0, 0, spotCanvas.width, spotCanvas.height);
//         konvaCanvas.style.filter = 'blur(10px)';
//         konvaCanvas.style.webkitFilter = 'blur(10px)';

//     }

//     addDrawingtoolsCanvasToZoomHotspot(selector, id, page, ignore = false) {

//         var konvaCanvas:any = document.querySelector('#drawing-tools-container-'+page).children[0].children[0];
        
//         if(!ignore) {
//             var zoomHotspotCanvas:any = document.querySelector('#zoomHotspot-canvas-'+id);
//             var zoomHotspotCtx = zoomHotspotCanvas.getContext('2d');
//             var img:any = document.querySelector('#readerpagediv'+page).querySelector('.imageLayer');
//             zoomHotspotCtx.clearRect(0, 0, zoomHotspotCanvas.width, zoomHotspotCanvas.height);
//             zoomHotspotCtx.drawImage(img, 0, 0, zoomHotspotCanvas.width, zoomHotspotCanvas.height);
//             zoomHotspotCtx.drawImage(konvaCanvas, 0, 0, zoomHotspotCanvas.width, zoomHotspotCanvas.height);
//         }

//         konvaCanvas.style.filter = 'blur(10px)';
//         konvaCanvas.style.webkitFilter = 'blur(10px)';

//     }

//     addDrawingtoolsCanvasToMask(selector, id, page) {

//         var konvaCanvas:any = document.querySelector('#drawing-tools-container-'+page).children[0].children[0];
//         var maskCanvas:any = document.querySelector('#mask-canvas-'+id);

//         var spotCtx = maskCanvas.getContext('2d');

//         var img:any = document.querySelector('#readerpagediv'+page).querySelector('.imageLayer');
//         spotCtx.clearRect(0, 0, maskCanvas.width, maskCanvas.height);
//         spotCtx.drawImage(img, 0, 0, maskCanvas.width, maskCanvas.height);
//         spotCtx.drawImage(konvaCanvas, 0, 0, maskCanvas.width, maskCanvas.height);

//     }

//     newUnBlurDrawing(page) {
//         var konvaCanvas:any = document.querySelector('#drawing-tools-container-'+page).children[0].children[0];
//         konvaCanvas.style.filter = 'none';
//         konvaCanvas.style.webkitFilter = 'none';
//     }

//     saveSelectionBoxesToMemory(options) {

//         let fontsize = parseFloat($("#imgbook").css("font-size").substring(0, $("#imgbook").css("font-size").length-2));
//         let scale = fontsize/this.newSelectionBoxConfig.defaultFontSize;
//         let bookCode = this.studentBook.meta.code;
//         let selector = '#' + options.feature + '-div-' + options.uniqueID;

//         // select each featureDiv using DOM selector
//         let featureDiv: any = document.querySelector(selector);
//         if(featureDiv) {

//             if(featureDiv.offsetHeight == 0 && featureDiv.offsetWidth == 0) {
//                 return;
//             }

//             // find serial of current page
//             let serial;
//             if(this.currentPageLayout == PAGE_LAYOUT.DOUBLE) {
//                     serial = options.page == "A" ? this.currentPage[0].serial : this.currentPage[1].serial;
//             } else {
//                 serial = this.currentPage[0].serial;
//             }

//             // if the object is undefind then initialize as empty object.
//             if(this.selectionBoxCollection == undefined) {
//                 this.selectionBoxCollection = {};
//             }

//             // if the object is undefind then initialize as empty object.
//             if(this.selectionBoxCollection[bookCode] == undefined) {
//                 this.selectionBoxCollection[bookCode] = {};
//             }

//             // if the serial is not added then initialize with empty object.
//             if(this.selectionBoxCollection[bookCode][serial] == undefined) {
//                 this.selectionBoxCollection[bookCode][serial] = {};
//             }

//             // if the feature in serial is undefined then initialize with empty array.
//             if(this.selectionBoxCollection[bookCode][serial][options.feature] == undefined) {
//                 this.selectionBoxCollection[bookCode][serial][options.feature] = new Map();
//             }


//             // find all the required information needed to create the feature and store it.
//             let featureConfig = {
//                 x: featureDiv.offsetLeft / scale,
//                 y: featureDiv.offsetTop / scale,
//                 w: featureDiv.offsetWidth / scale,
//                 h: featureDiv.offsetHeight / scale,
//                 fontsize: this.newSelectionBoxConfig.defaultFontSize,
//                 uniqueID: options.uniqueID
//             };
  
//             this.selectionBoxCollection[bookCode][serial][options.feature].set(options.uniqueID, featureConfig);

//         }

//         // localStorage.setItem('selectionBoxStorage', JSON.stringify(obj));

//     }

//     loadSelectionBoxesfromMemory() {
//         // let obj = JSON.parse(localStorage.getItem('selectionBoxStorage'));
        
//         let obj = this.selectionBoxCollection;
//         let bookCode = this.studentBook.meta.code;
//         let fontsize = parseFloat($("#imgbook").css("font-size").substring(0, $("#imgbook").css("font-size").length-2));
//         let oldFontsize = parseFloat($("#imgbook").css("font-size").substring(0, $("#imgbook").css("font-size").length-2));
//         let that = this;


//         Object.keys(obj[bookCode]).forEach(serial => {
//             // iterate for each feature in the page.
//             Object.keys(obj[bookCode][serial]).forEach(feature => {
//                 // iterate for each selector in the feature of a page.
//                 obj[bookCode][serial][feature].forEach(featureDivConfig => {
//                     fontsize = parseFloat($("#imgbook").css("font-size").substring(0, $("#imgbook").css("font-size").length-2));
//                     let page;

//                     if(that.currentPageLayout == PAGE_LAYOUT.DOUBLE) {
//                         if(that.currentPage[0].serial == serial) {
//                             page = 'A';
//                         } else if(that.currentPage[1].serial == serial) {
//                             page = 'B';
//                         } else {
//                             return;
//                         }
//                     } else {
//                         if(that.currentPage[0].serial == serial) {
//                             page = 'A';
//                         } else {
//                             return;
//                         }
//                     }
                    
//                     // implement the feature accordingly
//                     if(feature == 'mask') {
//                         let scale = fontsize / featureDivConfig.fontsize;
//                         that.implementMask(featureDivConfig.x * scale, featureDivConfig.y * scale, featureDivConfig.w * scale, featureDivConfig.h * scale, page, featureDivConfig.uniqueID)
//                     } else if(feature == 'spotlight') {
//                         let scale = fontsize / featureDivConfig.fontsize;
//                         that.implementSpotlight(featureDivConfig.x * scale, featureDivConfig.y * scale, featureDivConfig.w * scale, featureDivConfig.h * scale, page, featureDivConfig.uniqueID)
//                     }
//                     // can be implemented in future as per requirements.
//                     // else if(feature == 'zoomHotspot') {
//                     //     let scale = fontsize / featureDivConfig.fontsize;
//                     //     that.implementZoomHotspot(Math.round(featureDivConfig.x * scale), Math.round(featureDivConfig.y * scale), Math.round(featureDivConfig.w * scale), Math.round(featureDivConfig.h * scale), page, undefined, featureDivConfig.uniqueID)
//                     // }
//                 });
//             });
//         });

//         this.resizeAllSelectionBoxesofAFeature(oldFontsize, 'spotlight');
//         this.resizeAllSelectionBoxesofAFeature(oldFontsize, 'mask');


//     }

//     deleteSelectionBoxFromMemory(options) {
//         let bookCode = this.studentBook.meta.code;
//         let serial;

//         if(this.currentPageLayout == PAGE_LAYOUT.DOUBLE) {
//             serial = options.page == "A" ? this.currentPage[0].serial : this.currentPage[1].serial;
//         } else {
//             serial = this.currentPage[0].serial;
//         }
    
//         this.selectionBoxCollection[bookCode][serial][options.feature].delete(options.uniqueID);

//     }

//     storeSelectionBox(options) {

//         this.saveSelectionBoxesToMemory(options);

//     }

//     getSelectionBox() {
//         let bookCode = this.studentBook.meta.code;

//         if(this.selectionBoxCollection[bookCode]) {
//             this.closeAllSelectionBoxes();
//             this.loadSelectionBoxesfromMemory();
            
//             // need to call this in a setTimeout as the drawing layer is not yet formed when this is called.
//             let that = this;
//             setTimeout(function() {
//                 that.newBlurDrawingTools();
//             });
//         }
//     }

//     isIosDevice() {
//         return [
//             'iPad Simulator',
//             'iPhone Simulator',
//             'iPod Simulator',
//             'iPad',
//             'iPhone',
//             'iPod'
//         ].indexOf(navigator.platform) > -1
//           // iPad on iOS 13 detection
//           || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
//     }

//     // function to generate the notes overlays map and update the notes data service and the pages array used to render notes.
//     // This service has notes variables required to render notes and is called in toggleSidebar.
//     // in case if notes fetch failure, show, notes error toast. User can retry fetching notes by clicking on notes button in toolbar.
//     // in case if notes data is available, update the notes data service, create notes overlay object. 
//     addNotesDataFetchedFromServerToApp(notesData) {

//         if (notesData && notesData.status == "error") {
//             this.isNoteLoadFailed = true;
//             this.toaster.showToast({ type: "notes-fetch-failure" });
//         } else {

//         	// update the notes data service and the pages array used to render notes.
//             this.pages = this.notesDataService.updateNotesDataFetchedFromServer(notesData, this.studentBook.meta.code);

//             this.isNoteLoadFailed = false;

//             //cancatenate all the page wise notes arrays into 1 array.
//             let notesArr = [];
//             for (let index = 0; index < this.pages.length; index++) {
//                 const page = this.pages[index];
//                 if (!page.notes || page.notes.length === 0) {
//                     continue;
//                 }
//                 notesArr = notesArr.concat(page.notes);
//             }
            
//             // create overlayJson from fetched notes
//             notesArr.forEach(noteData => {
//                 if(noteData.data.pinPosition) {
//                     let noteHotspotObj = this.getNoteHotspotObjectFromNoteDataObject(noteData);
//                     if(noteHotspotObj) {
//                         let serial = noteData.data.serial;
//                         if (this.noteOverlays[serial]) {
//                             this.noteOverlays[serial].push(noteHotspotObj);
//                         } else {
//                             this.noteOverlays[serial] = [noteHotspotObj];
//                         }
//                     }
//                 }
//             });
//         }


//     }

//     // function to add a new note either on page or on notes panel.
//     addNote(data?) {

//         // if a note is already being created then return.
//         if(this.toolsService.getNoteStatus() || this.singleNoteConfig != undefined || this.isNoteLoadFailed || this.isNotesBusy || this.isImgbookBusy) {
//             return;
//         }

//         // check if page label already exists.[FOR NOTES PANEL ACCORDIAN]
//         let pageObject = this.pages.find(pageData => pageData.label === this.currentPage[0].label);

//         // if page label does not exist then add page label.
//         if(this.pages.indexOf(pageObject) == -1) {
//             let pageData = {
//                 label : this.currentPage[0].label,
//                 serial : this.currentPage[0].serial,
//                 isOpen : true,
//                 notes : []
//             };

//             if(this.pages.length) {
//                 let foundIndex = this.pages.findIndex((page)=> page.serial > pageData.serial);
//                 this.pages.splice((foundIndex!=-1?foundIndex:this.pages.length),0 , pageData);
//             } else {
//                 this.pages.push(pageData);
//             }

//         }

//         pageObject = this.pages.find(pageData => pageData.label === this.currentPage[0].label);
//         let index = this.pages.indexOf(pageObject);

//         // we require sleep as timestamp is not unique in for loop.
//         // can reduce it from 20 ms to 2 ms.
//         // TODO : we can add some random numbers after timestamp to make it unique if the delay is not required.
//         this.sleep(20);
//         // let uniqueID = parseInt(Date.now().toString().substring(7));
//         //creating unique id for notes 
//         let uniqueID = nanoid(16);
//         // default data required to create a note.
//         let defaultData = {
//             color : '#40D992', // color of note.
//             pageNo : this.currentPage[0].label, // page number.
//             serial : this.currentPage[0].serial, // serial.
//             data : '', // content of note.
//             mode : 'editing', // editing or saved mode.
//             viewOnMobile : false, // flag to check if it is currently viewed on mobile or not.
//             id: uniqueID, // unique id for each note's content.
//             pinPosition: null // note's pin position
//         }

//         // if on mobile device create 2 notes, 1 in notes panel and 1 on screen
//         if( window.innerWidth < 576 ) {

//             // add the note to notes list and it is automatically displayed because angular.
//             defaultData.mode = 'saved';
//             this.pages[index].notes.push( { data : defaultData,
//                 selector : uniqueID
//             });

//             this.sleep(20);

//             // create a second component for mobile.
//             let mobileNoteData = JSON.parse(JSON.stringify(defaultData));
//             let uniqueIDMobile = nanoid(16);
//             mobileNoteData.viewOnMobile = true;
//             mobileNoteData.mode = 'editing';
//             mobileNoteData.firstTimeEditing = true;

//             this.singleNoteConfig = {
//                 data: mobileNoteData,
//                 selector: uniqueIDMobile
//             };

//             this.toggleSidebar('notes');
            
//             setTimeout(() => {
//                 let textArea = document.getElementById('single-note-'+uniqueIDMobile).querySelector('textarea');
//                 textArea.focus();
//             });

//         } else {

//             // add the note to notes list and it is automatically displayed because angular.
//             this.pages[index].notes.push( { data : defaultData,
//                 selector : uniqueID
//             });
            
//             setTimeout(() => {
//                 let textArea = document.getElementById('single-note-'+uniqueID).querySelector('textarea');
//                 textArea.focus();
//             });
//         }

//         this.showNoteListView({"noteClass" : ".last-note"});

//         this.hideAllNotesTipModals();

//         this.toolsService.getActiveNoteReference().removeSelectedModeFromAllNotes();

//     }

//     hideAllNotesTipModals() {
//         this.pages.forEach(page => {
//             page.notes.forEach(note => {
//                 let noteReference = this.toolsService.getNotefromNotesMap(note.data.id);
//                 if (noteReference) {
//                     noteReference.hideTipModal();
//                 }
//             })
//         })
//     }
    
//     togglePagePanel(page) {
//         page.isOpen = !page.isOpen;

//         let that = this;
//         if(page.isOpen) {
//             page.notes.forEach(note => {
//                 let noteReference = that.toolsService.getNotefromNotesMap(note.data.id);
//                 setTimeout(function() {
//                     if(noteReference) {
//                         noteReference.addScrollToNote();
//                     }
//                 },50);
//             });
//         }
//     }

//     // function to jump to the page provided in note. also created a new note component in case of mobile.
//     jumpToPageEventFromNotes(data) {

//         let pageNo = data.serial;
//         let samePage = false;
        
//         // check if jump to page is same as current page.
//         this.currentPage.forEach(page => {
//             if(page.serial == pageNo) {
//                 samePage = true;
//             }
//         });

//         // if the device is mobile, create a new component visible on screen other than notes panel.
//         if(window.innerWidth < 576) {
//             let uniqueID = parseInt(Date.now().toString().substring(7));
//             data.viewOnMobile = true;
//             data.firstTimeEditing = false;
//             this.singleNoteConfig = {
//                 data: data,
//                 selector: uniqueID
//             }
//             this.toggleSidebar('notes');
//         }

//         // if the jump to page is called on current page, return.
//         if(samePage) {
//             return;
//         }

//         this.jumpToPageFromNotesPanel = true;

//         let currentPageFromLabel = this.imgBookHelperService.getPageFromLabel(this.units, data.pageNo).page; // get jump to selected page
//         this.openPage(currentPageFromLabel[0]);  

//         this.autoSaveNoteUponUserActive();
//         this.showNoteListView();


//     }

//     /**
//      * This functions makes the app exit capture mode and return to normal
//      */
//     exitCaptureMode(noteData) {
//         if(this.pinNoteConfig.isCaptureMode){
//             document.getElementById('readerpagedivA').style.removeProperty('cursor');
//             document.getElementById('readerpagedivB').style.removeProperty('cursor');
//             $('.hotSpotBox').css('cursor', '');

//             if(this.pinNoteConfig.isEditCaptureMode){
//                 $(`[note-id='${noteData.data.id}']`).removeClass("noteSelected");
//             }
//         }

//         this.pinNoteConfig = {
//             isCaptureMode: false,
//             selectedNote: null,
//             isEditCaptureMode: false,
//             sideBarToggleForPinNote: false,
//         };

//         console.log("Capture mode off");
//         if(this.toolsService.getNoteStatus()){
//             this.toolsService.setNoteStatus(false);
//             this.toolsService.setActiveNoteReference(undefined);
//         }
//         this.imgBook.exitCaptureMode();

//         // incase note pinning is now inactive, enable dragging of note hotspots.
//         this.imgBookHelperService.setHotspotDragState(false);

//     }

//     /**
//      * This function is called when user click on "Pin note to page" button from note.
//      * This puts app in pinning mode or capture mode
//      * Now if the user clicks anywhere on the ebook, a note pin icon wil be placed there.
//      * @param noteData object passed from note.component on which pin note to page event was called.
//      * noteData={
//      *  data:{
//      *      id, //unique note id
//      *      label, //page label
//      *      serial, //page serial
//      *      data, //note text content
//      *      color, //note border color
//      *      pinPosition //note pin position data
//      *  },
//      *  selector //unique note.component selector in html
//      * }
//      */
//     onPinNote(noteData) {
//         //set pinNoteConfig to enable capture mode and note id from which pin note to page event is called 
//         this.pinNoteConfig = {
//             ...this.pinNoteConfig,
//             isCaptureMode: true,
//             selectedNote: noteData.data.id
//         };

//         //Check whether user is on smaller screen since notes panel take the whole screen and we need to close notes panel in order for user to pin on book
//         if (window.innerWidth < 576) {
//             if (this.sidebarConfig.isActive && this.sidebarConfig["current-sidebar"] === "notes") {
//                 this.pinNoteConfig = {
//                     ...this.pinNoteConfig,
//                     sideBarToggleForPinNote:true
//                 }
//                 setTimeout(() => {
//                     this.toggleSidebar('notes');
//                 });
//             }
//         }

//         //add cursor
//         if(this.currentPage[0].serial === noteData.data.serial){
//             document.getElementById('readerpagedivA').style.cursor = 'crosshair';
//             document.getElementById('readerpagedivB').style.cursor = 'not-allowed';
//         }else{
//             document.getElementById('readerpagedivA').style.cursor = 'not-allowed';
//             document.getElementById('readerpagedivB').style.cursor = 'crosshair';
//         }
//         $('.hotSpotBox').css('cursor', 'not-allowed');

//         // incase note pinning is currently active, disable dragging of note hotspots.
//         this.imgBookHelperService.setHotspotDragState(true);

//         //Calling LFIB function which will add click event listener on the whole document.
//         this.imgBook.getCursorPosition((err, positionData) => {
            
//             // LFIB sends the pin position data in various forms. we are removing the data that is not required by us and only keeping the co-ords in px values.
//             if (positionData) {
//                 delete positionData.defaultData;
//                 delete positionData.centeredData.screenCoords;
//                 delete positionData.centeredData.bookCoords.positionEM;
//             }

//             //check for error and validate coordinates
//             if (err || !this.isCursorPositionValid(positionData, noteData)) {
//                 console.log("Invalid Click");
//                 this.onPinNote(noteData);
//                 return;
//             }

//             // for touch devices and devices with width less than 768px the hotspots are translated by 15% in x and y axis.
//             // this is done so that the relative position of the hotspots is same w.r.t content even though the styles and size changes when checking cross devices. 
//             // upon placing a pin or dragging the hotspots, user may feel that that in some cases, the hotspot moves upward a little.
//             // to fix this, we have added a small correction of 15% that is translated earlier.
//             // 15% of 4.2em (size of hotspot) multiplied by the font-size to get value in pixel. 
//             let correction = 0;
//             if (window.innerWidth < 768 || this.imgBookHelperService.isTouchDevice()) {
//                 correction = 0.72 * parseFloat($("#imgbook").css("font-size").substring(0, $("#imgbook").css("font-size").length - 2));
//             }
//             positionData.centeredData.bookCoords.positionPX.x += correction;
//             positionData.centeredData.bookCoords.positionPX.y += correction;

//             // incase note pinning is now inactive, enable dragging of note hotspots.
//             this.imgBookHelperService.setHotspotDragState(false);

//             //Update pin note config to notify all note.component nodes that user has exited pinning mode
//             this.pinNoteConfig = {
//                 ...this.pinNoteConfig,
//                 isCaptureMode: false,
//                 selectedNote: null,
//                 sideBarToggleForPinNote: false
//             };

//             //remove cursor
//             document.getElementById('readerpagedivA').style.removeProperty('cursor');
//             document.getElementById('readerpagedivB').style.removeProperty('cursor');
//             $('.hotSpotBox').css('cursor', '');

//             this.toolsService.setNoteStatus(false);
//             this.toolsService.setActiveNoteReference(undefined);

//             //This function takes noteData and returns either an object with two props-pageIndex and noteIndex or undefined if note is not found in this.pages array.
//             let indexData = this.findNoteIndexFromPages(noteData);
//             if (!indexData) {
//                 console.log("note not found");
//             }

//             //if user was moving pin, remove selected note icon from book 
//             if (this.pinNoteConfig.isEditCaptureMode) {
//                 this.onRemoveNotePin(noteData);
//                 this.pinNoteConfig = {
//                     ...this.pinNoteConfig,
//                     isEditCaptureMode: false
//                 }
//             }

//             //update noteData with position data
//             noteData.data.pinPosition = positionData;
//             this.pages[indexData.pageIndex].notes[indexData.noteIndex] = noteData;

//             //if single note is open update it with position data
//             if (this.singleNoteConfig) {
//                 let uniqueID = nanoid(16);
//                 this.singleNoteConfig = {
//                     data: noteData.data,
//                     selector: uniqueID
//                 };
//                 this.ref.detectChanges();
//             }

//             //Note service to hit api and save on server with updated noteData
//             this.updateNoteEvent({
//                 action: "edited",
//                 data: noteData
//             });

//             let noteReference = this.toolsService.getNotefromNotesMap(noteData.data.id);
//             if(noteReference){
//                 noteReference.addSelectedNoteMode(noteData.data.id, true, true);
//             }

//             //add pin in the position clicked on the book
//             //takes an array of note data objects
//             this.addPinOnImgBook([noteData]);
//         });
//     }

//     /**
//      * This function takes note Data as a parameter and finds the index of page and notes in this.pages array.
//      * @param data takes noteData
//      * noteData={
//      *  data:{
//      *      id, //unique note id
//      *      label, //page label
//      *      serial, //page serial
//      *      data, //note text content
//      *      color, //note border color
//      *      pinPosition //note pin position data
//      *  },
//      *  selector //unique note.component selector in html
//      * }
//      * @returns an object with two props- 
//      * pageIndex=>index of page in pages array
//      * noteIndex=>index of note in the notes array
//      * or undefined if the page or note not found in this.pages
//      * this.pages is an array of objects containing page data. this page object also has a prop "notes" which is again an arry of note objects
//      */
//     findNoteIndexFromPages(data) {
//         let pageIndex;
//         let noteIndex;

//         // find current page object from all pages.
//         let pageObject = this.pages.find((pageData, index) => {
//             if (pageData.label === data.data.pageNo) {
//                 pageIndex = index;
//                 return true;
//             }
//             return false;
//         });

//         if (!pageObject) {
//             return;
//         }

//         // find current note object from all notes of current page.
//         let noteObject = pageObject.notes.find((noteData, index) => {
//             if (noteData.data.id === data.data.id) {
//                 noteIndex = index;
//                 return true;
//             }
//             return false;
//         });

//         if (!noteObject) {
//             return;
//         }

//         return { pageIndex, noteIndex };
//     }

//     /**
//      * Validates whether note of current page is placed on the same page. Notes cannot be placed on different pages.
//      * @param positionData position data returned passed in the callback function of LFIB getCursorPosition funtion
//      * @param noteData
//      * noteData={
//      *  data:{
//      *      id, //unique note id
//      *      label, //page label
//      *      serial, //page serial
//      *      data, //note text content
//      *      color, //note border color
//      *      pinPosition //note pin position data
//      *  },
//      *  selector //unique note.component selector in html
//      * }
//      * @returns boolean value to determine position is valid or not
//      */
//     isCursorPositionValid(positionData, noteData) {
//         if (positionData.page === 'A' && this.currentPage[0].serial === noteData.data.serial) {
//             return true;
//         }

//         if (positionData.page === 'B' && this.currentPage[1].serial === noteData.data.serial) {
//             return true;
//         }

//         return false;
//     }

//     /**
//      * places pin on the book according to pinPosition provided in note
//      * @param noteDataArray array of note objects.
//      * note objects={
//      *  data:{
//      *      id, //unique note id
//      *      label, //page label
//      *      serial, //page serial
//      *      data, //note text content
//      *      color, //note border color
//      *      pinPosition //note pin position data
//      *  },
//      *  selector //unique note.component selector in html
//      * }
//      */
//     addPinOnImgBook(noteDataArray) {
//         // adding settimeout because we want our overlays to load a little later after the pinning has been done
//         setTimeout(() => {
//             //get current overlay json
//             let overlayJson = this.imgBookHelperService.getOverlayJSON();
    
//             for (let index = 0; index < noteDataArray.length; index++) {
//                 const noteData = noteDataArray[index];
    
//                 if (!noteData.data.pinPosition) {
//                     continue;
//                 }
    
//                 //create a note hotspot obj for noteData which has pinPosition
//                 let noteHotspotObj = this.getNoteHotspotObjectFromNoteDataObject(noteData);
    
//                 //add note hotspot objects in overlay json
//                 // in case the hotspot already exists then do nothing and return.
//                 // in case the hotpost exists but only pin position needs to be updated, then remove from array and add again.
//                 let serial = noteData.data.serial;
//                 if (overlayJson[serial]) {
//                     let isHotspotInOverlay = false;
//                     for (let i = 0; i < overlayJson[serial].length; i++) {
//                         const hotspot = overlayJson[serial][i];
//                         if (hotspot.type === "note" && hotspot.note.id === noteData.data.id) {
//                             if(noteData.data.updatePinPosition) {
//                                 delete noteData.data.updatePinPosition;
//                                 overlayJson[serial].splice(i,1);
//                             } else {
//                                 isHotspotInOverlay = true;
//                                 break;
//                             }
//                         }
//                     }
//                     if (!isHotspotInOverlay) {
//                         overlayJson[serial].push(noteHotspotObj);
//                     }
//                 } else {
//                     overlayJson[serial] = [noteHotspotObj];
//                 }
//             }
    
//             //fix to make sure selection boxes are not affected when note pins are placed on book
//             this.closeAllSelectionBoxes();
    
//             //updating overlay with updated overlay json
//             this.onOverlayJSONLoad(overlayJson);
    
//             //retrive selection boxes
//             setTimeout(() => {
//                 this.getSelectionBox();
//             }, 125);
//         }, 10);
//     }

//     /**
//      * function to generate a specified note hotspot object from note data object.
//      * @param noteData ={
//      *  data:{
//      *      id, //unique note id
//      *      label, //page label
//      *      serial, //page serial
//      *      data, //note text content
//      *      color, //note border color
//      *      pinPosition //note pin position data
//      *  },
//      *  selector //unique note.component selector in html
//      * }
//      * @returns note hotspot object as per requirement.
//      */
//     getNoteHotspotObjectFromNoteDataObject(noteData) {

//         if (!noteData.data.pinPosition) {
//             return;
//         }

//         return {
//             title: "",
//             x: noteData.data.pinPosition.centeredData.bookCoords.positionPX.x,
//             y: noteData.data.pinPosition.centeredData.bookCoords.positionPX.y,
//             type: "note",
//             icon: "invisible",
//             "visible-icon": true,
//             note: {
//                 id: noteData.data.id,
//                 label: noteData.data.pageNo,
//             },
//         }
//     }

//     /**
//      * Removes existing pin of the note.component node from the book
//      * @param noteData note data object, for which remove pin note event is called.
//      * noteData={
//      *  data:{
//      *      id, //unique note id
//      *      label, //page label
//      *      serial, //page serial
//      *      data, //note text content
//      *      color, //note border color
//      *      pinPosition //note pin position data
//      *  },
//      *  selector //unique note.component selector in html
//      * }
//      * @returns undefined if there is an error.
//      */
//     onRemoveNotePin(noteData) {
//         if(this.toolsService.getNoteStatus()){
//             this.toolsService.setNoteStatus(false);
//             this.toolsService.setActiveNoteReference(undefined);
//         }

//         //fetch existing overlay
//         let overlayJson = this.imgBookHelperService.getOverlayJSON();
//         let serial = noteData.data.serial;

//         //null check
//         let noteHotspotIndex = -1;
//         for (let index = 0; index < overlayJson[serial].length; index++) {
//             const hotspot = overlayJson[serial][index];
//             if (hotspot.type === "note" && hotspot.note.id === noteData.data.id) {
//                 noteHotspotIndex = index;
//                 break;
//             }
//         }

//         if (noteHotspotIndex === -1) {
//             console.log("nothotspot not found");
//             return;
//         }

//         //remove noteHotspot from overlay and update overlay
//         overlayJson[serial].splice(noteHotspotIndex, 1);
//         this.onOverlayJSONLoad(overlayJson);

//         //fetch page and note indexes
//         let indexData = this.findNoteIndexFromPages(noteData);
//         if (!indexData) {
//             console.log("note not found");
//         }

//         //update noteData
//         noteData.data.pinPosition = null;
//         this.pages[indexData.pageIndex].notes[indexData.noteIndex] = noteData;

//         //update single note if it is opened
//         if (this.singleNoteConfig) {
//             let uniqueID = nanoid(16);
//             this.singleNoteConfig = {
//                 data: JSON.parse(JSON.stringify(noteData.data)),
//                 selector: uniqueID
//             };
//             this.ref.detectChanges();
//         }

//         //network service to hit api to save data on server
//         this.updateNoteEvent({
//             action: "edited",
//             data: noteData
//         });
//     }

//     /**
//      * Selects the note icon on which move pin is called and app goes in pinning mode or capture mode.
//      * if the new clicked position is valid, note icon is moved to new position.
//      * @param noteData noteData for which move pin event is called.
//      * noteData={
//      *  data:{
//      *      id, //unique note id
//      *      label, //page label
//      *      serial, //page serial
//      *      data, //note text content
//      *      color, //note border color
//      *      pinPosition //note pin position data
//      *  },
//      *  selector //unique note.component selector in html
//      * }
//      */
//     onMoveNotePin(noteData) {
//         //update pin note config
//         this.pinNoteConfig = {
//             ...this.pinNoteConfig,
//             isEditCaptureMode: true
//         }

//         //replaces default note icon with selected note icon
//         $(`[note-id='${noteData.data.id}']`).addClass("noteSelected");

//         this.onPinNote(noteData);
//     }

//     /**
//      * This function is called when a note is active(adding or editing note) and the note does not have a pin associated with it.
//      * This puts app in capture mode.
//      * Now if the user click on the book, if the click position is valid a modal will show asking user to whether to save and pin note on that position or not.
//      * @param noteData data of not which is active
//      * noteData={
//      *  data:{
//      *      id, //unique note id
//      *      label, //page label
//      *      serial, //page serial
//      *      data, //note text content
//      *      color, //note border color
//      *      pinPosition //note pin position data
//      *  },
//      *  selector //unique note.component selector in html
//      * }
//      * @returns undefined if there is an error
//      */
//     onQuickPinAndSaveNote(noteData) {
//         this.pinNoteConfig = {
//             ...this.pinNoteConfig,
//             isCaptureMode: true,
//             selectedNote: noteData.data.id
//         };

//         //add cursor
//         if(this.currentPage[0].serial === noteData.data.serial){
//             document.getElementById('readerpagedivA').style.cursor = 'crosshair';
//             document.getElementById('readerpagedivB').style.cursor = 'not-allowed';
//         }else if(this.currentPage[1] && this.currentPage[1].serial && this.currentPage[1].serial === noteData.data.serial){
//             document.getElementById('readerpagedivA').style.cursor = 'not-allowed';
//             document.getElementById('readerpagedivB').style.cursor = 'crosshair';
//         }else{
//             document.getElementById('readerpagedivA').style.cursor = 'not-allowed';
//             document.getElementById('readerpagedivB').style.cursor = 'not-allowed';
//         }
//         $('.hotSpotBox').css('cursor', 'not-allowed');
        
//         // incase note pinning is currently active, disable dragging of note hotspots.
//         this.imgBookHelperService.setHotspotDragState(true);
//         setTimeout(() => {
//             this.keyboardHeight = this.originalHeight - window.innerHeight;
//         }, 200);

//         //Called LFIB function to capture position
//         this.imgBook.getCursorPosition(
//             (err, positionData) => {
                
//                 // LFIB sends the pin position data in various forms. we are removing the data that is not required by us and only keeping the co-ords in px values.
//                 if (positionData) {
//                     delete positionData.defaultData;
//                     delete positionData.centeredData.screenCoords;
//                     delete positionData.centeredData.bookCoords.positionEM;
//                 }

//                 //check for error and validate coordinates
//                 if (err || !this.isCursorPositionValid(positionData, noteData)) {
//                     console.log("Invalid Click");
//                     this.onQuickPinAndSaveNote(noteData);
//                     return;
//                 }

//                 // for touch devices and devices with width less than 768px the hotspots are translated by 15% in x and y axis.
//                 // this is done so that the relative position of the hotspots is same w.r.t content even though the styles and size changes when checking cross devices. 
//                 // upon placing a pin or dragging the hotspots, user may feel that that in some cases, the hotspot moves upward a little.
//                 // to fix this, we have added a small correction of 15% that is translated earlier.
//                 // 15% of 4.2em (size of hotspot) multiplied by the font-size to get value in pixel. 
//                 let correction = 0;
//                 if (window.innerWidth < 768 || this.imgBookHelperService.isTouchDevice()) {
//                     correction = 0.72 * parseFloat($("#imgbook").css("font-size").substring(0, $("#imgbook").css("font-size").length - 2));
//                 }
//                 positionData.centeredData.bookCoords.positionPX.x += correction;
//                 positionData.centeredData.bookCoords.positionPX.y += correction;
        
//                 // incase note pinning is now inactive, enable dragging of note hotspots.
//                 this.imgBookHelperService.setHotspotDragState(false);

//                 this.pinNoteConfig = {
//                     ...this.pinNoteConfig,
//                     isCaptureMode: false,
//                     selectedNote: null
//                 };
                
//                 //remove cursor
//                 document.getElementById('readerpagedivA').style.removeProperty('cursor');
//                 document.getElementById('readerpagedivB').style.removeProperty('cursor');
//                 $('.hotSpotBox').css('cursor', '');

//                 //prevent opening save and pin note id the note is empty 
//                 let singleNote = document.querySelector('#single-note-' + noteData.selector);
//                 if (!singleNote.querySelector('textarea').value.trim()) {
//                     if(noteData.data.isNewlyAdded){
//                         this.toolsService.getActiveNoteReference().deleteNote();
//                     }else{
//                         this.onQuickPinAndSaveNote(noteData);
//                         $(`#deleteSingleNoteModal-${noteData.selector}`).modal('show');
//                     }
//                     return;
//                 }

//                 //add position data in the note component on which this fn is called
//                 let noteComponent = this.toolsService.getActiveNoteReference();
//                 if (noteComponent) {
//                     if(this.isIosDevice()){
//                         if(this.keyboardHeight){
//                             let keyboardHeight = this.keyboardHeight;
//                             let scaledKeyboardHeight = this.imgBook.getScaledOriginalBookValues({ x:0, y:keyboardHeight});
//                             positionData.centeredData.bookCoords.positionPX.y = positionData.centeredData.bookCoords.positionPX.y + scaledKeyboardHeight.y;
//                         }
//                     }
//                     noteComponent.quickPositionData = positionData;
//                     noteComponent.addSelectedNoteMode(noteData.data.id, true, true);
//                 }

//                 if ($('.zoom-dropdown').hasClass('show')) {
//                     $('.zoom-dropdown').dropdown('toggle')
//                 }
//                 //open modal of the note.component node
//                 setTimeout(() => {
//                     $(`#quickSaveAndPinNoteModal-${noteData.selector}`).modal('show');
//                 });
//             });
//     }

//     // function to delete a note from notes list. Automatically deletes the note component.
//     deleteNoteEvent(data) {
//         let overlayJson = this.imgBookHelperService.getOverlayJSON();
//         if (data.data.pinPosition) {
//             let noteHotspotIndex = -1;
//             for (let index = 0; index < overlayJson[data.data.serial].length; index++) {
//                 const hotspot = overlayJson[data.data.serial][index];
//                 if (hotspot.type === "note" && hotspot.note.id === data.data.id) {
//                     noteHotspotIndex = index;
//                     break;
//                 }
//             }

//             if (noteHotspotIndex === -1) {
//                 console.log("nothotspot not found");
//             } else {
//                 overlayJson[data.data.serial].splice(noteHotspotIndex, 1);
//                 this.onOverlayJSONLoad(overlayJson);
//             }
//         }

//         // find current page object from all pages.
//         let pageObject = this.pages.find(pageData => pageData.label === data.data.pageNo);

//         // find current note object from all notes of current page.
//         let noteObject = pageObject.notes.find(noteData => noteData.data.id === data.data.id);

//         // find index of current note from the notes array.
//         let noteIndex = pageObject.notes.indexOf(noteObject)

//         // delete the note.
//         pageObject.notes.splice(noteIndex,1);

//         // remove the note is it was on mobile also.
//         if(data.data.viewOnMobile) {
//             this.singleNoteConfig = undefined;
//             // NEMO-6374 : [eReader] Visible line in the notes panel (mobile) fix.
//             // this scroll is required as iphone scrolls when soft keyboard is visible.
//             window.scrollTo(0, 0);
//             setTimeout(() => {
//                 this.toggleSidebar('notes', {"calledfromdeleteNoteEvent" : true});
//             }, 100);
//         }

//         if(data.data.data !== ""){this.updateNoteEvent({action:'deleted', data:data});}
//         // changes reflected automatically.
//         this.ref.detectChanges();

//     }

//     // function to delete current mobile note and go back to mobile panel.
//     backToNotesPanel(data) {
//         this.jumpToPageFromNotesPanel = false;
//         this.singleNoteConfig = undefined;
        
//         // NEMO-6374 : [eReader] Visible line in the notes panel (mobile) fix.
//         // this scroll is required as iphone scrolls when soft keyboard is visible.
//         window.scrollTo(0, 0);
//         setTimeout(() => {
//             this.toggleSidebar('notes');
//         }, 100);

//         this.ref.detectChanges();
//     }

//     // update the note in notes panel when saved in mobile view
//     saveNoteEvent(data, navigateBackToNotesPanel = true) {
//         if(!data.data.viewOnMobile) {
//             return;
//         }

//         // find current page object from all pages.
//         let pageObject = this.pages.find(pageData => pageData.label === data.data.pageNo);
        
//         // find current note object from all notes of current page.
//         let noteObject = pageObject.notes.find(noteData => noteData.data.id === data.data.id);

//         // failsafe to avoid crash when the note is not found in panel.. 
//         // THIS SHOULD NEVER BE CALLED BASED ON CURRENT IMPLEMENTATION AS WE CREATE A NOTE IN PANEL... 
//         // ...WHEN WE CREATE A NEW NOTE ON MOBILE.
//         if(noteObject == undefined) {
//             return;
//         }

//         // update the changes from mobile note to panel note.
//         noteObject.data.color = data.data.color;
//         noteObject.data.svg = data.data.svg;
//         noteObject.data.data = data.data.data;
//         noteObject.data.mode = 'saved';
//         noteObject.data.viewOnMobile = false;
//         noteObject.data.pinPosition = data.data.pinPosition;

//         // iterate over all references of notes created to find the note we updated and render the changes in the note explicitly.
//         // TODO : Find a way to optimize this search.
//         /**
//          * Optimize 1 : store the reference in inputConfig. Issue : creates circular json difficult to pass around.
//          * Optimize 2 : limit the search to current page. Issue : need to create a map that stores notes of a page and its reference. space wasted.
//          */
//         // after integration with notes panel i think we do not need this update call as at the time on update the component is not rendered.
//         // and upon rendering it is created with updated values.
//         // this.notesChildren.toArray().forEach(note => {
//         //     if(note.inputConfig.data.id == noteObject.data.id) {
//         //         note.updateNote();
//         //     }
//         // });

//         if(data.data.viewOnMobile && data.data.firstTimeEditing && navigateBackToNotesPanel) {
//             this.singleNoteConfig = undefined;

//             // NEMO-6374 : [eReader] Visible line in the notes panel (mobile) fix.
//             // this scroll is required as iphone scrolls when soft keyboard is visible.
//             window.scrollTo(0, 0);
//             setTimeout(() => {
//                 this.backToNotesPanel(data);
//             },100);

//         }


//     }

//     // function to create an artificial delay to use timestamp in a loop.
//     sleep(milliseconds) {
//         const date = Date.now();
//         let currentDate = null;
//         do {
//             currentDate = Date.now();
//         } while (currentDate - date < milliseconds);
//     }

//     checkAndDeleteIfNoteCorrespondingToSingleMobileNoteIsEmpty(data) {

//         let updatedInputConfig = this.toolsService.getSingleNoteReference().getLatestNotesConfig();

//         if(updatedInputConfig.data.data.trim() == '') {


//             if(updatedInputConfig.data.wasNoteEdited) {
                
//                 // if check will not work as there are no notes being displayed and the last saved data is already
//                 // present in the main object.
//                 // tempNoteRef will always be undefined.
//                 let tempNoteRef = this.toolsService.getNotefromNotesMap(updatedInputConfig.data.id);	
//                 if(tempNoteRef) {	
//                     tempNoteRef.saveLastStateofNote();	
//                 }

//             } else {

//                 // find current page object from all pages.
//                 let pageObject = this.pages.find(pageData => pageData.label === updatedInputConfig.data.pageNo);

//                 // find current note object from all notes of current page.
//                 let noteObject = pageObject.notes.find(noteData => noteData.data.id === updatedInputConfig.data.id);
                
//                 // find index of current note from the notes array.
//                 let noteIndex = pageObject.notes.indexOf(noteObject);
                
//                 // delete the note.
//                 pageObject.notes.splice(noteIndex,1);
                
//                 // changes reflected automatically.
//                 this.ref.detectChanges();
                
//             }


                
//         } else {
//             this.saveNoteEvent(updatedInputConfig, false);
//             this.toolsService.removeSingleNoteReference();
//             this.toolsService.setNoteStatus(false);
//             this.toolsService.setActiveNoteReference(undefined);
//         }



//     }

//     toggleNotesWrapperMobile() {
//         // close the single note on screen in mobile on orientation change.
//         if (this.singleNoteConfig) {
//             this.checkAndDeleteIfNoteCorrespondingToSingleMobileNoteIsEmpty(this.singleNoteConfig);
//             this.singleNoteConfig = undefined;
//         }
//         this.toggleSidebar('notes');

//         if(this.toolbarConfig.currentTool != undefined) {
//             this.toggleMobileTools(this.toolbarConfig.currentTool);
//         }

//     }

//     autoSaveNoteUponUserActive() {

//         if(this.toolsService.getNoteStatus()) {
        
//             let activeNoteReference = this.toolsService.getActiveNoteReference();
//             activeNoteReference.autoSaveAndCloseNote();

//         }

//     }

//     /**
//      * method to chck that when the app is launched in desktop mode, whether the 
//      * bundle's cover image has been downloaded or not
//      * @param bundle 
//      * @returns 
//      */
//     isBundleCoverImagePresent(bundle){
//         if(environment.isDesktopApp){
//             bundle.imageURL = bundle.cover;
//             return this.desktopHelperService.isBundleImagePresent(bundle);
//         }else{
//             return bundle.cover;
//         }
//     }

//     sanitize(url:string){
//         if(environment.isDesktopApp){
//             return this.sanitizer.bypassSecurityTrustResourceUrl(url);
//         } else {
//             return url;
//         }
//     }

//     get downloadedList() {
//         return this.downloadHelperService.downloadedList;
//     }

//     /**
//      * 
//      * @param book method to check if the book is to be shown enabled in the toc dopdown
//      * */
//     isDDBookEnabled(book){
//         if(environment.isDesktopApp){
//             if(this.isOnline){
//                 return true;
//             }else {
//                 return this.downloadHelperService.isBookDownloaded(book.bookCode);
//             }
//         }else{
//             return true;
//         }
//     }
//     updateNoteEvent(data) {
//         this.notesDataService.saveNoteData(data, this.studentBook.meta.code, this.spaceId);
//     }

//     updateDrawingSize(pageDIV, json) {
//         this.drawingToolsConfig["currentSize-"+pageDIV] = (json && json.length) || 0;
//     }

//     checkIfDrawingSizeExceedesLimit(pageDIV) {
//         if(this.drawingToolsConfig["currentSize-"+pageDIV] < this.drawingToolsConfig.maxSizeAllowed) {
//             return false;
//         }
//         return true;
//     }


//     async navigateToUserDashboard() {
//         const { queryParams } = this.route.snapshot;
//         if (queryParams.lf == 'ltd') {
//             this.appHelperService.navigateToOnboardingApp(['lti-teacher-dashboard', this.spaceId, 'class', queryParams.cid, 'ltik', queryParams.ltik]);
//         } else {
            
//             // force sync data with server
//             // check and post pending data from local storage.
//             await this.checkAndPostPendingUserDataFromLocalStorage();
//             // sync with server and reset vm
//             this.desktopEBookVMService.syncLocalWithServer(true);
//             this.desktopEBookVMService.resetVM();

//             // close lo hotspot on prev / next or any page load.
//             // need to improve this if current hotspot is visible on page single double switch.
//             let isLOHotspotVisible = this.checkIfLOHotspotVisible();
//             if (isLOHotspotVisible) {
//                 this.closeLOHotspot();
//             }

//             this.appHelperService.showLoaderAndNavigateToDashboard(this.classId, this.spaceId, this.bundle['bundle-code']);
//         }
//     }

//     checkandUpdatebuttonState(isOnline){
//         if (environment.isDesktopApp) {
//             if (this.isOnline) {
//                 this.toolButtonOfflineState = true;
//             } else {
//                 //download book helper service gave status of book as true or false
//                 //the same status is required to manage button state
//                 this.toolButtonOfflineState = this.downloadHelperService.isBookDownloaded(this.studentBook.meta.code);
//                 if(this.sidebarConfig['current-sidebar'] == "toc" && this.sidebarConfig.isActive && !this.toolButtonOfflineState){
//                     this.toggleSidebar();
//                 }
//             }
//           } else {
//             this.toolButtonOfflineState = true;
//           }
//     }

//     async checkAndPostPendingUserDataFromLocalStorage() {
//         let pendingNotesInLocalStorage = this.notesDataService.checkPendingDataInLocalStorage();
//         let pendingDrawingsInLocalStorage = this.drawingDataService.checkPendingDataInLocalStorage();
//         let pendingLastPageInLocalStorage = this.lastPageDataService.checkPendingDataInLocalStorage();
//         let isXAPIHandled = false;

//         // post pending notes to xAPI
//         if (pendingNotesInLocalStorage) {
//             isXAPIHandled = true;
//             this.notesDataService.postPendingNotesToXAPI();
//         }

//         // post pending drawings to xAPI
//         if (pendingDrawingsInLocalStorage) {
//             isXAPIHandled = true;
//             this.drawingDataService.postPendingDrawingsToXAPI();
//         }

//         // post pending last page to xAPI
//         if (pendingLastPageInLocalStorage) {
//             isXAPIHandled = true;
//             this.lastPageDataService.postPendingLastPageToXAPI();
//         }

//         if (isXAPIHandled) {
//             // flushing xAPI statements from local storage
//             await this.xAPIHelperService.flushStateAndStatement();
//         }

//     }

//     // sync/push LO statements data to server when in online mode. If syned, then mark in global service so as to not sync again.
//     async syncLearnerLOdataWithServer() {

//         let peArray = [];
//         this.bundle.products.forEach(product => {
//             if (product['ext-product'].type == 'OLP') {
//                 let productCode = product['dls-product'].code;

//                 if (peArray.indexOf(productCode) == -1) {
//                     peArray.push(productCode);
//                 }
//             }
//         });

//         if (this.isOnline) {
//             for (let peCode of peArray) {
//                 await this.productViewDataService.syncLOStatementsFromLS(this.userData.uid, peCode);
//             }
//         }

//     }

//     isCurrentBookPplus(){
//         let currentEbookBundle = this.bundle.products.find(product => product['dls-product'].code == this.studentBook.meta.code);
//         let isMainBundlePPlus = false;
//         if( currentEbookBundle && currentEbookBundle.meta && (currentEbookBundle.meta['cup-pplus-component'] || currentEbookBundle.meta['pplus-component']) ) {
//             isMainBundlePPlus = true;
//         }
//         return isMainBundlePPlus;
//     }

// }

// enum LIST_VIEW {
//     UNITS = "UNITS",
//     LESSON = "LESSON"
// }

// enum PAGE_NAVIGATION {
//     PREV = "prev",
//     NEXT = "next"
// }

// enum PAGE_LAYOUT {
//     SINGLE = "single",
//     DOUBLE = "double"
// }

// enum PAGE_ORIENTATION {
//     FIT_TO_WIDTH = "FIT_TO_WIDTH",
//     FIT_TO_SCREEN = "FIT_TO_SCREEN"
// }

// enum  PAGE_CHANGE_ACTION {
//     LAYOUT_TOGGLE = "LAYOUT_TOGGLE"
// }
