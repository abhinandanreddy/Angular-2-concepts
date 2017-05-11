"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by abhi on 4/17/2017.
 */
var core_1 = require("@angular/core");
var ChdComponent = (function () {
    function ChdComponent() {
        this.bookObj = null;
        this.invokeParent = new core_1.EventEmitter();
    }
    ChdComponent.prototype.invokeClick = function (val, evnt) {
        this.invokeParent.emit(val);
        evnt.stopPropagation();
    };
    ChdComponent.prototype.accessedByParent = function () {
        alert("hello");
    };
    return ChdComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ChdComponent.prototype, "bookObj", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], ChdComponent.prototype, "invokeParent", void 0);
ChdComponent = __decorate([
    core_1.Component({
        selector: 'chd',
        templateUrl: './app/InputOutput/child.html'
    })
], ChdComponent);
exports.ChdComponent = ChdComponent;
//# sourceMappingURL=chdComponent.js.map