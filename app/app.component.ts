import { Component, ViewChild } from '@angular/core';
import { GraphComponent } from './graph.component';
import { CharactersService } from './characters.service';

@Component({
  selector: 'app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  providers: [ CharactersService ]
})
export class AppComponent {

  private charactersSubmittedByMe: Array<{}> = [];

  @ViewChild(GraphComponent)
  private graphComponent: GraphComponent;


  constructor(
    private charactersService: CharactersService
    ) {
  }

  refreshCounts(e) {
    for(var i = 0; i < e.characters.length; i++) {
      this.charactersSubmittedByMe.push({
        character: e.characters[i],
        color: this.charactersService.getColorStringForCharacter(e.characters[i])
      });
    }
    this.graphComponent.refresh();
  }

}
