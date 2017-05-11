/**
 * Created by abhi on 4/15/2017.
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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var ProgressBar = (function () {
    function ProgressBar(http) {
        this.http = http;
        this.myStyle = { 'width': 5, 'background-color': 'green', 'height': '16px' };
        this.blue = 'blue';
        this.mdl2way = "abhi 2 way";
        this.mdl1way = "abhi 1 way";
        this.currWidth = this.myStyle.width;
        this.showTable = false;
        this.jsonResponse = [];
        this.todayDate = new Date(1990, 3, 24);
    }
    ProgressBar.prototype.ng2ClickTest = function () {
        alert("Ng2 Click Test Succesfull");
    };
    ProgressBar.prototype.increment = function () {
        this.currWidth++;
        this.myStyle.width = this.currWidth + '%';
    };
    ProgressBar.prototype.decrement = function () {
        if (this.currWidth > 0) {
            this.currWidth--;
            this.myStyle.width = this.currWidth + '%';
        }
    };
    ProgressBar.prototype.respCall = function () {
        var _this = this;
        alert("Calling Restful Service For Json Response");
        this.http.get('https://jsonplaceholder.typicode.com/posts').map(function (res) {
            return res.json();
        }).subscribe(function (users) {
            _this.jsonResponse = users;
            _this.showTable = true;
        });
    };
    return ProgressBar;
}());
ProgressBar = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './app/AllComponents/ProgressBar.html',
        styles: ['styles.css']
    }),
    __metadata("design:paramtypes", [http_1.Http])
], ProgressBar);
exports.ProgressBar = ProgressBar;
//# sourceMappingURL=app.ProgressBar.js.map