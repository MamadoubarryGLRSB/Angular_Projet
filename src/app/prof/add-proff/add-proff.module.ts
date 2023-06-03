import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddProffRoutingModule } from './add-proff-routing.module';
import { AddProffComponent } from './add-proff.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddProffComponent
  ],
  imports: [
    CommonModule,
    AddProffRoutingModule,FormsModule,ReactiveFormsModule 
  ]
})
export class AddProffModule { }
