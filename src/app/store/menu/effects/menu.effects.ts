import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as MenuActions from '../actions/menu.actions';
import { ShoppingProductService } from 'src/app/services/product.service';



@Injectable()
export class MenuEffects {

  loadMenus$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(MenuActions.loadMenus),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        this.shoppingProductsService.getProductList().pipe(
          map(products => MenuActions.loadMenusSuccess({ data: products })),
          catchError(error => of(MenuActions.loadMenusFailure({ error }))))
      )
    );
  });


  constructor(private actions$: Actions, public shoppingProductsService: ShoppingProductService) { }

}
