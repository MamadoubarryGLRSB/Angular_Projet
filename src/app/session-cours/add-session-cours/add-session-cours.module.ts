import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddSessionCoursRoutingModule } from './add-session-cours-routing.module';
import { AddSessionCoursComponent } from './add-session-cours.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddSessionCoursComponent
  ],
  imports: [
    CommonModule,
    AddSessionCoursRoutingModule,FormsModule,ReactiveFormsModule
  ]
})
export class AddSessionCoursModule { }
