import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlannifAddRoutingModule } from './plannif-add-routing.module';
import { PlannifAddComponent } from './plannif-add.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PlannifAddComponent
  ],
  imports: [
    CommonModule,
    PlannifAddRoutingModule,FormsModule
  ]
})
export class PlannifAddModule { }
