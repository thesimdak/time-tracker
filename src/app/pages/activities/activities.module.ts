import { NgModule } from '@angular/core';

import { ActivitiesComponent } from './activities.component';
import { MatButtonModule } from '@angular/material/button';
import { NewActivityModule } from "../../shared/components/new-activity/new-activity.module";
import { ActivityListModule } from "../../shared/components/activity-list/activity-list.module";
import {MatGridListModule} from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

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
