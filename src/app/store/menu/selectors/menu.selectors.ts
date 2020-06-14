import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromMenu from '../reducers/menu.reducer';

export const selectMenuState = createFeatureSelector<fromMenu.State>(
  fromMenu.menuFeatureKey
);

export const selectMenuItems = createSelector(
  selectMenuState,
  menuState => menuState.entities
);