import { createReducer, on } from '@ngrx/store';
import { Word } from '../models/word';
import { EntityState } from '../entities/entity-state'
import { retrievedWrdList, removeWord, addWord, updateWord } from './word.actions';
import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';

export const initialState: ReadonlyArray<Word> = [
    new Word("intrinsic", "wrodzony", "34d1f91fb2e514b8576fab1a75a89a6b"),
    new Word("parish", "parafia", "da1ec6c96235c82b5e413484a046ae9a")
];

export const WordsReducer = createReducer(
  initialState,
  on(removeWord, (state, { payload }) => state.filter((wid) => wid.hash !== payload)),
  on(retrievedWrdList, (state, { payload }) => payload),
  on(addWord, (state, { payload }) => {
    if (state.indexOf(payload) > -1) return state;
 
    return [...state, payload];
  }),
  on(updateWord, (state, { payload }) => {
    return [...state.filter((wid) => wid.hash !== payload.hash), payload];
  })
);

export interface State extends EntityState<Word> {
  // additional entity state properties
  selectedUserId: string | null;
};

export const adapter: EntityAdapter<Word> = createEntityAdapter<Word>();
