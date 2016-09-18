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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var CharactersService = (function () {
    function CharactersService(http) {
        this.http = http;
        this.apiBaseUrl = '/api';
    }
    CharactersService.prototype.submitCharacters = function (characterString) {
        return this.http.post(this.apiBaseUrl + '/characters', { characters: characterString })
            .toPromise()
            .catch(function (error) {
            console.log(error.message || error);
            return Promise.reject(error.message || error);
        });
    };
    CharactersService.prototype.getCharacterCounts = function () {
        return this.http.get(this.apiBaseUrl + '/character-counts')
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(function (error) {
            console.log(error.message || error);
            return Promise.reject(error.message || error);
        });
    };
    CharactersService.prototype.getColorStringForCharacter = function (char) {
        var characterCode = char.charCodeAt(0);
        var characterValue = Math.seedrandom(characterCode);
        var colorString = 'rgb(' + Math.round(Math.random() * 255) + ', ' + Math.round(Math.random() * 255) + ', ' + Math.round(Math.random() * 255) + ')';
        while (colorString.length < 3) {
            colorString = '0' + colorString;
        }
        return colorString;
    };
    CharactersService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], CharactersService);
    return CharactersService;
}());
exports.CharactersService = CharactersService;
//# sourceMappingURL=characters.service.js.map