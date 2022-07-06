import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Word } from '../models/word';

@Component({
  selector: 'app-words-list',
  templateUrl: './words-list.component.html',
  styleUrls: ['./words-list.component.sass']
})
export class WordsListComponent implements OnInit {
  @Input() words: ReadonlyArray<Word> | null | undefined = [];
  @Output() remove = new EventEmitter<string>();
  @Output() add = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  onAdd(): void {
    this.add.emit('99');
  }

  onDelete(wordId: any): void {
    this.remove.emit(wordId);
  }

}
