import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnneeScolaireRoutingModule } from './annee-scolaire-routing.module';
import { AnneeScolaireComponent } from './annee-scolaire.component';


@NgModule({
  declarations: [
    AnneeScolaireComponent
  ],
  imports: [
    CommonModule,
    AnneeScolaireRoutingModule
  ]
})
export class AnneeScolaireModule { }
