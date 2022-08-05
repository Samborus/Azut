import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from './info/info.component';
import { PlayComponent } from './play/play.component';
import { WordContainerComponent } from './word-container/word-container.component';


const routes: Routes = [
  { path: 'words', component: WordContainerComponent },
  { path: 'play', component: PlayComponent },
  { path: 'info', component: InfoComponent },
  { path: '', redirectTo: '/words', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
