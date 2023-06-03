import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfCoursRoutingModule } from './prof-cours-routing.module';
import { ProfCoursComponent } from './prof-cours.component';


@NgModule({
  declarations: [
    ProfCoursComponent
  ],
  imports: [
    CommonModule,
    ProfCoursRoutingModule
  ]
})
export class ProfCoursModule { }
