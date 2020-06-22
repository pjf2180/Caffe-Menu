import { Action, createReducer, on } from '@ngrx/store';
import * as AuthActions from '../actions/auth.actions';
import { AppUser } from 'src/app/models/user.models';

export const authFeatureKey = 'auth';

export interface State {
  user: AppUser
}

export const initialState: State = {
  user: null
};


export const featureReducer = createReducer(
  initialState,

  on(AuthActions.signIn, state => {
    return state
  }),
  on(AuthActions.SignInSuccess, (state, action): State => {
    return {
      ...state,
      user: action.data
    }
  }),
  on(AuthActions.loadAuthsFailure, (state, action) => state),


  on(AuthActions.checkAuth, (state, action) => state),

  on(AuthActions.signOut, (state, action) => initialState)
);

export function reducer(state: State | undefined, action: Action) {
  return featureReducer(state, action);
}