import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JserComponent } from './jser/jser.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherService } from './service/weather.service';

@NgModule({
  declarations: [
    AppComponent,
    JserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
