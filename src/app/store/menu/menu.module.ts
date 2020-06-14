import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromMenu from './reducers/menu.reducer';
import { EffectsModule } from '@ngrx/effects';
import { MenuEffects } from './effects/menu.effects';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromMenu.menuFeatureKey, fromMenu.reducer),
    EffectsModule.forFeature([MenuEffects])
  ]
})
export class MenuModule { }
