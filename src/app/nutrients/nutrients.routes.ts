import { Routes } from "@angular/router";
import { NutrientNamesComponent } from "./nutrient-names/nutrient-names.component";
import { NutrientTypesComponent } from "./nutrient-types/nutrient-types.component";
import { NutrientTypeComponent } from "./nutrient-types/nutrient-type/nutrient-type.component";
import { NutrientNameComponent } from "./nutrient-names/nutrient-name/nutrient-name.component";

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
	},
	{
		path: "nutrient-names",
		children: [
			{
				path: '',
				pathMatch: 'full',
				component: NutrientNamesComponent,
			},
			{
				path: 'new',
				component: NutrientNameComponent,
			},
			{
				path: ':id',
				component: NutrientNameComponent,
			}
		]
	}
]
