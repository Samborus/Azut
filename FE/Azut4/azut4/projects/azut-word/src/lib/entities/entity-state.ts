import { Word } from "../models/word";

export interface EntityState<V> {
    ids: string[] | number[];
    entities: { [id: string | number]: V };
  }