import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddAnneeScolaireRoutingModule } from './add-annee-scolaire-routing.module';
import { AddAnneeScolaireComponent } from './add-annee-scolaire.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddAnneeScolaireComponent
  ],
  imports: [
    CommonModule,
    AddAnneeScolaireRoutingModule,FormsModule
  ]
})
export class AddAnneeScolaireModule { }
