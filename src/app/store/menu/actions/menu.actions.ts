import { createAction, props } from '@ngrx/store';
import { ShoppingProduct } from 'src/app/models/shopping-product';

export const loadMenus = createAction(
  '[Menu] Load Menus'
);

export const loadMenusSuccess = createAction(
  '[Menu] Load Menus Success',
  props<{ data: ShoppingProduct[] }>()
);

export const loadMenusFailure = createAction(
  '[Menu] Load Menus Failure',
  props<{ error: any }>()
);
