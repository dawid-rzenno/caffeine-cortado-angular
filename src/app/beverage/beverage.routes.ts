import { Route } from "@angular/router";
import { BeverageTableComponent } from "./beverage-table/beverage-table.component";
import { BeverageFormComponent } from "./beverage-form/beverage-form.component";
import { BeverageDetailsComponent } from "./beverage-details/beverage-details.component";
import { beverageResolver } from "./beverage.resolver";
import { beveragesResolver } from "./beverages.resolver";
import { beverageFormGuard } from "./beverage-form.guard";

export const beverageRoutes: Route[] = [
  {
    path: 'list',
    component: BeverageTableComponent,
    resolve: {
      paginatedResponse: beveragesResolver
    },
  },
  {
    path: 'details/:id',
    component: BeverageDetailsComponent,
    resolve: {
      details: beverageResolver
    },
  },
  {
    path: 'form/:id',
    component: BeverageFormComponent,
    canActivate: [
      beverageFormGuard
    ],
    resolve: {
      details: beverageResolver
    },
  },
  {
    path: 'form',
    pathMatch: 'full',
    redirectTo: 'form/'
  },
]
