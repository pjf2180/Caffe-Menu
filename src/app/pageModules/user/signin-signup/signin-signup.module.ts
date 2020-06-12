import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninSignupComponent } from './signin-signup.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { SigninSignupRoutingModule } from './signin-signup-routing.module';



@NgModule({
  declarations: [ SigninSignupComponent],
  imports: [
    SharedModule,
    ComponentsModule,
    SigninSignupRoutingModule
  ]
})
export class SigninSignupModule { }
