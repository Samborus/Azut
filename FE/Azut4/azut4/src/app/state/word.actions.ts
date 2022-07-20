import { createAction, props } from '@ngrx/store';
import { Word } from '../words/models/word';
 
export const addWord = createAction(
  '[word List] Add word',
  props<{ payload: Word }>()
);

export const updateWord = createAction(
  '[word List] Update word',
  props<{ payload: Word }>()
);
 
export const removeWord = createAction(
  '[word Collection] Remove word',
  props<{ payload: string }>()
);
 
export const retrievedWrdList = createAction(
  '[word List/API] Retrieve words Success',
  props<{ payload: ReadonlyArray<Word> }>()
);