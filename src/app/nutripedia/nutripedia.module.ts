import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { nutripediaRoutes } from "./nutripedia.routes";

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		RouterModule.forChild(nutripediaRoutes)
	]
})
export class NutripediaModule {
}
