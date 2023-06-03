import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnneeScolaireComponent } from './annee-scolaire.component';

const routes: Routes = [{ path: '', component: AnneeScolaireComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnneeScolaireRoutingModule { }
