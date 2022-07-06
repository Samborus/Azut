import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { retrievedWrdList, addWord, removeWord, updateWord } from '../../state/word.actions';
import { Word } from '../models/word';
import { fromEvent, scan } from 'rxjs';

@Component({
  selector: 'app-word-editor',
  templateUrl: './word-editor.component.html',
  styleUrls: ['./word-editor.component.sass']
})
export class WordEditorComponent implements OnInit {
  @Output() add: EventEmitter<Word> = new EventEmitter<Word>();

  name: string = '';
  meaning: string = '';
  hash: string = '';

  constructor(private store: Store) { 
              }

  onAdd(): void {
    const word = new Word(this.name,this.meaning);
    this.hash = word.hash;
    this.store.dispatch(addWord({word}));
  }

  onUpdate() {
    console.log("onUpdate")
    const word = new Word(this.name, this.meaning, this.hash);
    this.store.dispatch(updateWord({ word }));
  }

  ngOnInit(): void {
    fromEvent(document, 'click')
    .pipe(scan((count) => count + 1, 0))
    .subscribe((count) => console.log(`Clicked ${count} times`));
  }

}
