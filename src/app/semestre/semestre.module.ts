import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SemestreRoutingModule } from './semestre-routing.module';
import { SemestreComponent } from './semestre.component';


@NgModule({
  declarations: [
    SemestreComponent
  ],
  imports: [
    CommonModule,
    SemestreRoutingModule
  ]
})
export class SemestreModule { }
