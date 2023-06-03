import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlannifClasseRoutingModule } from './plannif-classe-routing.module';
import { PlannifClasseComponent } from './plannif-classe.component';


@NgModule({
  declarations: [
    PlannifClasseComponent
  ],
  imports: [
    CommonModule,
    PlannifClasseRoutingModule
  ]
})
export class PlannifClasseModule { }
