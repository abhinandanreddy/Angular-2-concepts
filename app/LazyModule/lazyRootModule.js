"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by abhi on 5/8/2017.
 */
var core_1 = require("@angular/core");
var lazyComponent_1 = require("./lazyComponent");
var lazyRoutes_1 = require("./lazyRoutes");
var lazyRootModule = (function () {
    function lazyRootModule() {
    }
    return lazyRootModule;
}());
lazyRootModule = __decorate([
    core_1.NgModule({
        imports: [lazyRoutes_1.lazyRoutes],
        declarations: [lazyComponent_1.lazyComponent],
    })
], lazyRootModule);
exports.lazyRootModule = lazyRootModule;
//# sourceMappingURL=lazyRootModule.js.map