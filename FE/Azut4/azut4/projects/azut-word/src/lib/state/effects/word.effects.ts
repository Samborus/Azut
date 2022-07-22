import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of, tap } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { Word } from 'projects/azut-word/src/lib/models/word';
import { ActionList } from 'projects/azut-word/src/lib/services/action-list';
import { DbService } from 'projects/azut-word/src/lib/services/db.service';
import { IAction } from '../../../../../../src/app/services/iaction';

@Injectable()
export class WordEffects {
 
  loadMovies$ = createEffect(() => 
    this.actions$.pipe(      
      ofType(ActionList.AddWord),
      tap(x => {
        const c = (x as IAction)
        console.log('effect: ' + (c.payload as Word).hash + ' .\n');      
      }),
      map(movies => ({ type: '[Movies API] Movies Loaded Success', payload: movies })),
      mergeMap(() => this.dbService.getTest()
        .pipe(        
          map(movies => ({ type: '[Movies API] Movies Loaded Success', payload: movies })),
          catchError(() => of({ type: '[Movies API] Movies Loaded Error' }))
        )
      )
    )
  );
 
  constructor(
    private actions$: Actions,
    private dbService: DbService
  ) {}
}