import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '',loadChildren: () => import('./pageModules/landing-page/landing-page.module').then(m => m.LandingPageModule)  },
  { path: 'menu', loadChildren: () => import('./pageModules/menu-page/menu-page.module').then(m => m.MenuPageModule) },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
