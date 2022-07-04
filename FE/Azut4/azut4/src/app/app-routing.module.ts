import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherWatchComponent } from './weather-watch/weather-watch.component';
import { WeatherListComponent } from './weather-list/weather-list.component';

const routes: Routes = [
  { path: 'weats', component: WeatherWatchComponent },
  { path: 'list', component: WeatherListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
