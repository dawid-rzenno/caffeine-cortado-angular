import { Route } from "@angular/router";
import { BeverageTableComponent } from "./beverage-table/beverage-table.component";
import { BeverageFormComponent } from "./beverage-form/beverage-form.component";
import { BeverageDetailsComponent } from "./beverage-details/beverage-details.component";
import { beverageResolver } from "./beverage.resolver";
import { beveragesResolver } from "./beverages.resolver";
import { beverageFormGuard } from "./beverage-form.guard";
import { FORM_DATA_KEY, TABLE_DATA_KEY } from "../shopping-list/shopping-list.routes";

export const beverageRoutes: Route[] = [
  {
    path: 'list',
    component: BeverageTableComponent,
    resolve: {
      [TABLE_DATA_KEY]: beveragesResolver
    },
  },
  {
    path: 'details/:id',
    component: BeverageDetailsComponent,
    resolve: {
      [FORM_DATA_KEY]: beverageResolver
    },
  },
  {
    path: 'form/:id',
    component: BeverageFormComponent,
    canActivate: [
      beverageFormGuard
    ],
    resolve: {
      [FORM_DATA_KEY]: beverageResolver
    },
  },
  {
    path: 'form',
    pathMatch: 'full',
    redirectTo: 'form/'
  },
]
