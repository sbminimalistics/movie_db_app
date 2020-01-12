import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MovieListComponent } from './movie-list.component';

@NgModule({
  declarations: [MovieListComponent],
  imports: [
    RouterModule.forChild([
        { path: 'movies/:searchPhrase', component: MovieListComponent }
    ]),
    CommonModule
  ]
})
export class MovieListModule {
    constructor() { }
}
