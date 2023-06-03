import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSemestreComponent } from './add-semestre.component';

const routes: Routes = [{ path: '', component: AddSemestreComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddSemestreRoutingModule { }
