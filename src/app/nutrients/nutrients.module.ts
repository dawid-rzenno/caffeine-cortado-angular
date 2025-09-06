import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { nutrientsRoutes } from "./nutrients.routes";
import { CRUD_SERVICE } from "../shared/crud-table/crud.service.abstract";
import { NutrientsService } from "./nutrients.service";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
		RouterModule.forChild(nutrientsRoutes),
  ],
	providers: [
		{ provide: CRUD_SERVICE, useClass: NutrientsService }
	]
})
export class NutrientsModule { }
