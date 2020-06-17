import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromMenu from '../reducers/menu.reducer';
import { groupProductsByCategory } from '../utils.menu'
import { ShoppingProduct } from 'src/app/models/shopping-product';
import { authFeatureKey } from '../../auth/reducers/auth.reducer';

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
);

export const selectItemsWithCriteria = createSelector(
  selectMenuItems,
  (menuItems: ShoppingProduct[], props: { criteria: string, all?: boolean }) => {
    if (props.all) {
      return menuItems;
    } else {
      menuItems.filter(i => i.name.includes(props.criteria))
    }
  }
)

export const selectMenuWithCriteria = createSelector(
  selectItemsWithCriteria,
  menuItems => groupProductsByCategory(menuItems)
);