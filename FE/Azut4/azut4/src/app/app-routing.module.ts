import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherWatchComponent } from './weather-watch/weather-watch.component';

const routes: Routes = [
  { path: 'weats', component: WeatherWatchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
