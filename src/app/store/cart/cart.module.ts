import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromCart from './reducers/cart.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CartEffects } from './effects/cart.effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromCart.cartFeatureKey, fromCart.reducer),
    EffectsModule.forFeature([CartEffects])
  ]
})
export class CartModule { }
