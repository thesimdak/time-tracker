import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ActivitiesComponent } from './activities.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule, MatInputModule, MatButtonModule } from '@angular/material';
import { NewActivityModule } from "../../shared/components/new-activity/new-activity.module";
import { ActivityListModule } from "../../shared/components/activity-list/activity-list.module";
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
    imports: [
              MatFormFieldModule,
              MatInputModule,
              NewActivityModule,
              MatGridListModule,
              ActivityListModule
              ],
  declarations: [
    ActivitiesComponent
  ],
  providers: []
})
export class ActivitiesModule { }
