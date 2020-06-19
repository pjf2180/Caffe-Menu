import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromMenu from '../reducers/menu.reducer';
import { groupProductsByCategory } from '../utils.menu'
import { ShoppingProduct } from 'src/app/models/shopping-product';

import { selectSearchCriteria } from '../../userComponentUI/selectors/user-component-ui.selectors'
export const selectMenuState = createFeatureSelector<fromMenu.State>(
  fromMenu.menuFeatureKey
);

export const selectMenuItems = createSelector(
  selectMenuState,
  menuState => menuState.entities
);

export const selectMenu = createSelector(
  selectMenuItems,
  (menuItems: ShoppingProduct[]) => groupProductsByCategory(menuItems)
)

export const selectSearchItems = createSelector(
  selectSearchCriteria,
  selectMenuItems,
  (searchCriteria, menuItems) => {
    const loweredCriteria = searchCriteria.toLowerCase();
    if (searchCriteria !== '') {
      return menuItems.filter(i => i.name.toLowerCase().includes(loweredCriteria))
    } else {
      return menuItems
    }
  }
);

export const selectMenuWithCriteria = createSelector(
  selectSearchItems,
  menuItems => groupProductsByCategory(menuItems)
);