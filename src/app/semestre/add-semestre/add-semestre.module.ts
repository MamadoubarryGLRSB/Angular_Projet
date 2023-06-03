import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddSemestreRoutingModule } from './add-semestre-routing.module';
import { AddSemestreComponent } from './add-semestre.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddSemestreComponent
  ],
  imports: [
    CommonModule,
    AddSemestreRoutingModule,FormsModule
  ]
})
export class AddSemestreModule { }
