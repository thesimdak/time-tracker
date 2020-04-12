import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ActivityReportComponent } from './activity-report.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule, MatInputModule, MatButtonModule } from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';
import { RouterModule } from '@angular/router';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
    imports: [
              MatFormFieldModule,
              MatInputModule,
              MatGridListModule,
              MatButtonModule,
              MatDividerModule,
              RouterModule
              ],
  declarations: [
    ActivityReportComponent
  ],
  providers: []
})
export class ActivityReportModule { }
