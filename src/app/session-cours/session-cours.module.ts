import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SessionCoursRoutingModule } from './session-cours-routing.module';
import { SessionCoursComponent } from './session-cours.component';


@NgModule({
  declarations: [
    SessionCoursComponent
  ],
  imports: [
    CommonModule,
    SessionCoursRoutingModule
  ]
})
export class SessionCoursModule { }
