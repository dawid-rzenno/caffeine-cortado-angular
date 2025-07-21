import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MealsRoutes } from "./meals.routes";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
		RouterModule.forChild(MealsRoutes),
  ]
})
export class MealsModule { }
