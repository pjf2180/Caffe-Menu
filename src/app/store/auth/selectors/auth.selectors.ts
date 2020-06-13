import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAuth from '../reducers/auth.reducer';
import { isNullOrUndefined } from 'util';

export const selectAuthState = createFeatureSelector<fromAuth.State>(
  fromAuth.authFeatureKey
);

export const selectUser =
  createSelector(
    selectAuthState,
    authState => authState.user);

export const selectIsAuth =
  createSelector(selectUser, user => !isNullOrUndefined(user));