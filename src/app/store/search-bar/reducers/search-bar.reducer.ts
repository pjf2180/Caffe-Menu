import { Action, createReducer, on } from '@ngrx/store';
import * as SearchBarActions from '../actions/search-bar.actions';

export const searchBarFeatureKey = 'searchBar';

export interface State {
  searchCriteria: string;
}

export const initialState: State = {
  searchCriteria: ''
};


export const reducer = createReducer(
  initialState,

  on(SearchBarActions.loadSearchBars, state => state),
  on(SearchBarActions.setSearchCriteria, (state, action) => ({...state,searchCriteria: action.data})),
  on(SearchBarActions.loadSearchBarsFailure, (state, action) => state),

);

