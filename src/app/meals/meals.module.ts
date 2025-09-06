import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MealsRoutes } from "./meals.routes";
import { RouterModule } from "@angular/router";
import { CRUD_SERVICE } from "../shared/crud-table/crud.service.abstract";
import { MealsService } from "./meals.service";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
		RouterModule.forChild(MealsRoutes),
  ],
	providers: [
		{ provide: CRUD_SERVICE, useClass: MealsService }
	]
})
export class MealsModule { }
