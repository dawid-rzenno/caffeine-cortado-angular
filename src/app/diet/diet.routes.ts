import { DietDetailsComponent } from "./diet-details/diet-details.component";
import { dietResolver } from "./diet.resolver";
import { DietFormComponent } from "./diet-form/diet-form.component";
import { Routes } from "@angular/router";
import { DietTableComponent } from "./diet-table/diet-table.component";
import { dietsResolver } from "./diets.resolver";
import { DATA_KEY, PAGINATED_DATA_KEY } from "../shopping-list/shopping-list.routes";

export const dietRoutes: Routes = [
  {
    path: 'list',
    component: DietTableComponent,
    resolve: {
      [PAGINATED_DATA_KEY]: dietsResolver
    },
  },
  {
    path: 'details/:id',
    component: DietDetailsComponent,
    resolve: {
      [DATA_KEY]: dietResolver
    },
  },
  {
    path: 'form/:id',
    component: DietFormComponent,
    resolve: {
      [DATA_KEY]: dietResolver
    },
  },
  {
    path: 'new',
    pathMatch: 'full',
    redirectTo: 'form/'
  },
]
