import { Action, createReducer, on } from '@ngrx/store';
import * as AuthActions from '../actions/auth.actions';

export const authFeatureKey = 'auth';

export interface State {
  user: any
}

export const initialState: State = {
  user: null
};


export const reducer = createReducer(
  initialState,

  on(AuthActions.signIn, state => {
    console.log('Hello world');
    return state
  }),
  on(AuthActions.SignInSuccess, (state, action): State => {
    console.log(action);
    return {
      ...state,
      user: action.data
    }
  }),
  on(AuthActions.loadAuthsFailure, (state, action) => state),

);

