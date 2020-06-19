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
export const setDrawerState = createAction(
  '[UserComponentUI] Set Drawer state',
  props<{ open: boolean }>()
);
export const setSearchCriteria = createAction(
  '[UserComponentUI] Set Search criteria',
  props<{ data: string }>()
);
export const clearSearchCriteria = createAction(
  '[UserComponentUI] Clear Search criteria'
);