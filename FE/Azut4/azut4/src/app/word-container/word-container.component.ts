import { Component, ViewChild, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { removeWord } from '../state/word.actions';
import { Word } from '../words/models/word';
import { selectWords } from '../state/words.selectors';
import { WordEditorComponent } from '../words/word-editor/word-editor.component';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-word-container',
  templateUrl: './word-container.component.html',
  styleUrls: ['./word-container.component.sass']
})
export class WordContainerComponent implements OnInit {
  @ViewChild(WordEditorComponent) editor!: WordEditorComponent;
  title = 'Azut';
  words$ = this.store.select(selectWords);
 
  onRemove(payload: string) {
    console.log(payload);
    this.store.dispatch(removeWord({ payload }));
  }

  selectedWord(word: Word): void {
    console.log(word);
    this.editor.selectedWord(word)
  }

  constructor(
    private store: Store
  ) {}

  ngOnInit(): void {
    console.log('[wc] init');
    // this.words$.subscribe(pipe(console.log));
  }

}
