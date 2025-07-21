import { Routes } from "@angular/router";
import { DietsComponent } from "./diets.component";
import { DietComponent } from "./diet/diet.component";

export const DietsRoutes: Routes = [
	{
		path: '',
		component: DietsComponent,
	},
	{
		path: 'new',
		component: DietComponent,
	},
	{
		path: ':id',
		component: DietComponent,
	}
]
