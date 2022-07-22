import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Word } from '../models/word';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(private http: HttpClient) { }

  getWords(): Observable<Array<Word>> {
    return this.http
      .get<Word[]>('https://localhost:7127/api/Words')
      .pipe();
  }

  getTest(): Observable<number> {
    console.log('Db.getTest() \n');
    return of(1);
  }
}
