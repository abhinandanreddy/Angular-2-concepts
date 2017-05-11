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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DirExample = (function () {
    function DirExample(el) {
        this.el = el;
        el.nativeElement.style.background = 'yellow';
    }
    DirExample.prototype.onmouseenter = function () {
        this.el.nativeElement.style.background = this.highlightColor || this.default || 'red';
    };
    DirExample.prototype.onmouseleave = function () {
        this.el.nativeElement.style.background = 'orange';
    };
    return DirExample;
}());
__decorate([
    core_1.Input('my-highlighter'),
    __metadata("design:type", String)
], DirExample.prototype, "highlightColor", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], DirExample.prototype, "default", void 0);
__decorate([
    core_1.HostListener('mouseenter'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DirExample.prototype, "onmouseenter", null);
__decorate([
    core_1.HostListener('mouseleave'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DirExample.prototype, "onmouseleave", null);
DirExample = __decorate([
    core_1.Directive({
        selector: '[my-highlighter]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], DirExample);
exports.DirExample = DirExample;
//# sourceMappingURL=DirExample.js.map