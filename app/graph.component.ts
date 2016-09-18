import { Component, Output, EventEmitter } from '@angular/core';
import { CharactersService } from './characters.service';

@Component({
  selector: 'graph',
  templateUrl: 'app/graph.component.html',
  styleUrls: ['app/graph.component.css'],
  providers: [ CharactersService ]
})
export class GraphComponent {

  private characterInfo: { } = { };

  constructor(
    private charactersService: CharactersService
    ) {
  }

  ngOnInit() {
    this.refresh();
  }

  get characters() {
    var characters = [];
    for(var key in this.characterInfo) {
      characters.push(key);
    }
    return characters;
  }

  refresh() {
    this.charactersService.getCharacterCounts()
      .then(response => {
        var maxCount = 0;
        for(var char in response) {
          if(response[char] > maxCount) {
            maxCount = response[char];
          }
        }

        this.characterInfo = {};
        for(var char in response) {
          this.characterInfo[char] = {
            count: response[char],
            height: (100 * response[char] / maxCount) + '%',
            color: this.charactersService.getColorStringForCharacter(char)
          }
        }
      });
  }
}
