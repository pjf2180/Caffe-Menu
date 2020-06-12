import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { State as authState, reducer as authReducer } from './auth/reducers/auth.reducer'

import { environment } from '../../environments/environment';


export interface AppState {
  auth: authState
}

export const reducers: ActionReducerMap<AppState> = {
  auth: authReducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
