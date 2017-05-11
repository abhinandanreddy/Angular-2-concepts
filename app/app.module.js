"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./FormValidation/app.component");
var app_ProgressBar_1 = require("./AllComponents/app.ProgressBar");
var router_1 = require("@angular/router");
var home_component_1 = require("./HomePage/home.component");
var common_1 = require("@angular/common");
var filterComponent_1 = require("./CustomPipes/filterComponent");
var CustomComponent_1 = require("./CustomPipes/CustomComponent");
var chdComponent_1 = require("./InputOutput/chdComponent");
var parComponent_1 = require("./InputOutput/parComponent");
var DirectiveComponent_1 = require("./Directives/DirectiveComponent");
var DirExample_1 = require("./Directives/DirExample");
var mainComp_1 = require("./LifecycleHooks/mainComp");
var hooksChild_1 = require("./LifecycleHooks/hooksChild");
var acceptInjectable_component_1 = require("./InjectableExamples/acceptInjectable.component");
var userDetails_component_1 = require("./RouteParams/userDetails.component");
var users_component_1 = require("./RouteParams/users.component");
var OtherInjectedComp_1 = require("./InjectableExamples/OtherInjectedComp");
var injectableService_component_1 = require("./InjectableExamples/injectableService.component");
var Routes1 = [
    { path: 'multipleConcepts', component: app_ProgressBar_1.ProgressBar },
    { path: 'appBasic', component: app_component_1.AppComponent },
    { path: 'objSearch', component: filterComponent_1.filterComponent },
    { path: 'dataToChld', component: parComponent_1.ParComponent },
    { path: 'Directive', component: DirectiveComponent_1.DirectiveComponent },
    { path: 'LifeCycle', component: mainComp_1.mainComp },
    { path: 'injects', component: acceptInjectable_component_1.acceptInjectable },
    { path: 'users', component: users_component_1.usersComponent },
    { path: 'users/:id', component: userDetails_component_1.userDetails },
    { path: 'otherInjected', component: OtherInjectedComp_1.OtherInjectedComp },
    { path: 'lazyLoad', loadChildren: './app/LazyModule/lazyRootModule#lazyRootModule' },
    { path: '', redirectTo: '/multipleConcepts', pathMatch: 'full' },
    { path: '**', component: app_ProgressBar_1.ProgressBar }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, router_1.RouterModule.forRoot(Routes1)],
        declarations: [CustomComponent_1.SearchFilter, filterComponent_1.filterComponent, app_ProgressBar_1.ProgressBar, app_component_1.AppComponent, home_component_1.homeComponent, chdComponent_1.ChdComponent, parComponent_1.ParComponent,
            DirectiveComponent_1.DirectiveComponent, DirExample_1.DirExample, mainComp_1.mainComp, hooksChild_1.hooksChild, acceptInjectable_component_1.acceptInjectable, userDetails_component_1.userDetails, users_component_1.usersComponent, OtherInjectedComp_1.OtherInjectedComp],
        providers: [{ provide: common_1.APP_BASE_HREF, useValue: '/' }, injectableService_component_1.injectableService],
        bootstrap: [home_component_1.homeComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map