import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SallesRoutingModule } from './salles-routing.module';
import { SallesComponent } from './salles.component';


@NgModule({
  declarations: [
    SallesComponent
  ],
  imports: [
    CommonModule,
    SallesRoutingModule
  ]
})
export class SallesModule { }
