import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MovieListComponent } from '../movie-list/movie-list.component';
import { MovieComponent } from './movie.component';
//import { MovieDetailComponent } from '../movie-detail/movie.component';

@NgModule({
  declarations: [MovieComponent],
  imports: [
    RouterModule.forChild([
        {
            path: 'movie/:id',
            //canActivate: [ProductDetailGuard],
            component: MovieComponent
        }
    ]),
    CommonModule
  ]
})
export class MovieModule { }
