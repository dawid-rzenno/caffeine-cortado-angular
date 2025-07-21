import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { TrainingsRoutes } from "./trainings.routes";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
		RouterModule.forChild(TrainingsRoutes)
  ]
})
export class TrainingsModule { }
