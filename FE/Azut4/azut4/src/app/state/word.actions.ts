import { createAction, props } from '@ngrx/store';
import { Word } from '../models/word';
 
export const addWord = createAction(
  '[word List] Add word',
  props<{ word: Word }>()
);
 
export const removeWord = createAction(
  '[word Collection] Remove word',
  props<{ wordId: number }>()
);
 
export const retrievedWrdList = createAction(
  '[word List/API] Retrieve words Success',
  props<{ words: ReadonlyArray<Word> }>()
);