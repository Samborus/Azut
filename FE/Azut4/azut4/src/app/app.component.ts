import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { WeatsService } from './services/weats.service';
import { Observable, tap, map } from 'rxjs';
import { retrievedWrdList, addWord, removeWord } from './state/word.actions';
import { Word } from './words/models/word';
import { selectWords } from './state/words.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'azut4';
  words$ = this.store.select(selectWords);
 
  onRemove(wordHash: string) {
    console.log(wordHash);
    this.store.dispatch(removeWord({ wordHash }));
  }
 
  constructor(
    private store: Store
  ) {}
 
  ngOnInit() {
    
  }
}
