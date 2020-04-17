import {ActionReducer, Action} from '@ngrx/store';
import {merge, pick} from 'lodash-es';
import { MetaReducer } from "@ngrx/store";

function setSavedState(state: any, localStorageKey: string) {
  localStorage.setItem(localStorageKey, JSON.stringify(state));
}
function getSavedState(localStorageKey: string): any {
  return JSON.parse(localStorage.getItem(localStorageKey));
}

// the keys from state which we'd like to save.
const stateKeys = ['activities.items'];
// the key for the local storage.
const localStorageKey = '__time_tracker__';


//console.log all actions
export function storageMetaReducer<S, A extends Action = Action> (reducer: ActionReducer<S, A>): ActionReducer<any> {
    let onInit = true; 

    // return reducer(state, action);
     return function(state: S, action: A): S {
         // reduce the nextState.
         const nextState = reducer(state, action);
         // init the application state.
         if (onInit) {
           onInit           = false;
           const savedState = getSavedState(localStorageKey);
           return merge(nextState, savedState);
         }
         // save the next state to the application storage.
         const stateToSave = pick(nextState, stateKeys);
         setSavedState(stateToSave, localStorageKey);
         return nextState;

   };
}
 
export const metaReducers: MetaReducer<any>[] = [storageMetaReducer];