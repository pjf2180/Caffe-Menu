import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { UserComponent } from './user.component';


const routes: Routes = [
  { 
    path: 'user', component: UserComponent,
    children:[
      { path: 'home', component: LandingPageComponent },
      { path: 'menu', loadChildren: () => import('./menu-page/menu-page.module').then(m => m.MenuPageModule) },
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
