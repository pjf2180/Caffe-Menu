import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UserComponentUIEffects } from './effects/user-component-ui.effects';
import * as fromUserComponentUI from './reducers/user-component-ui.reducer';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromUserComponentUI.userComponentUIFeatureKey, fromUserComponentUI.reducer),
    EffectsModule.forFeature([UserComponentUIEffects])
  ]
})
export class UserComponentUIModule { }
