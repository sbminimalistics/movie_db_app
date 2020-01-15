import { createAction, props } from '@ngrx/store';

export const populateHistory = createAction(
    '[Search Bar Component] Populate History',
    props<{searchPhrase: string}>()
);
export const resetHistory = createAction('[Search Bar Component] Reset History');
export const countSearches = createAction('[Search Bar Component] Count Searches');
