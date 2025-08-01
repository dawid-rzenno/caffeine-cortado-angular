import { Routes } from "@angular/router";
import { NutrientTypesComponent } from "./nutrient-types/nutrient-types.component";
import { NutrientTypeComponent } from "./nutrient-types/nutrient-type/nutrient-type.component";

export const nutrientsRoutes: Routes = [
	{
		path: "nutrient-types",
		children: [
			{
				path: '',
				pathMatch: 'full',
				component: NutrientTypesComponent,
			},
			{
				path: 'new',
				component: NutrientTypeComponent,
			},
			{
				path: ':id',
				component: NutrientTypeComponent,
			}
		]
	}
]
