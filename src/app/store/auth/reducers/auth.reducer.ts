import { Action, createReducer, on } from '@ngrx/store';
import * as AuthActions from '../actions/auth.actions';

export const authFeatureKey = 'auth';

export interface State {
  user: { email: string, uid: string }
}

export const initialState: State = {
  user: null
};


export const reducer = createReducer(
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



);

