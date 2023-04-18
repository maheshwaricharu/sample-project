import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { StudentBook } from './components/books/student-book/student-book.component';


const routes: Routes = [
  {
      path: '', component: AppComponent, children: [
          { path: 'view', component: StudentBook }
          //{ path: ':spaceId/class/:class/product/:productCode/studentbook/:studentBookCode/view', component: StudentBook, resolve: { bookData: StudentBookResolver }}
          
          // { path: ':spaceId/product/:productCode/view', component: ActivityView, resolve: { activityViewResolverData: ActivityViewResolverService }, children: [
          //     { path: 'item/:itemId', component: ActivityLaunch }
          // ]}
      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
