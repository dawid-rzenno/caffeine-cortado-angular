import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { nutrientsRoutes } from "./nutrients.routes";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
		RouterModule.forChild(nutrientsRoutes),
  ]
})
export class NutrientsModule { }
