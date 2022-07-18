import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ClarityModule } from "@clr/angular";
import { WordsReducer } from './state/words.reducer';
import { StoreModule } from '@ngrx/store';

import { WordsModule } from './words/words.module';
import { LocalService } from './services/local.service';
import { WordContainerComponent } from './word-container/word-container.component';

@NgModule({
  declarations: [
    AppComponent,
    WordContainerComponent,        
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
  providers: [LocalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
