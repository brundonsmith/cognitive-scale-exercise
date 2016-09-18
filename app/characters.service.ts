import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

// a hack to work around type errors on Math, since the seedrandom library
// extends it with a new method
declare var Math;

@Injectable()
export class CharactersService {

  private apiBaseUrl: string = '/api';

  constructor(private http: Http) { }

  submitCharacters(characterString) {
    return this.http.post(this.apiBaseUrl + '/characters', { characters: characterString } )
      .toPromise()
      .catch(error => {
        console.log(error.message || error);
        return Promise.reject(error.message || error);
      });
  }

  getCharacterCounts() {
    return this.http.get(this.apiBaseUrl + '/character-counts')
      .toPromise()
      .then(response => response.json() as {})
      .catch(error => {
        console.log(error.message || error);
        return Promise.reject(error.message || error);
      });
  }

  getColorStringForCharacter(char) {
    var characterCode = char.charCodeAt(0);

    var characterValue = Math.seedrandom(characterCode);
    var colorString = 'rgb(' + Math.round(Math.random() * 255) + ', ' + Math.round(Math.random() * 255) + ', ' + Math.round(Math.random() * 255) + ')';
    while(colorString.length < 3) {
      colorString = '0' + colorString;
    }
    return colorString;
  }
}
