import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NewActivityComponent } from "./new-activity.component";
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

@NgModule({
    imports: [
              MatFormFieldModule,
              MatInputModule,
              MatGridListModule,
              MatButtonModule
              ],
              exports: [NewActivityComponent],
  declarations: [
    NewActivityComponent
  ],
  providers: []
})
export class NewActivityModule { }
