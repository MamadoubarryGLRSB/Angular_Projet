import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddCoursRoutingModule } from './add-cours-routing.module';
import { AddCoursComponent } from './add-cours.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddCoursComponent
  ],
  imports: [
    CommonModule,
    AddCoursRoutingModule,FormsModule
  ]
})
export class AddCoursModule { }
