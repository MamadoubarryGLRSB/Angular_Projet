import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateClassRoutingModule } from './update-class-routing.module';
import { UpdateClassComponent } from './update-class.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UpdateClassComponent,
  ],
  imports: [
    CommonModule,
    UpdateClassRoutingModule,FormsModule,
  ]
})
export class UpdateClassModule { }
