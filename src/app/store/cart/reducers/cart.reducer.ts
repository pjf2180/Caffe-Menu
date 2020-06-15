import { createReducer, on } from '@ngrx/store';
import * as CartActions from '../actions/cart.actions';
import { CartItem } from '../../../models/cart-item.models'
import { addItemToList } from '../utils.cart'
export const cartFeatureKey = 'cart';

export interface State {
  items: CartItem[]
};

export const initialState: State = {
  items: []
};

export const reducer = createReducer(
  initialState,

  on(CartActions.addToCart, (state, action): State => {
    return {
      ...state,
      items: addItemToList([...state.items], action.itemAdded)
    }
  }),

  on(CartActions.loadCarts, state => state),
  on(CartActions.loadCartsSuccess, (state, action) => state),
  on(CartActions.loadCartsFailure, (state, action) => state),

);
