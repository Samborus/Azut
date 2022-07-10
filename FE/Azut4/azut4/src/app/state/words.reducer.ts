import { createReducer, on } from '@ngrx/store';

import { retrievedWrdList, removeWord, addWord, updateWord } from './word.actions';
import { Word } from '../words/models/word';

export const initialState: ReadonlyArray<Word> = [
    new Word("intrinsic", "wrodzony", "34d1f91fb2e514b8576fab1a75a89a6b"),
    new Word("parish", "parafia", "34d1f91fb2e514b8576fab1a75a89a6b")
];

export const WordsReducer = createReducer(
  initialState,
  on(removeWord, (state, { wordHash }) => state.filter((wid) => wid.hash !== wordHash)),
  on(retrievedWrdList, (state, { words }) => words),
  on(addWord, (state, { word }) => {
    if (state.indexOf(word) > -1) return state;
 
    return [...state, word];
  }),
  on(updateWord, (state, { word }) => {
    return [...state.filter((wid) => wid.hash !== word.hash), word];
  })
);
