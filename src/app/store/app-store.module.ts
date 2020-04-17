import { NgModule, InjectionToken, inject } from '@angular/core';
import { StoreModule, ActionReducerMap } from '@ngrx/store';
import { reducers } from "./reducers";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment'; // Angular CLI environment
 

@NgModule({
  imports: [StoreModule.forRoot(reducers),
            StoreDevtoolsModule.instrument({
                maxAge: 25, // Retains last 25 states
                logOnly: environment.production, // Restrict extension to log-only mode
              }),]
})
export class AppStoreModule {}

