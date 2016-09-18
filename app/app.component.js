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
var core_1 = require('@angular/core');
var graph_component_1 = require('./graph.component');
var characters_service_1 = require('./characters.service');
var AppComponent = (function () {
    function AppComponent(charactersService) {
        this.charactersService = charactersService;
        this.charactersSubmittedByMe = [];
    }
    AppComponent.prototype.refreshCounts = function (e) {
        for (var i = 0; i < e.characters.length; i++) {
            this.charactersSubmittedByMe.push({
                character: e.characters[i],
                color: this.charactersService.getColorStringForCharacter(e.characters[i])
            });
        }
        this.graphComponent.refresh();
    };
    __decorate([
        core_1.ViewChild(graph_component_1.GraphComponent), 
        __metadata('design:type', graph_component_1.GraphComponent)
    ], AppComponent.prototype, "graphComponent", void 0);
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            templateUrl: 'app/app.component.html',
            styleUrls: ['app/app.component.css'],
            providers: [characters_service_1.CharactersService]
        }), 
        __metadata('design:paramtypes', [characters_service_1.CharactersService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map