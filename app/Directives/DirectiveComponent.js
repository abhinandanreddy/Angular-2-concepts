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
var DirectiveComponent = (function () {
    function DirectiveComponent() {
    }
    return DirectiveComponent;
}());
DirectiveComponent = __decorate([
    core_1.Component({
        selector: 'dir-com',
        template: "<h1 my-highlighter>Directive made the background color yellow</h1>\n      <hr/>\n          <h3>Highlight By Selection</h3>\n          <div>\n              <input type=\"radio\" name=\"green\" (click)=\"color='orange'\">orange\n              <input type=\"radio\" name=\"green\" (click)=\"color='green'\">green\n              <input type=\"radio\" name=\"green\" (click)=\"color='cyan'\">cyan\n          </div>\n          <p [my-highlighter]=\"color\">highligthed text</p>\n          <p [my-highlighter]=\"color\" default=\"red\">highligthed text</p>\n"
    })
], DirectiveComponent);
exports.DirectiveComponent = DirectiveComponent;
//# sourceMappingURL=DirectiveComponent.js.map