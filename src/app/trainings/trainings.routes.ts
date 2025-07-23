import { Routes } from "@angular/router";
import { TrainingsComponent } from "./trainings.component";

export const TrainingsRoutes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		component: TrainingsComponent
	}
]
