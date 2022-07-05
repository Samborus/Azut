import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { retrievedWrdList, addWord, removeWord } from '../state/word.actions';
import { Word } from '../models/word';

@Component({
  selector: 'app-word-editor',
  templateUrl: './word-editor.component.html',
  styleUrls: ['./word-editor.component.sass']
})
export class WordEditorComponent implements OnInit {
  @Output() add: EventEmitter<Word> = new EventEmitter<Word>();

  name: string = '';
  meaning: string = '';

  constructor(private store: Store) { 
              }

  onAdd(): void {
    const word = new Word(this.name,this.meaning);
    this.store.dispatch(addWord({word}));
  }

  ngOnInit(): void {
  }

}
