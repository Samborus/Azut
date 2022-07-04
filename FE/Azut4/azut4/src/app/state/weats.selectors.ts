import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Weat } from '../models/weat';
 
export const selectWeats = createFeatureSelector<ReadonlyArray<Weat>>('weats');
 
export const selectCollectionState = createFeatureSelector<
  ReadonlyArray<string>
>('collection');
 
export const selectWeatCollection = createSelector(
  selectWeats,
  selectCollectionState,
  (weats) => {
    return weats;
  }
);