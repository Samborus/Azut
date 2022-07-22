import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WordsListComponent } from 'projects/azut-word/src/public-api';


const routes: Routes = [
  { path: 'words', component: WordsListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
