/**
 * Created by abhi on 5/8/2017.
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
var router_1 = require("@angular/router");
var userDetails = (function () {
    function userDetails(activeRoute, router) {
        this.activeRoute = activeRoute;
        this.router = router;
    }
    /*Will not work if we visit the same page again need to use observable example as below*/
    /* ngOnInit(){
          this.userId= this.route.snapshot.params['id'];
     }*/
    userDetails.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRoute.params.subscribe(function (params) {
            _this.userId = parseInt(params['id']);
        });
    };
    userDetails.prototype.nextPage = function () {
        var nextId = this.userId + 1;
        this.router.navigate(['/users', nextId]);
    };
    userDetails.prototype.previousPage = function () {
        var nextId = this.userId - 1;
        this.router.navigate(['/users', nextId]);
    };
    userDetails.prototype.goToUsers = function () {
        var selectedUser = this.userId ? this.userId : null;
        this.router.navigate(['/users', { id: selectedUser }]);
    };
    return userDetails;
}());
userDetails = __decorate([
    core_1.Component({
        selector: 'userDaetails',
        templateUrl: './app/RouteParams/userDetails.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router])
], userDetails);
exports.userDetails = userDetails;
//# sourceMappingURL=userDetails.component.js.map