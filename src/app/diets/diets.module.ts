import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DietsRoutes } from "./diets.routes";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
		RouterModule.forChild(DietsRoutes)
  ]
})
export class DietsModule { }
