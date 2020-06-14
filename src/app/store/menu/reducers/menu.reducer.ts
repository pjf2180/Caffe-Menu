import { Action, createReducer, on } from '@ngrx/store';
import * as MenuActions from '../actions/menu.actions';
import { ShoppingProduct } from 'src/app/models/shopping-product';
import { ProductCategory } from 'src/app/models/product-category.models';

export const menuFeatureKey = 'menu';

export interface State {
  entities: ShoppingProduct[];
}

export const initialState: State = {
  entities: []
};


export const reducer = createReducer(
  initialState,

  on(MenuActions.loadMenus, state => state),
  on(MenuActions.loadMenusSuccess, (state, action) => ({ ...state, entities: action.data })),
  on(MenuActions.loadMenusFailure, (state, action) => state),

);

