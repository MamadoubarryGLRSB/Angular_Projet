import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddModulesComponent } from './add-modules.component';

const routes: Routes = [{ path: '', component: AddModulesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddModulesRoutingModule { }
