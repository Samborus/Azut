import { Weat } from '../models/weat';
import { Word } from '../models/word';

export interface AppState {
  weats: ReadonlyArray<Weat>;
  collection: ReadonlyArray<string>;
  words: ReadonlyArray<Word>;
}