import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ActivityPeriodChooserComponent } from "./activity-period-chooser.component";
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { RouterModule } from '@angular/router';
import {CommonModule} from '@angular/common';

@NgModule({
    imports: [
              MatFormFieldModule,
              MatInputModule,
              MatGridListModule,
              MatButtonModule,
              MatSelectModule,
              RouterModule,
              CommonModule
              ],
              exports: [ActivityPeriodChooserComponent],
  declarations: [
ActivityPeriodChooserComponent
  ],
  providers: []
})
export class ActivityPeriodChooserModule { }
