import { createReducer, on, Action } from '@ngrx/store';
import * as UserComponentUIActions from '../actions/user-component-ui.actions';

export const userComponentUIFeatureKey = 'userComponentUI';

export interface State {
  drawerStateOpen: boolean;
  searching: boolean;
  searchCriteria: string;
}

export const initialState: State = {
  drawerStateOpen: false,
  searchCriteria: '',
  searching: false
};


const featureReducer = createReducer(
  initialState,

  on(UserComponentUIActions.loadUserComponentUIs, state => state),
  on(UserComponentUIActions.loadUserComponentUIsSuccess, (state, action) => state),
  on(UserComponentUIActions.loadUserComponentUIsFailure, (state, action) => state),


  on(UserComponentUIActions.togleDrawerState, (state) => ({ ...state, drawerStateOpen: !state.drawerStateOpen })),
  on(UserComponentUIActions.setSearchCriteria, (state, action) => {
    return {
      ...state,
      searchCriteria: action.data,
      searching: true
    }
  }),
  on(UserComponentUIActions.setDrawerState, (state, action) => ({ ...state, drawerStateOpen: action.open })),
  on(UserComponentUIActions.clearSearchCriteria, (state) => ({ ...state, searchCriteria: '' })),
);

export function reducer(state: State | undefined, action: Action) {
  return featureReducer(state, action);
}
