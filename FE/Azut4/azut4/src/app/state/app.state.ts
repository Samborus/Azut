import { Weat } from '../models/weat';
import { Word } from '../words/models/word';

export interface AppState {
  words: ReadonlyArray<Word>;
  UserId: string;
}