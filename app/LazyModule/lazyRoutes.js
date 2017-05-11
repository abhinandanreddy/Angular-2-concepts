"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by abhi on 5/8/2017.
 */
var router_1 = require("@angular/router");
var lazyComponent_1 = require("./lazyComponent");
var routes = [
    { path: '', component: lazyComponent_1.lazyComponent },
    { path: '/firstPage', component: lazyComponent_1.lazyComponent },
    { path: '/secondPage', component: lazyComponent_1.lazyComponent },
    { path: '/thirdPage', component: lazyComponent_1.lazyComponent }
];
exports.lazyRoutes = router_1.RouterModule.forChild(routes);
//# sourceMappingURL=lazyRoutes.js.map