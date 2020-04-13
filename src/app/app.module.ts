import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivitiesModule } from "./pages/activities/activities.module";
import { MatToolbarModule } from '@angular/material/toolbar';
import { ActivityReportModule } from "./pages/activity-report/activity-report.module";
import { AppStoreModule } from "src/app/store/app-store.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ActivityReportModule,
    ActivitiesModule,
    MatToolbarModule,
    AppStoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
