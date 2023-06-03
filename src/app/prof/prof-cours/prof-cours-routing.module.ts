import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfCoursComponent } from './prof-cours.component';

const routes: Routes = [{ path: '', component: ProfCoursComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfCoursRoutingModule { }
