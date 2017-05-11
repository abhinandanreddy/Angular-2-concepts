/**
 * Created by abhi on 5/1/2017.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var mainComp = (function () {
    function mainComp() {
        this.name1 = "";
        this.name2 = "";
    }
    mainComp.prototype.ngOnInit = function () {
        this.name1 = "abhi";
        this.name2 = "sai";
    };
    return mainComp;
}());
mainComp = __decorate([
    core_1.Component({
        selector: 'hooks-main',
        template: "<div>\n                     <input type=\"text\" [(ngModel)]=\"name1\"/>\n                     <input type=\"text\" [(ngModel)]=\"name2\"/>\n                  <hr/>\n                    <hook-child [name1]=\"name1\" [name2]=\"name2\"></hook-child>\n            \n             </div>"
    })
], mainComp);
exports.mainComp = mainComp;
//# sourceMappingURL=mainComp.js.map