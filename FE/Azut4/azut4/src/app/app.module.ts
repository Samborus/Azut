import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ClarityModule } from "@clr/angular";
import { WordsReducer } from './state/words.reducer';
import { StoreModule } from '@ngrx/store';

import { WordsListComponent } from './words-list/words-list.component';
import { WordsCardsComponent } from './words-cards/words-cards.component';
import { WordsModule } from './words/words.module';

@NgModule({
  declarations: [
    AppComponent,
    WordsListComponent,
    WordsCardsComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    StoreModule.forRoot({ words: WordsReducer }),
    HttpClientModule,
    ClarityModule,
    WordsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
