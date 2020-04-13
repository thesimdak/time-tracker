import { NgModule, InjectionToken, inject } from '@angular/core';
import { StoreModule, ActionReducerMap } from '@ngrx/store';
import { reducers } from "./reducers";
 

@NgModule({
  imports: [StoreModule.forRoot(reducers)]
})
export class AppStoreModule {}