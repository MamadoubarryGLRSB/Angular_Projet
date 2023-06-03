import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SallesComponent } from './salles.component';

const routes: Routes = [{ path: '', component: SallesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SallesRoutingModule { }
