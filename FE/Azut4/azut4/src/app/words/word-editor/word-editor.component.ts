import { Component, OnInit, EventEmitter, Output, Input, ViewChild, ElementRef } from '@angular/core';
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
  @Input() edit: Word = new Word('','');

  name: string = '';
  meaning: string = '';
  hash: string = '';

  constructor(private store: Store) { 
              }

  onAdd(): void {
    const payload = new Word(this.name,this.meaning);
    this.hash = payload.hash;
    this.store.dispatch(addWord({payload}));
  }

  onUpdate() {
    console.log("onUpdate")
    const payload = new Word(this.name, this.meaning, this.hash);
    this.store.dispatch(updateWord({ payload }));
  }

  newWord() {
    this.hash = this.meaning = this.name = '';
  }

  selectedWord(word: Word)
  {
    this.hash = word.hash;
    this.name = word.name;
    this.meaning = word.meaning;
  }

  ngOnInit(): void {
  }

}
