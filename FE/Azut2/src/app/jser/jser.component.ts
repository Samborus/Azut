import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../service/weather.service';
import { Observable  } from 'rxjs';

@Component({
  selector: 'app-jser',
  templateUrl: './jser.component.html',
  styleUrls: ['./jser.component.scss']
})
export class JserComponent implements OnInit {

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.scripting();
    this.weatherService.getWeather().pipe(
      //tap(console.log)
    ).subscribe();
  }

  p1: string = "";

  private scripting() {
    let x = Math.PI;  
    this.p1 = x.valueOf().toString();  
  }

}
