import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as SearchBarActions from '../actions/search-bar.actions';



@Injectable()
export class SearchBarEffects {

  loadSearchBars$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(SearchBarActions.loadSearchBars),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => SearchBarActions.setSearchCriteria({ data })),
          catchError(error => of(SearchBarActions.loadSearchBarsFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions) {}

}
