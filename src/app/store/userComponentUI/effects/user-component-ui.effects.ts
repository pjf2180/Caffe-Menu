import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as UserComponentUIActions from '../actions/user-component-ui.actions';



@Injectable()
export class UserComponentUIEffects {

  loadUserComponentUIs$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(UserComponentUIActions.loadUserComponentUIs),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => UserComponentUIActions.loadUserComponentUIsSuccess({ data })),
          catchError(error => of(UserComponentUIActions.loadUserComponentUIsFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions) {}

}
