import { createReducer, on } from '@ngrx/store';

import { retrievedWeatList, removeWeat } from './weat.actions';
import { Weat } from '../models/weat';

export const initialState: ReadonlyArray<Weat> = [];

export const weatsReducer = createReducer(
  initialState,
  on(removeWeat, (state, { weatId }) => state.filter((wid) => wid.id?.toString() !== weatId)),
  on(retrievedWeatList, (state, { weats }) => weats)
);