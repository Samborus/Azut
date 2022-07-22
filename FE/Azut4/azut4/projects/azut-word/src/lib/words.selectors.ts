import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Word } from '../../../projects/azut-word/src/lib/models/word';
 
export const selectWords = createFeatureSelector<ReadonlyArray<Word>>('words');
 
export const selectCollectionState = createFeatureSelector<
  ReadonlyArray<string>
>('collection');
 
export const selectWordCollection = createSelector(
  selectWords,
  selectCollectionState,
  (words) => {
    return words;
  }
);