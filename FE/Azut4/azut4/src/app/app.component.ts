import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectWeatCollection, selectWeats } from './state/weats.selectors';
import { WeatsService } from './services/weats.service';
import { Observable, tap, map } from 'rxjs';
import { retrievedWeatList } from './state/weat.actions';
import { Weat } from './models/weat';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'azut4';

  weats$ = this.store.select(selectWeats);
  bookCollection$ = this.store.select(selectWeatCollection);
 
  // onAdd(bookId: string) {
  //   this.store.dispatch(addBook({ bookId }));
  // }
 
  // onRemove(bookId: string) {
  //   this.store.dispatch(removeBook({ bookId }));
  // }
 
  constructor(
    private weatsService: WeatsService,
    private store: Store
  ) {}
 
  ngOnInit() {
    this.weatsService
      .getWeats()
      .pipe(
        tap(w => {
          console.log("tap: " + w.length);
        }),
      )
      .subscribe((weats) => {
        this.store.dispatch(retrievedWeatList({ weats }))
        console.log(weats);
      });
  }
}
