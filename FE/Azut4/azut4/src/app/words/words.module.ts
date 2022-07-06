import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WordEditorComponent } from './word-editor/word-editor.component';
import { FormsModule } from '@angular/forms';
import { WordsListComponent } from './words-list/words-list.component';
import { ClarityModule } from "@clr/angular";
import { WordsCardsComponent } from './words-cards/words-cards.component';

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
  ]
})
export class WordsModule { }
