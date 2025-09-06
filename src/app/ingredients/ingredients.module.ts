import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ingredientsRoutes } from './ingredients.routes';
import { CRUD_SERVICE } from "../shared/crud-table/crud.service.abstract";
import { IngredientsService } from "./ingredients.service";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
		RouterModule.forChild(ingredientsRoutes),
  ],
	providers: [
		{ provide: CRUD_SERVICE, useClass: IngredientsService }
	]
})
export class IngredientsModule { }
