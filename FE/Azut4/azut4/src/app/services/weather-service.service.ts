import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Weat } from '../models/weat';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  constructor(private http: HttpClient) { }

   /** GET heroes from the server */
  getWeather(): Observable<Weat[]> {
    return this.http.get<Weat[]>('https://localhost:7127/api/WeatherForecast')
  }
    
  heroesUrl<T>(heroesUrl: any): Observable<Weat[]> {
      throw new Error('Method not implemented.');
    }
}
