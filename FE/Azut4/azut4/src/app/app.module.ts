import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherServiceService } from './services/weather-service.service';
import { WeatherWatchComponent } from './weather-watch/weather-watch.component';
import { ClarityModule } from "@clr/angular";
import { weatsReducer } from './state/weats.reducer';
import { collectionReducer } from './state/collection.reducer';
import { StoreModule } from '@ngrx/store';
import { WeatherListComponent } from './weather-list/weather-list.component';
import { WeatsService } from './services/weats.service';
@NgModule({
  declarations: [
    AppComponent,
    WeatherWatchComponent,
    WeatherListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ weats: weatsReducer, collection: collectionReducer }),
    HttpClientModule,
    ClarityModule
  ],
  providers: [WeatherServiceService, WeatsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
