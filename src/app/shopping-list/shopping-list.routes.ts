import { Routes } from "@angular/router";
import { ShoppingListDetailsComponent } from "./shopping-list-details/shopping-list-details.component";
import { shoppingListResolver } from "./shopping-list.resolver";
import { ShoppingListFormComponent } from "./shopping-list-form/shopping-list-form.component";
import { ShoppingListTableComponent } from "./shopping-list-table/shopping-list-table.component";
import { shoppingListsResolver } from "./shopping-lists.resolver";
import { shoppingListFormGuard } from "./shopping-list-form.guard";

export const ITEMS_KEY: string = 'ITEMS';
export const ITEM_KEY: string = 'ITEM';

export const shoppingListRoutes: Routes = [
  {
    path: 'all',
    component: ShoppingListTableComponent,
    resolve: {
      [ITEMS_KEY]: shoppingListsResolver
    },
  },
  {
    path: 'details/:id',
    component: ShoppingListDetailsComponent,
    resolve: {
      [ITEM_KEY]: shoppingListResolver
    },
  },
  {
    path: 'form/:id',
    component: ShoppingListFormComponent,
    canActivate: [
      shoppingListFormGuard
    ],
    resolve: {
      [ITEM_KEY]: shoppingListResolver
    },
  },
  {
    path: 'form',
    pathMatch: 'full',
    redirectTo: 'form/'
  },
]
