import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSallesComponent } from './add-salles.component';

const routes: Routes = [{ path: '', component: AddSallesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddSallesRoutingModule { }
