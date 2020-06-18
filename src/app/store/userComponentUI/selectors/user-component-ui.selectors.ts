import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUserComponentUI from '../reducers/user-component-ui.reducer';

export const selectUserComponentUIState = createFeatureSelector<fromUserComponentUI.State>(
  fromUserComponentUI.userComponentUIFeatureKey
);

export const selectDrawerState = createSelector(
  selectUserComponentUIState,
  userUI => userUI.drawerStateOpen
);