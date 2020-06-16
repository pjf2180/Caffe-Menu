import {
  ActionReducerMap,
} from '@ngrx/store';
import { State as authState, reducer as authReducer, authFeatureKey } from './auth/reducers/auth.reducer'

export interface AppState {
  auth: authState
};

export const reducers: ActionReducerMap<AppState> = {
  auth: authReducer
};



