import { DietDetailsComponent } from "./diet-details/diet-details.component";
import { dietResolver } from "./diet.resolver";
import { DietFormComponent } from "./diet-form/diet-form.component";
import { Routes } from "@angular/router";
import { DietTableComponent } from "./diet-table/diet-table.component";
import { dietsResolver } from "./diets.resolver";

import { ITEM_KEY, ITEMS_KEY } from "../shopping-list/route-data-keys";

export const dietRoutes: Routes = [
  {
    path: 'list',
    component: DietTableComponent,
    resolve: {
      [ITEMS_KEY]: dietsResolver
    },
  },
  {
    path: 'details/:id',
    component: DietDetailsComponent,
    resolve: {
      [ITEM_KEY]: dietResolver
    },
  },
  {
    path: 'form/:id',
    component: DietFormComponent,
    resolve: {
      [ITEM_KEY]: dietResolver
    },
  },
  {
    path: 'new',
    pathMatch: 'full',
    redirectTo: 'form/'
  },
]
