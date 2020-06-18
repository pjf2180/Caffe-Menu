import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule, META_REDUCERS, MetaReducer, ActionReducer } from '@ngrx/store';
import { reducers } from './root-reducer';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AuthEffects } from './auth/effects/auth.effects';
import { environment } from 'src/environments/environment';
import { MenuModule } from './menu/menu.module';
import { CartModule } from './cart/cart.module';
import { LocalStorageService } from '../services/localstorage.service';
import { ROOT_STORAGE_KEYS, ROOT_LOCAL_STORAGE_KEY } from './metaReducers/tokens.metaReducers';
import { storageMetaReducer } from './metaReducers/storage.metareducer';
import { cartFeatureKey } from './cart/reducers/cart.reducer';
import { SearchBarModule } from './search-bar/search-bar.module';

// factory meta-reducer configuration function
export function getMetaReducers(saveKeys: string[], localStorageKey: string, storageService: LocalStorageService)
  : MetaReducer<any> {
  return storageMetaReducer(saveKeys, localStorageKey, storageService);
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([AuthEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    MenuModule,
    CartModule,
    SearchBarModule
  ],
  providers: [
    { provide: ROOT_STORAGE_KEYS, useValue: [cartFeatureKey] },
    { provide: ROOT_LOCAL_STORAGE_KEY, useValue: '__app_storage__' },
    {
      provide: META_REDUCERS,
      deps: [ROOT_STORAGE_KEYS, ROOT_LOCAL_STORAGE_KEY, LocalStorageService],
      useFactory: getMetaReducers,
      multi: true
    },
  ]
})
export class RootStoreModule { }
