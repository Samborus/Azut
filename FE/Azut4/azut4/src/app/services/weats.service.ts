import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
 
import { of, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Weat } from '../models/weat';
 
@Injectable({ providedIn: 'root' })
export class WeatsService {
  constructor(private http: HttpClient) {}
 
  getWeats(): Observable<Array<Weat>> {
    return this.http
      .get<Weat[]>('https://localhost:7127/api/WeatherForecast')
      .pipe(
        //map(w => w.items || []),
        tap(console.log)
        );
  }
}