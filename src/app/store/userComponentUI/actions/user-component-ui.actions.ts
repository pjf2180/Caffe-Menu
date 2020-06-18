import { createAction, props } from '@ngrx/store';

export const loadUserComponentUIs = createAction(
  '[UserComponentUI] Load UserComponentUIs'
);


export const loadUserComponentUIsSuccess = createAction(
  '[UserComponentUI] Load UserComponentUIs Success',
  props<{ data: any }>()
);

export const loadUserComponentUIsFailure = createAction(
  '[UserComponentUI] Load UserComponentUIs Failure',
  props<{ error: any }>()
);

export const togleDrawerState = createAction(
  '[UserComponentUI] Toggle Drawer'
);

