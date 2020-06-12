import { createAction, props } from '@ngrx/store';

export const signIn = createAction(
  '[Auth] Sign in',
  props<{ user: string, password: string }>()
);

export const SignInSuccess = createAction(
  '[Auth] Sign in Success',
  props<{ data: any }>()
);

export const loadAuthsFailure = createAction(
  '[Auth] Load Auths Failure',
  props<{ error: any }>()
);
