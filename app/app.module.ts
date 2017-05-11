import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import {HttpModule} from '@angular/http';
import { AppComponent }  from './FormValidation/app.component';
import {ProgressBar}   from './AllComponents/app.ProgressBar';
import {RouterModule, Router, Routes} from '@angular/router';
import {homeComponent}  from './HomePage/home.component';
import {APP_BASE_HREF} from '@angular/common'
import {filterComponent} from './CustomPipes/filterComponent';
import {SearchFilter} from './CustomPipes/CustomComponent';
import {ChdComponent} from './InputOutput/chdComponent';
import {ParComponent} from './InputOutput/parComponent';
import {DirectiveComponent} from './Directives/DirectiveComponent'
import {DirExample} from './Directives/DirExample'
import {mainComp} from './LifecycleHooks/mainComp'
import {hooksChild} from './LifecycleHooks/hooksChild'
import {acceptInjectable} from './InjectableExamples/acceptInjectable.component'
import {userDetails} from'./RouteParams/userDetails.component'
import {usersComponent} from'./RouteParams/users.component'
import {OtherInjectedComp} from './InjectableExamples/OtherInjectedComp'
import {injectableService} from './InjectableExamples/injectableService.component'


const Routes1:Routes=[
  {path:'multipleConcepts', component:ProgressBar},
  {path:'appBasic',component: AppComponent},
  {path:'objSearch',component: filterComponent},
  {path:'dataToChld',component: ParComponent},
  {path:'Directive',component: DirectiveComponent},
  {path:'LifeCycle',component: mainComp},
  {path:'injects',component:acceptInjectable },
  {path:'users',component:usersComponent },
  {path:'users/:id',component:userDetails },
  {path:'otherInjected',component: OtherInjectedComp},
  {path:'lazyLoad',loadChildren:'./app/LazyModule/lazyRootModule#lazyRootModule'},
  { path: '',   redirectTo: '/multipleConcepts', pathMatch: 'full' },
  { path: '**', component: ProgressBar }
];

@NgModule({
  imports: [ BrowserModule, FormsModule, HttpModule,RouterModule.forRoot(Routes1) ],
  declarations: [ SearchFilter,filterComponent, ProgressBar, AppComponent,homeComponent,ChdComponent,ParComponent,
    DirectiveComponent,DirExample,mainComp,hooksChild,acceptInjectable,userDetails,usersComponent,OtherInjectedComp],
  providers:[{provide: APP_BASE_HREF, useValue : '/' },injectableService],
  bootstrap:    [homeComponent]
})

export class AppModule {

}
