import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MovieListModule } from './movies/movie-list/movie-list.module';
import { MovieModule } from './movies/movie/movie.module';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { WelcomeComponent } from './welcome/welcome.component';

import { EffectsModule } from '@ngrx/effects';
import { SearchEffects } from './store/effects/search.effects';
import { StoreModule } from '@ngrx/store';
import { searchReducer } from './store/reducers/search.reducer';

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        ReactiveFormsModule,
        RouterModule.forRoot([
            { path: '', component: WelcomeComponent},
            { path: '**', component: PageNotFoundComponent }
        ]),
        MovieListModule,
        MovieModule,
        StoreModule.forRoot({search: searchReducer}),
        EffectsModule.forRoot([SearchEffects])
    ],
    declarations: [
        AppComponent,
        TopBarComponent,
        PageNotFoundComponent,
        SearchBarComponent,
        WelcomeComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
