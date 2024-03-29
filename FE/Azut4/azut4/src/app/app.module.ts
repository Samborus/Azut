import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ClarityModule } from "@clr/angular";
import { StoreModule } from '@ngrx/store';
import { LocalService } from './services/local.service';
import { WordContainerComponent } from './word-container/word-container.component';
import { EffectsModule } from '@ngrx/effects';
import { AzutWordModule, WordsReducer, WordEffects } from 'projects/azut-word/src/public-api';
import { Dir1Directive } from './dir1.directive';
import { PlayComponent } from './play/play.component';
import { InfoComponent } from './info/info.component';

@NgModule({
  declarations: [
    AppComponent,
    WordContainerComponent,      
    Dir1Directive, 
    PlayComponent, InfoComponent  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    StoreModule.forRoot({ words: WordsReducer }),
    HttpClientModule,
    ClarityModule,
    EffectsModule.forRoot([WordEffects]),
    AzutWordModule
  ],
  providers: [LocalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
