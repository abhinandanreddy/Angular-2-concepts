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
var chdComponent_1 = require("./chdComponent");
var ParComponent = (function () {
    function ParComponent() {
        this.books = [
            { name: 'Angular js', price: '30$', author: 'google' },
            { name: 'Angular 4', price: '40$', author: 'google' },
            { name: 'Java', price: '50$', author: 'james gosling' },
            { name: 'Spring', price: '60$', author: 'james bond' },
            { name: 'Javascript', price: '70$', author: 'mozilla' },
        ];
        this.mess = '';
        this.disp = false;
    }
    ParComponent.prototype.tog = function (book) {
        if (!book.hasOwnProperty('show')) {
            book.show = true;
        }
        else if (book.hasOwnProperty('show') && book.show === false) {
            book.show = true;
        }
        else {
            book.show = false;
        }
    };
    ParComponent.prototype.invokeFunPar = function (bookname) {
        this.mess = bookname;
    };
    ParComponent.prototype.callMethodOnChild = function () {
        this.chdComponent.accessedByParent();
        console.log(this.chdComponent1);
        console.log(this.chdComponent);
    };
    return ParComponent;
}());
__decorate([
    core_1.ViewChild(chdComponent_1.ChdComponent),
    __metadata("design:type", chdComponent_1.ChdComponent)
], ParComponent.prototype, "chdComponent", void 0);
__decorate([
    core_1.ViewChildren(chdComponent_1.ChdComponent),
    __metadata("design:type", chdComponent_1.ChdComponent)
], ParComponent.prototype, "chdComponent1", void 0);
ParComponent = __decorate([
    core_1.Component({
        selector: 'par',
        templateUrl: './app/InputOutput/par.html',
        styles: ['styles.css']
    })
], ParComponent);
exports.ParComponent = ParComponent;
//# sourceMappingURL=parComponent.js.map