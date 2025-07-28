import { Routes } from "@angular/router";
import { NutripediaComponent } from "./nutripedia.component";

export const nutripediaRoutes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		component: NutripediaComponent
	}
]
