import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProffComponent } from './add-proff.component';

const routes: Routes = [{ path: '', component: AddProffComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddProffRoutingModule { }
