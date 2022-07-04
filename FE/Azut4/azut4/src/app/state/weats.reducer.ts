import { createReducer, on } from '@ngrx/store';

import { retrievedWeatList } from './weat.actions';
import { Weat } from '../models/weat';

export const initialState: ReadonlyArray<Weat> = [];

export const weatsReducer = createReducer(
  initialState,
  on(retrievedWeatList, (state, { weats }) => weats)
);