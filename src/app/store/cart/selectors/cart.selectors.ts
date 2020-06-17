import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCart from '../reducers/cart.reducer';
import { calculateCartTotal } from '../utils.cart';

export const selectCartState = createFeatureSelector<fromCart.State>(
  fromCart.cartFeatureKey
);

export const selectCartItems = createSelector(selectCartState, cartState => cartState.items);

export const selectCartItemQuantity = createSelector(selectCartItems, items => items.length);

export const selectCartTotal = createSelector(selectCartItems,
  cartItems => calculateCartTotal(cartItems));