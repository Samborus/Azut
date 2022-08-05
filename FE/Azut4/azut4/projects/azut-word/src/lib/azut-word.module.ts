import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';
import { DbService } from './services/db.service';
import { WordEditorComponent } from './word-editor/word-editor.component';
import { WordsCardsComponent } from './words-cards/words-cards.component';
import { WordsListComponent } from './words-list/words-list.component';

@NgModule({
  declarations: [
    WordEditorComponent,
    WordsListComponent,
    WordsCardsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ClarityModule
  ],
  exports: [
    WordEditorComponent,
    WordsListComponent,
    WordsCardsComponent
  ],
  providers: [
    DbService
  ]
})
export class AzutWordModule { }
