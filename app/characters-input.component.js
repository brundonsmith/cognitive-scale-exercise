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
var CharactersInputComponent = (function () {
    function CharactersInputComponent(charactersService) {
        this.charactersService = charactersService;
        this.sending = false;
        this.charactersSubmitted = new core_1.EventEmitter();
    }
    CharactersInputComponent.prototype.onKeyPress = function (e) {
        if (e.code === 'Enter') {
            this.submitCharacters();
        }
    };
    CharactersInputComponent.prototype.submitCharacters = function () {
        var _this = this;
        var charactersString = this.charactersString;
        this.charactersService.submitCharacters(charactersString)
            .then(function (response) {
            _this.charactersSubmitted.emit({ characters: charactersString });
        });
        this.sending = true;
        setTimeout(function () {
            _this.charactersString = '';
            _this.sending = false;
        }, 800);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], CharactersInputComponent.prototype, "charactersSubmitted", void 0);
    CharactersInputComponent = __decorate([
        core_1.Component({
            selector: 'characters-input',
            templateUrl: 'app/characters-input.component.html',
            styleUrls: ['app/characters-input.component.css'],
            providers: [characters_service_1.CharactersService]
        }), 
        __metadata('design:paramtypes', [characters_service_1.CharactersService])
    ], CharactersInputComponent);
    return CharactersInputComponent;
}());
exports.CharactersInputComponent = CharactersInputComponent;
//# sourceMappingURL=characters-input.component.js.map