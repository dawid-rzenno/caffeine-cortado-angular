import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DietsRoutes } from "./diets.routes";
import { RouterModule } from "@angular/router";
import { CRUD_SERVICE } from "../shared/crud-table/crud.service.abstract";
import { DietsService } from "./diets.service";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
		RouterModule.forChild(DietsRoutes)
  ],
	providers: [
		{ provide: CRUD_SERVICE, useClass: DietsService }
	]
})
export class DietsModule { }
