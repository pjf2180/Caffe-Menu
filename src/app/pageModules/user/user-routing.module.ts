import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { UserComponent } from './user.component';

import { CheckoutPageComponent } from './checkout-page/checkout-page.component';

export enum UserRoutingPaths {
  home,
  menu,
  checkout
}

export const userMainRoute = 'user';

const routes: Routes = [
  {
    path: userMainRoute, component: UserComponent,
    children: [
      { path: 'signin', loadChildren: () => import('./signin-signup/signin-signup.module').then(m => m.SigninSignupModule) },
      { path: UserRoutingPaths[UserRoutingPaths.home], component: LandingPageComponent },
      { path: UserRoutingPaths[UserRoutingPaths.checkout], component: CheckoutPageComponent },
      { path: UserRoutingPaths[UserRoutingPaths.menu], loadChildren: () => import('./menu-page/menu-page.module').then(m => m.MenuPageModule) },
      { path: '', pathMatch: 'full', redirectTo: UserRoutingPaths[UserRoutingPaths.menu] },

    ]
  },
  { path: '**', pathMatch: 'full', redirectTo: userMainRoute }

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class UserRoutingModule { }
