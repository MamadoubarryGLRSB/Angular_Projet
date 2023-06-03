import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlannifAddComponent } from './plannif-add.component';

const routes: Routes = [{ path: '', component: PlannifAddComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlannifAddRoutingModule { }
