import { NgModule } from '@angular/core';
import { UserComponent } from './user.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { UserRoutingModule } from './user-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';



@NgModule({
  declarations: [UserComponent,LandingPageComponent, CheckoutPageComponent],
  imports: [
    SharedModule,
    ComponentsModule,
    UserRoutingModule
  ]
})
export class UserModule { }
