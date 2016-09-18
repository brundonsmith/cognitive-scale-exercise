import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { CharactersInputComponent } from './characters-input.component';
import { GraphComponent } from './graph.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule ],
  declarations: [ AppComponent, CharactersInputComponent, GraphComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
