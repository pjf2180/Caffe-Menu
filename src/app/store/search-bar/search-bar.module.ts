import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromSearchBar from './reducers/search-bar.reducer';
import { SearchBarEffects } from './effects/search-bar.effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromSearchBar.searchBarFeatureKey, fromSearchBar.reducer),
    EffectsModule.forFeature([SearchBarEffects])
  ]
})
export class SearchBarModule { }
