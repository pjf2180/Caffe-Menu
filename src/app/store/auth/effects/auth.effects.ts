import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, mergeMap } from 'rxjs/operators';
import { of, from, Observable, Subscriber } from 'rxjs';

import * as AuthActions from '../actions/auth.actions';
import { AuthService } from 'src/app/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';


@Injectable()
export class AuthEffects {

  signIn$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(AuthActions.signIn),
      mergeMap((action) =>
        from(this.authService.login(action.user, action.password))
          .pipe(
            map(data => {
              const userInfo = { email: data.user.email, uid: data.user.uid };
              this.router.navigate(['user', 'menu']);
              return AuthActions.SignInSuccess({ data: userInfo })
            }),
            catchError(error => {
              return of(AuthActions.loadAuthsFailure({ error }))
            })))
    );
  });

  checkAuth$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(AuthActions.checkAuth),
      mergeMap((action) =>
        from(this.authService.isAuthenticated())
          .pipe(
            map(authState => {
              if (authState) {
                return AuthActions.SignInSuccess(
                  { data: { email: authState.email, uid: authState.uid } });
              }else{
                throw Error('No auth found');
              }
            }),
            catchError(error => {
              return of(AuthActions.loadAuthsFailure({ error }))
            })))
    );
  });

  constructor(private actions$: Actions, private authService: AuthService, private router: Router) { }

}
