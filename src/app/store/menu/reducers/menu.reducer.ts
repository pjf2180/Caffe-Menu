import { createReducer, on, Action } from '@ngrx/store';
import * as MenuActions from '../actions/menu.actions';
import { ShoppingProduct } from 'src/app/models/shopping-product';

export const menuFeatureKey = 'menu';

export interface State {
  entities: ShoppingProduct[];
}

export const initialState: State = {
  entities: []
};


const featureReducer = createReducer(
  initialState,

  on(MenuActions.loadMenus, state => state),
  on(MenuActions.loadMenusSuccess, (state, action) => ({ ...state, entities: action.data })),
  on(MenuActions.loadMenusFailure, (state, action) => state),

);

export function reducer(state: State | undefined, action: Action) {
  return featureReducer(state, action);
}