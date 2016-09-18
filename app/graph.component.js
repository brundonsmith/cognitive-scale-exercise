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
var characters_service_1 = require('./characters.service');
var GraphComponent = (function () {
    function GraphComponent(charactersService) {
        this.charactersService = charactersService;
        this.characterInfo = {};
    }
    GraphComponent.prototype.ngOnInit = function () {
        this.refresh();
    };
    Object.defineProperty(GraphComponent.prototype, "characters", {
        get: function () {
            var characters = [];
            for (var key in this.characterInfo) {
                characters.push(key);
            }
            return characters;
        },
        enumerable: true,
        configurable: true
    });
    GraphComponent.prototype.refresh = function () {
        var _this = this;
        this.charactersService.getCharacterCounts()
            .then(function (response) {
            var maxCount = 0;
            for (var char in response) {
                if (response[char] > maxCount) {
                    maxCount = response[char];
                }
            }
            _this.characterInfo = {};
            for (var char in response) {
                _this.characterInfo[char] = {
                    count: response[char],
                    height: (100 * response[char] / maxCount) + '%',
                    color: _this.charactersService.getColorStringForCharacter(char)
                };
            }
        });
    };
    GraphComponent = __decorate([
        core_1.Component({
            selector: 'graph',
            templateUrl: 'app/graph.component.html',
            styleUrls: ['app/graph.component.css'],
            providers: [characters_service_1.CharactersService]
        }), 
        __metadata('design:paramtypes', [characters_service_1.CharactersService])
    ], GraphComponent);
    return GraphComponent;
}());
exports.GraphComponent = GraphComponent;
//# sourceMappingURL=graph.component.js.map