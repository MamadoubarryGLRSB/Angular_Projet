import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddModulesRoutingModule } from './add-modules-routing.module';
import { AddModulesComponent } from './add-modules.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddModulesComponent
  ],
  imports: [
    CommonModule,
    AddModulesRoutingModule,FormsModule
  ]
})
export class AddModulesModule { }
