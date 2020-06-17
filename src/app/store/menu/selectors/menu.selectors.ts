import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromMenu from '../reducers/menu.reducer';
import { groupProductsByCategory } from '../utils.menu'

export const selectMenuState = createFeatureSelector<fromMenu.State>(
  fromMenu.menuFeatureKey
);

export const selectMenuItems = createSelector(
  selectMenuState,
  menuState => menuState.entities
);

export const selectMenuCategories = createSelector(
  selectMenuItems,
  menuItems => groupProductsByCategory(menuItems)
);