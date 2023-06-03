import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddSallesRoutingModule } from './add-salles-routing.module';
import { AddSallesComponent } from './add-salles.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddSallesComponent
  ],
  imports: [
    CommonModule,
    AddSallesRoutingModule,FormsModule
  ]
})
export class AddSallesModule { }
