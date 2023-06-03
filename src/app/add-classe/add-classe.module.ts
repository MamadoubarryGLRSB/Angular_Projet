import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importez FormsModule depuis '@angular/forms'

import { AddClasseRoutingModule } from './add-classe-routing.module';
import { AddClasseComponent } from './add-classe.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // Définissez vos routes ici, si vous en avez
];

@NgModule({
  declarations: [
    AddClasseComponent
  ],
  imports: [
    CommonModule,
    FormsModule, // Assurez-vous d'avoir FormsModule ici si vous en avez besoin
    AddClasseRoutingModule,
    RouterModule// Utilisez RouterModule.forChild(routes) ici
  ],
})
export class AddClasseModule { }

