import { createAction, props } from '@ngrx/store';
import { ShoppingProduct } from 'src/app/models/shopping-product';

export const addToCart = createAction(
  '[Cart] Add item to cart',
  props<{ itemAdded: ShoppingProduct}>()
);

export const loadCarts = createAction(
  '[Cart] Load Carts'
);

export const loadCartsSuccess = createAction(
  '[Cart] Load Carts Success',
  props<{ data: any }>()
);

export const loadCartsFailure = createAction(
  '[Cart] Load Carts Failure',
  props<{ error: any }>()
);
