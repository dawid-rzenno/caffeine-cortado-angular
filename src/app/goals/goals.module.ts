import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { GoalsRoutes } from "./goals.routes";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
		RouterModule.forChild(GoalsRoutes)
  ]
})
export class GoalsModule { }
