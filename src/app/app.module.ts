import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { MovieModule } from './movies/movie/movie.module';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        ReactiveFormsModule,
        RouterModule.forRoot([
            { path: '', component: WelcomeComponent},
            { path: 'movies/:searchPhrase', component: MovieListComponent },
            { path: '**', component: PageNotFoundComponent }
        ]),
        MovieModule
    ],
    declarations: [
        AppComponent,
        TopBarComponent,
        MovieListComponent,
        PageNotFoundComponent,
        SearchBarComponent,
        WelcomeComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
