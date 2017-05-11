"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by abhi on 4/16/2017.
 */
var core_1 = require("@angular/core");
var filterComponent = (function () {
    function filterComponent() {
        this.searchItem = '';
        this.objs = [
            { name: 'Abhi', location: 'sunnyvale' },
            { name: 'Sai', location: 'sunnyvale' },
            { name: 'Venkat', location: 'sunnyvale' },
            { name: 'Chenna', location: 'sunnyvale' },
            { name: 'Malla', location: 'sunnyvale' }
        ];
    }
    return filterComponent;
}());
filterComponent = __decorate([
    core_1.Component({
        selector: 'customFilter',
        templateUrl: './app/CustomPipes/filterSearch.html',
        styles: ['styles.css']
    })
], filterComponent);
exports.filterComponent = filterComponent;
//# sourceMappingURL=filterComponent.js.map