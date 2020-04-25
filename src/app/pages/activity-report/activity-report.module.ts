import {CommonModule} from '@angular/common';
import { NgModule } from '@angular/core';

import { ActivityReportComponent } from './activity-report.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import { RouterModule } from '@angular/router';
import {MatDividerModule} from '@angular/material/divider';
import { ActivityPeriodChooserModule } from "../../shared/components/activity-period-chooser/activity-period-chooser.module";
import { ActivityReportTableModule } from "../../shared/components/activity-report-table/activity-report-table.module";


@NgModule({
    imports: [
              MatFormFieldModule,
              MatInputModule,
              MatGridListModule,
              MatButtonModule,
              MatDividerModule,
              RouterModule,
              ActivityPeriodChooserModule,
              ActivityReportTableModule,
              CommonModule
              ],
  declarations: [
    ActivityReportComponent
  ],
  providers: []
})
export class ActivityReportModule { }
