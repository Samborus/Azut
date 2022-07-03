import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherServiceService } from './services/weather-service.service';
import { WeatherWatchComponent } from './weather-watch/weather-watch.component';
import { ClarityModule } from "@clr/angular";

@NgModule({
  declarations: [
    AppComponent,
    WeatherWatchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ClarityModule
  ],
  providers: [WeatherServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
