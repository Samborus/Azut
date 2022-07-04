import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectWeatCollection, selectWeats } from './state/weats.selectors';
import { WeatsService } from './services/weats.service';
import { Observable, tap, map } from 'rxjs';
import { retrievedWeatList, removeWeat, addWeat } from './state/weat.actions';
import { retrievedWrdList, addWord, removeWord } from './state/word.actions';
import { Weat } from './models/weat';
import { Word } from './models/word';
import { selectWords } from './state/words.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'azut4';

  weats$ = this.store.select(selectWeats);
  bookCollection$ = this.store.select(selectWeatCollection);
  words$ = this.store.select(selectWords);

  onAdd(weatId: string) {
    console.log(weatId);
    const word:Word = new Word('a', 'x') ;
    this.store.dispatch(addWord({word}));
  }
 
  onRemove(weatId: string) {
    console.log(weatId);
    this.store.dispatch(removeWeat({ weatId }));
  }
 
  constructor(
    private weatsService: WeatsService,
    private store: Store
  ) {}
 
  ngOnInit() {
    this.weatsService
      .getWeats()
      .pipe()
      .subscribe((weats) => {
        this.store.dispatch(retrievedWeatList({ weats }))
      });
  }
}
