import { Routes } from "@angular/router";
import { ShoppingListDetailsComponent } from "./shopping-list-details/shopping-list-details.component";
import { shoppingListResolver } from "./shopping-list.resolver";
import { ShoppingListFormComponent } from "./shopping-list-form/shopping-list-form.component";
import { ShoppingListTableComponent } from "./shopping-list-table/shopping-list-table.component";
import { shoppingListsResolver } from "./shopping-lists.resolver";

export const shoppingListRoutes: Routes = [
  {
    path: 'all',
    component: ShoppingListTableComponent,
    resolve: {
      paginatedResponse: shoppingListsResolver
    },
  },
  {
    path: 'details/:id',
    component: ShoppingListDetailsComponent,
    resolve: {
      details: shoppingListResolver
    },
  },
  {
    path: 'form/:id',
    component: ShoppingListFormComponent,
    resolve: {
      details: shoppingListResolver
    },
  }
]
