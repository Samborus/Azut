import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of, tap } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { Word } from 'src/app/words/models/word';
import { IAction } from '../../services/iaction';

@Injectable()
export class WordEffects {
 
  loadMovies$ = createEffect(() => 
    this.actions$.pipe(      
      ofType('[word List] Add word'),
      tap(x => {
        const c = (x as IAction)
        console.log('effect: ' + (c.payload as Word).hash + ' .\n');      
      }),
      map(movies => ({ type: '[Movies API] Movies Loaded Success', payload: movies })),
      mergeMap(() => of({})
        .pipe(        
          map(movies => ({ type: '[Movies API] Movies Loaded Success', payload: movies })),
          catchError(() => of({ type: '[Movies API] Movies Loaded Error' }))
        )
      )
    )
  );
 
  constructor(
    private actions$: Actions
  ) {}
}