import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WordEditorComponent } from './word-editor/word-editor.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    WordEditorComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    WordEditorComponent
  ]
})
export class WordsModule { }
