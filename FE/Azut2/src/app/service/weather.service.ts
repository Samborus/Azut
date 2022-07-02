import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { W } from '../models/w';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private http: HttpClient) { }

  /** GET heroes from the server */
getWeather(): Observable<W[]> {
  return this.http.get<W[]>('https://localhost:7127/api/WeatherForecast')
}
  heroesUrl<T>(heroesUrl: any): Observable<W[]> {
    throw new Error('Method not implemented.');
  }
}
