import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddClasseComponent } from './add-classe.component';

const routes: Routes = [{ path: '', component: AddClasseComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddClasseRoutingModule { }
