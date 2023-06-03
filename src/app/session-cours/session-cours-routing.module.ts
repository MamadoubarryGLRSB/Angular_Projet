import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SessionCoursComponent } from './session-cours.component';

const routes: Routes = [{ path: '', component: SessionCoursComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SessionCoursRoutingModule { }
