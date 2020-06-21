import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of, from } from 'rxjs';

import * as AuthActions from '../actions/auth.actions';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { userMainRoute } from 'src/app/pageModules/user/user-routing.module';
import { AppUser } from 'src/app/models/user.models';


@Injectable()
export class AuthEffects {

  signIn$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(AuthActions.signIn),
      mergeMap((action) =>
        from(this.authService.login(action.provider, action.user, action.password))
          .pipe(
            map((appUser: AppUser) => {
              this.router.navigate([userMainRoute, 'menu']);
              return AuthActions.SignInSuccess({ data: appUser })
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
            map(firebaseUser => {
              if (firebaseUser) {
                const appUser = this.authService.userToAppUser(firebaseUser);
                return AuthActions.SignInSuccess(
                  { data: appUser });
              } else {
                throw Error('No auth found');
              }
            }),
            catchError(error => {
              return of(AuthActions.loadAuthsFailure({ error }))
            })))
    );
  });

  signOut$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(AuthActions.signOut),
      mergeMap((action) =>
        from(this.authService.logout())
          .pipe(
            map(() => {
              this.router.navigate([userMainRoute, 'home']);
              return AuthActions.signOutSuccess();
            }),
            catchError(error => {
              return of(AuthActions.signOutFailed())
            })))
    );
  });


  constructor(private actions$: Actions, private authService: AuthService, private router: Router) { }

}
