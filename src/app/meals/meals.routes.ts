import { Routes } from "@angular/router";
import { MealsComponent } from "./meals.component";
import { MealComponent } from "./meal/meal.component";

export const MealsRoutes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		component: MealsComponent,
	},
	{
		path: 'new',
		component: MealComponent,
	},
	{
		path: ':id',
		component: MealComponent,
	}
]
