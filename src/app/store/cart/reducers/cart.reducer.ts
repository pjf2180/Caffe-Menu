import { createReducer, on, Action } from '@ngrx/store';
import * as CartActions from '../actions/cart.actions';
import { CartItem } from '../../../models/cart-item.models'
import { addItemToList, setItemQuantity, clearItem } from '../utils.cart'
export const cartFeatureKey = 'cart';

export interface State {
  items: CartItem[]
};

export const initialState: State = {
  items: []
};

export const featureReducer = createReducer(
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

  on(CartActions.setItemQuantity, (state, action): State => {
    return {
      ...state,
      items: setItemQuantity([...state.items], action.shoppingProduct, action.quantity)
    }
  }),
  
  on(CartActions.clearItem, (state, action) => {
    return {
      ...state,
      items: clearItem([...state.items], action.shoppingProduct)
    }
  }),

);


export function reducer(state: State | undefined, action: Action) {
  return featureReducer(state, action);
}