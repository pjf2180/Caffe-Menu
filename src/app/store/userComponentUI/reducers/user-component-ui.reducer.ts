import { Action, createReducer, on } from '@ngrx/store';
import * as UserComponentUIActions from '../actions/user-component-ui.actions';

export const userComponentUIFeatureKey = 'userComponentUI';

export interface State {
  drawerStateOpen: boolean
}

export const initialState: State = {
  drawerStateOpen: false
};


export const reducer = createReducer(
  initialState,

  on(UserComponentUIActions.loadUserComponentUIs, state => state),
  on(UserComponentUIActions.loadUserComponentUIsSuccess, (state, action) => state),
  on(UserComponentUIActions.loadUserComponentUIsFailure, (state, action) => state),


  on(UserComponentUIActions.togleDrawerState,(state)=> ({...state, drawerStateOpen: !state.drawerStateOpen}))
);

