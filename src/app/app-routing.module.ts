import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'signin',loadChildren: () => import('./pageModules/signin-signup/signin-signup.module').then(m => m.SigninSignupModule)  },
  { path: '',loadChildren: () => import('./pageModules/user/user.module').then(m => m.UserModule)  },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
