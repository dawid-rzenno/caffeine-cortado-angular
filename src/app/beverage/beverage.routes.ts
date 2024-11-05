import { Route } from "@angular/router";
import { BeverageTableComponent } from "./beverage-table/beverage-table.component";
import { BeverageFormComponent } from "./beverage-form/beverage-form.component";
import { BeverageDetailsComponent } from "./beverage-details/beverage-details.component";
import { beverageResolver } from "./beverage.resolver";
import { beveragesResolver } from "./beverages.resolver";
import { beverageFormGuard } from "./beverage-form.guard";

import { ITEM_KEY, ITEMS_KEY } from "../shopping-list/route-data-keys";

export const beverageRoutes: Route[] = [
  {
    path: 'list',
    component: BeverageTableComponent,
    resolve: {
      [ITEMS_KEY]: beveragesResolver
    },
  },
  {
    path: 'details/:id',
    component: BeverageDetailsComponent,
    resolve: {
      [ITEM_KEY]: beverageResolver
    },
  },
  {
    path: 'form/:id',
    component: BeverageFormComponent,
    canActivate: [
      beverageFormGuard
    ],
    resolve: {
      [ITEM_KEY]: beverageResolver
    },
  },
  {
    path: 'form',
    pathMatch: 'full',
    redirectTo: 'form/'
  },
]
