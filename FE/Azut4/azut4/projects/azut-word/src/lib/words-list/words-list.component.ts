import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Word } from '../models/word';
import { of, tap } from 'rxjs';

@Component({
  selector: 'app-words-list',
  templateUrl: './words-list.component.html',
  styleUrls: ['./words-list.component.sass']
})
export class WordsListComponent implements OnInit {
  @Input() words: ReadonlyArray<Word> | null | undefined = [];
  @Output() remove = new EventEmitter<string>();
  @Output() add = new EventEmitter<string>();
  @Output() select = new EventEmitter<Word>();
  selectedWord: Word = new Word('', '');

  constructor() { }

  ngOnInit(): void {
    // of(this.selectedWord).pipe(tap(console.log)).subscribe();
  }

  onAdd(): void {
    this.add.emit('99');
  }

  onDelete(wordId: any): void {
    this.remove.emit(wordId);
  }

  onEdit(wordHash: Word) {
    console.log('sel');
    this.select.emit(wordHash);
  }
  trackById = (index: any, unit: Word) => unit.hash;
}
