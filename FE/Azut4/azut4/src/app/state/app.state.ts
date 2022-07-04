import { Weat } from '../models/weat';

export interface AppState {
  books: ReadonlyArray<Weat>;
  collection: ReadonlyArray<string>;
}