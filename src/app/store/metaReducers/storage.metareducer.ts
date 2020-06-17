import { ActionReducer, Action } from '@ngrx/store';
import { merge, pick } from 'lodash-es';
import { LocalStorageService } from 'src/app/services/localstorage.service';


export function storageMetaReducer<S, A extends Action = Action>(
    saveKeys: string[],
    localStorageKey: string,
    storageService: LocalStorageService) {

    let onInit = true; // after load/refresh…
    return function (reducer: ActionReducer<S, A>) {
        return function (state: S, action: A): S {
            // get the next state.
            const nextState = reducer(state, action);
            // init the application state.
            if (onInit) {
                onInit = false;
                const savedState = storageService.getSavedState(localStorageKey);
                return merge(nextState, savedState);
            }

            // save the next state to the application storage.
            const stateToSave = pick(nextState, saveKeys);
            storageService.setSavedState(stateToSave, localStorageKey);

            return nextState;
        };
    };
}