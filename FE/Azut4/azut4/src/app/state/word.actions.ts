import { createAction, props } from '@ngrx/store';
import { Word } from '../words/models/word';
import { ActionList } from '../words/services/action-list';
 
export const addWord = createAction(
  ActionList.AddWord,
  props<{ payload: Word }>()
);

export const updateWord = createAction(
  ActionList.UpdateWord,
  props<{ payload: Word }>()
);
 
export const removeWord = createAction(
  ActionList.DeleteWord,
  props<{ payload: string }>()
);
 
export const retrievedWrdList = createAction(
  ActionList.RetrievedWords,
  props<{ payload: ReadonlyArray<Word> }>()
);