import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { UserComponent } from './user.component';

export enum UserRoutingPaths {
  home,
  menu
}

const routes: Routes = [
  {
    path: 'user', component: UserComponent,
    children: [
      { path: 'signin',loadChildren: () => import('../signin-signup/signin-signup.module').then(m => m.SigninSignupModule)  },
      { path: UserRoutingPaths[UserRoutingPaths.home], component: LandingPageComponent },
      { path: UserRoutingPaths[UserRoutingPaths.menu], loadChildren: () => import('./menu-page/menu-page.module').then(m => m.MenuPageModule) },
      { path: '', pathMatch: 'full', redirectTo: UserRoutingPaths[UserRoutingPaths.menu] },

    ]
  },

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class UserRoutingModule { }
