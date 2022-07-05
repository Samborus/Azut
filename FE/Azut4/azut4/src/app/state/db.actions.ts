import { createAction, props } from '@ngrx/store';
import { Word } from '../models/word';
 
export const pushWord = createAction(
  '[DB] Push word',
  props<{ word: Word }>()
);
 
export const deleteWord = createAction(
  '[DB] delete word',
  props<{ wordHash: string }>()
);
 
export const getWordList = createAction(
  '[DB] Retrieve words Success',
  props<{ words: ReadonlyArray<Word> }>()
);