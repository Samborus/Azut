import { Component, OnInit } from '@angular/core';
import { WeatherServiceService } from '../services/weather-service.service';
import { Observable, tap } from 'rxjs';
import { Weat } from '../models/weat';

@Component({
  selector: 'app-weather-watch',
  templateUrl: './weather-watch.component.html',
  styleUrls: ['./weather-watch.component.sass']
})
export class WeatherWatchComponent implements OnInit {

  constructor(private weatherServiceService: WeatherServiceService) { }

  weats: Weat[] = [];

  ngOnInit(): void {
    this.weatherServiceService.getWeather().pipe(
      tap(console.log)
    ).subscribe(ws => this.weats = ws);
  }

}
