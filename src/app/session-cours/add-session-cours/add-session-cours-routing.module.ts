import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSessionCoursComponent } from './add-session-cours.component';

const routes: Routes = [{ path: '', component: AddSessionCoursComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddSessionCoursRoutingModule { }
