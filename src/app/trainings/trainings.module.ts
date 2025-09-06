import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { TrainingsRoutes } from "./trainings.routes";
import { CRUD_SERVICE } from "../shared/crud-table/crud.service.abstract";
import { TrainingsService } from "./trainings.service";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
		RouterModule.forChild(TrainingsRoutes)
  ],
	providers: [
		{ provide: CRUD_SERVICE, useClass: TrainingsService }
	]
})
export class TrainingsModule { }
