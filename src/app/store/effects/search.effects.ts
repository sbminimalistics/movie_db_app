import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, tap, withLatestFrom } from 'rxjs/operators';
import * as SearchActions from '../actions/search.actions';
import { Store, select } from '@ngrx/store';
//import { MoviesService } from './movies.service';

@Injectable()
export class SearchEffects {

    effectName$ = createEffect(
        () => this.actions$.pipe(
            ofType(SearchActions.populateHistory),
            tap((val) => {
                console.log('•>SearchEffects: effect triggered after SearchActions.populateHistory is dispatched');
                console.log(`•>SearchEffects: effect value: ${JSON.stringify(val)}`);
            })
        ),
        { dispatch: false } // action is not dispatched
    );

    constructor(
        private actions$: Actions,
        private store$: Store<any>
        //private moviesService: MoviesService
    ) {}
}
