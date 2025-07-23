import { Routes } from "@angular/router";
import { GoalsComponent } from "./goals.component";

export const GoalsRoutes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		component: GoalsComponent
	}
]
