import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromSearchBar from '../reducers/search-bar.reducer';

export const selectSearchBarState = createFeatureSelector<fromSearchBar.State>(
  fromSearchBar.searchBarFeatureKey
);
export const selectSearchCriteria = createSelector(
  selectSearchBarState,
  searchState => searchState.searchCriteria
);
