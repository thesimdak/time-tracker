import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { ActivityItemComponent } from "./activity-item.component";
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { CommonModule } from '@angular/common';  

@NgModule({
    imports: [
              CommonModule,
              BrowserModule,
              MatFormFieldModule,
              MatInputModule,
              MatGridListModule,
              MatButtonModule,
              MatCardModule,
              MatIconModule,
              MatDividerModule
              ],
              exports: [ActivityItemComponent],
  declarations: [
ActivityItemComponent
  ],
  providers: []
})
export class ActivityItemModule { }
