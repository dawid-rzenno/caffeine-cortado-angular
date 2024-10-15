import { DietDetailsComponent } from "./diet-details/diet-details.component";
import { dietResolver } from "./diet.resolver";
import { DietFormComponent } from "./diet-form/diet-form.component";
import { Routes } from "@angular/router";
import { DietTableComponent } from "./diet-table/diet-table.component";
import { dietsResolver } from "./diets.resolver";

export const dietRoutes: Routes = [
  {
    path: 'list',
    component: DietTableComponent,
    resolve: {
      paginatedResponse: dietsResolver
    },
  },
  {
    path: 'details/:id',
    component: DietDetailsComponent,
    resolve: {
      details: dietResolver
    },
  },
  {
    path: 'form/:id',
    component: DietFormComponent,
    resolve: {
      details: dietResolver
    },
  }
]
