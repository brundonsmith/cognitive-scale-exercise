import { Component, Output, EventEmitter, ViewChild } from '@angular/core';
import { CharactersService } from './characters.service';

@Component({
  selector: 'characters-input',
  templateUrl: 'app/characters-input.component.html',
  styleUrls: ['app/characters-input.component.css'],
  providers: [ CharactersService ]
})
export class CharactersInputComponent {

  private charactersString: string;
  private sending: boolean = false;

  @Output() charactersSubmitted = new EventEmitter();

  constructor(
    private charactersService: CharactersService
    ) {
  }

  onKeyPress(e) {
    if(e.code === 'Enter') {
      this.submitCharacters();
    }
  }

  submitCharacters() {
    var charactersString = this.charactersString;
    this.charactersService.submitCharacters(charactersString)
      .then(response => {
        this.charactersSubmitted.emit({ characters: charactersString });
      });

    this.sending = true;
    setTimeout(() => {
      this.charactersString = '';
      this.sending = false;
    }, 800)
  }
}
