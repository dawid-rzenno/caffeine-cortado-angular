import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { massUnitsRoutes } from "./mass-units.routes";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
		RouterModule.forChild(massUnitsRoutes)
  ]
})
export class MassUnitsModule { }
