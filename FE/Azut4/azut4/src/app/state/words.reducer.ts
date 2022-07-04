import { createReducer, on } from '@ngrx/store';

import { retrievedWrdList, removeWord, addWord } from './word.actions';
import { Word } from '../models/word';

export const initialState: ReadonlyArray<Word> = [];

export const WordsReducer = createReducer(
  initialState,
  //on(addWord, (state, { word }) => state.()),
  on(removeWord, (state, { wordId }) => state.filter((wid) => wid.id !== wordId)),
  on(retrievedWrdList, (state, { words }) => words)
  ,
  on(addWord, (state, { word }) => {
    if (state.indexOf(word) > -1) return state;
 
    return [...state, word];
  })
);