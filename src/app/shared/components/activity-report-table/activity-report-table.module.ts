import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ActivityReportTableComponent } from "./activity-report-table.component";
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';

@NgModule({
    imports: [
              MatFormFieldModule,
              MatInputModule,
              MatGridListModule,
              MatButtonModule,
              MatTableModule,
              MatSelectModule
              ],
              exports: [ActivityReportTableComponent],
  declarations: [
ActivityReportTableComponent
  ],
  providers: []
})
export class ActivityReportTableModule { }
