import { createAction, props } from '@ngrx/store';

export const loadSearchBars = createAction(
  '[SearchBar] Load SearchBars'
);

export const setSearchCriteria = createAction(
  '[SearchBar] Load SearchBars Success',
  props<{ data: string }>()
);

export const loadSearchBarsFailure = createAction(
  '[SearchBar] Load SearchBars Failure',
  props<{ error: any }>()
);
