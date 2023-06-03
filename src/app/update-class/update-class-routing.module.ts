import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateClassComponent } from './update-class.component';

const routes: Routes = [{ path: '', component: UpdateClassComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateClassRoutingModule { }
