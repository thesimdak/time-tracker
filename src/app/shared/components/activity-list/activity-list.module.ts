import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import { ActivityListComponent } from "./activity-list.component";
import { ActivityItemModule } from "../activity-item/activity-item.module";

@NgModule({
    imports: [
              MatFormFieldModule,
              MatInputModule,
              MatGridListModule,
              MatButtonModule,
              ActivityItemModule
              ],
              exports: [ActivityListComponent],
  declarations: [
    ActivityListComponent
  ],
  providers: []
})
export class ActivityListModule { }
