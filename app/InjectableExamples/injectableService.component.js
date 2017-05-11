/**
 * Created by abhi on 5/1/2017.
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var injectableService = (function () {
    function injectableService() {
        this.names = ["Abhi1"];
    }
    injectableService.prototype.get = function () {
        return this.names;
    };
    injectableService.prototype.add = function (val) {
        this.names.push(val);
    };
    return injectableService;
}());
exports.injectableService = injectableService;
//# sourceMappingURL=injectableService.component.js.map