import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { GoalsRoutes } from "./goals.routes";
import { CRUD_SERVICE } from "../shared/crud-table/crud.service.abstract";
import { GoalsService } from "./goals.service";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
		RouterModule.forChild(GoalsRoutes)
  ],
	providers: [
		{ provide: CRUD_SERVICE, useClass: GoalsService }
	]
})
export class GoalsModule { }
