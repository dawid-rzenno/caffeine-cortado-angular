import { Routes } from "@angular/router";
import { IngredientsComponent } from "./ingredients.component";
import { IngredientComponent } from "./ingredient/ingredient.component";

export const ingredientsRoutes: Routes = [
	{
		path: '',
		component: IngredientsComponent,
	},
	{
		path: 'new',
		component: IngredientComponent,
	},
	{
		path: ':id',
		component: IngredientComponent,
	}
]
