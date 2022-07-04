import { createReducer, on } from '@ngrx/store';
import { addWeat, removeWeat } from './weat.actions';
 
export const initialState: ReadonlyArray<string> = [];
 
export const collectionReducer = createReducer(
  initialState,
  on(removeWeat, (state, { weatId }) => state.filter((id) => id !== weatId)),
  on(addWeat, (state, { weatId }) => {
    if (state.indexOf(weatId) > -1) return state;
 
    return [...state, weatId];
  })
);