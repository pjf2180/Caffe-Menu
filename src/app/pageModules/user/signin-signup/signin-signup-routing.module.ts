import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninSignupComponent } from './signin-signup.component';
import { SignInComponent } from 'src/app/components/sign-in/sign-in.component';
import { RegisterComponent } from 'src/app/components/register/register.component';

const routes: Routes = [
  {
    path: '', component: SigninSignupComponent,
    children: [
      { path: '', component: SignInComponent },
      { path: 'register', component: RegisterComponent }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class SigninSignupRoutingModule { }
