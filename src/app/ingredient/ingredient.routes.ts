import { Route } from "@angular/router";
import { ingredientResolver } from "./ingredient.resolver";
import { IngredientDetailsComponent } from "./ingredient-details/ingredient-details.component";
import { IngredientFormComponent } from "./ingredient-form/ingredient-form.component";
import { IngredientTableComponent } from "./ingredient-table/ingredient-table.component";
import { ingredientsResolver } from "./ingredients.resolver";
import { ingredientFormGuard } from "./ingredient-form.guard";

import { ITEM_KEY, ITEMS_KEY } from "../shopping-list/route-data-keys";

export const ingredientRoutes: Route[] = [
  {
    path: "list",
    component: IngredientTableComponent,
    resolve: {
      [ITEMS_KEY]: ingredientsResolver,
    },
  },
  {
    path: "details/:id",
    component: IngredientDetailsComponent,
    resolve: {
      [ITEM_KEY]: ingredientResolver,
    },
  },
  {
    path: "form/:id",
    component: IngredientFormComponent,
    canActivate: [ingredientFormGuard],
    resolve: {
      [ITEM_KEY]: ingredientResolver,
    },
  },
  {
    path: "form",
    pathMatch: "full",
    redirectTo: "form/",
  },
];
