import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlannifClasseComponent } from './plannif-classe.component';

const routes: Routes = [{ path: '', component: PlannifClasseComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlannifClasseRoutingModule { }
