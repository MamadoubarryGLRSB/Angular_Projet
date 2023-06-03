import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddEtudiantRoutingModule } from './add-etudiant-routing.module';
import { AddEtudiantComponent } from './add-etudiant.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddEtudiantComponent
  ],
  imports: [
    CommonModule,
    AddEtudiantRoutingModule,FormsModule,ReactiveFormsModule
  ]
})
export class AddEtudiantModule { }
