import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentsComponent } from './payments.component';
import { StripeCheckoutModule } from 'ng-stripe-checkout';
import { AngularMaterialComponentsModule } from '../shared/angular-material-components/angular-material-components.module';

@NgModule({
  declarations: [PaymentsComponent],
  imports: [
    CommonModule,
    AngularMaterialComponentsModule,
    StripeCheckoutModule
  ],
  exports: [PaymentsComponent,StripeCheckoutModule]
})
export class PaymentsModule { }
