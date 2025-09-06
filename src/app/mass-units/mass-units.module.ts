import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { massUnitsRoutes } from "./mass-units.routes";
import { RouterModule } from "@angular/router";
import { CRUD_SERVICE } from "../shared/crud-table/crud.service.abstract";
import { MassUnitsService } from "./mass-units.service";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
		RouterModule.forChild(massUnitsRoutes)
  ],
	providers: [
		{ provide: CRUD_SERVICE, useClass: MassUnitsService }
	]
})
export class MassUnitsModule { }
