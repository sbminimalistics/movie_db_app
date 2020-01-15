import { createReducer, on } from '@ngrx/store';
import { populateHistory, resetHistory } from '../actions/search.actions';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as SearchActions from '../actions/search.actions';

export interface Search {
  searchPhrase: string;
  searchHistory: Array<string>;
  searchCount: number | null;
}

export const adapter : EntityAdapter<Search> =
    createEntityAdapter<Search>();

export const initialState: Search = adapter.getInitialState({
    searchPhrase: "",
    searchHistory: new Array(),
    searchCount: 0
});

export const reducer = createReducer(
    initialState,
    on(
        SearchActions.populateHistory,
        (state, {searchPhrase}) => {
            console.log("populateHistory reducer trigger");
            return ({...state, searchHistory: state.searchHistory.concat(searchPhrase)})
        }
    ),
    on(SearchActions.resetHistory, state => initialState),
    on(SearchActions.countSearches, (state) => {
        console.log(`countSearch count: ${state.searchCount}`);
        return ({...state, searchCount: ++state.searchCount})
    }),
);

export function searchReducer(state, action) {
  return reducer(state, action);
}
