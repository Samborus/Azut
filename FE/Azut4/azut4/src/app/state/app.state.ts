import { Weat } from '../models/weat';
import { Word } from '../models/word';

export interface AppState {
  words: ReadonlyArray<Word>;
  UserId: string;
}