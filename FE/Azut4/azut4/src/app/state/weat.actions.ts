import { createAction, props } from '@ngrx/store';
import { Weat } from '../models/weat';
 
export const addWeat = createAction(
  '[Weat List] Add Weat',
  props<{ weatId: string }>()
);
 
export const removeWeat = createAction(
  '[Weat Collection] Remove Weat',
  props<{ weatId: string }>()
);
 
export const retrievedWeatList = createAction(
  '[Weat List/API] Retrieve Weats Success',
  props<{ weats: ReadonlyArray<Weat> }>()
);