import { Routes } from "@angular/router";
import { ShoppingListDetailsComponent } from "./shopping-list-details/shopping-list-details.component";
import { shoppingListResolver } from "./shopping-list.resolver";
import { ShoppingListFormComponent } from "./shopping-list-form/shopping-list-form.component";
import { ShoppingListTableComponent } from "./shopping-list-table/shopping-list-table.component";
import { shoppingListsResolver } from "./shopping-lists.resolver";
import { shoppingListFormGuard } from "./shopping-list-form.guard";

export const PAGINATED_DATA_KEY: string = 'TABLE_DATA_KEY';
export const DATA_KEY: string = 'FORM_DATA_KEY';

export const shoppingListRoutes: Routes = [
  {
    path: 'all',
    component: ShoppingListTableComponent,
    resolve: {
      [PAGINATED_DATA_KEY]: shoppingListsResolver
    },
  },
  {
    path: 'details/:id',
    component: ShoppingListDetailsComponent,
    resolve: {
      [DATA_KEY]: shoppingListResolver
    },
  },
  {
    path: 'form/:id',
    component: ShoppingListFormComponent,
    canActivate: [
      shoppingListFormGuard
    ],
    resolve: {
      [DATA_KEY]: shoppingListResolver
    },
  },
  {
    path: 'form',
    pathMatch: 'full',
    redirectTo: 'form/'
  },
]
