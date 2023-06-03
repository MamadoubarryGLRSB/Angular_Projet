import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateSemestreRoutingModule } from './update-semestre-routing.module';
import { UpdateSemestreComponent } from './update-semestre.component';


@NgModule({
  declarations: [
    UpdateSemestreComponent
  ],
  imports: [
    CommonModule,
    UpdateSemestreRoutingModule
  ]
})
export class UpdateSemestreModule { }
