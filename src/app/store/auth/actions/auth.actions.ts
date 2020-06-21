import { createAction, props } from '@ngrx/store';
import { AuthProvider } from 'src/app/services/auth.service';
import { AppUser } from 'src/app/models/user.models';

export const signIn = createAction(
  '[Auth] Sign in',
  props<{ provider: AuthProvider, user?: string, password?: string }>()
);

export const SignInSuccess = createAction(
  '[Auth] Sign in Success',
  props<{ data: AppUser }>()
);

export const loadAuthsFailure = createAction(
  '[Auth] Load Auths Failure',
  props<{ error: any }>()
);


export const checkAuth = createAction(
  '[Auth] Checking auth'
);

export const signOut = createAction(
  '[Auth] Sign out'
);
export const signOutSuccess = createAction(
  '[Auth] Sign out success'
);
export const signOutFailed = createAction(
  '[Auth] Sign out failed'
);
