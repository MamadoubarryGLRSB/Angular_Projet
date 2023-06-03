import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateSemestreComponent } from './update-semestre.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [{ path: '', component: UpdateSemestreComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule,FormsModule]
})
export class UpdateSemestreRoutingModule { }
