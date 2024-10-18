import { Route } from "@angular/router";
import { ingredientResolver } from "./ingredient.resolver";
import { IngredientDetailsComponent } from "./ingredient-details/ingredient-details.component";
import { IngredientFormComponent } from "./ingredient-form/ingredient-form.component";
import { IngredientTableComponent } from "./ingredient-table/ingredient-table.component";
import { ingredientsResolver } from "./ingredients.resolver";
import { ingredientFormGuard } from "./ingredient-form.guard";
import { DATA_KEY, PAGINATED_DATA_KEY } from "../shopping-list/shopping-list.routes";

export const ingredientRoutes: Route[] = [
  {
    path: 'list',
    component: IngredientTableComponent,
    resolve: {
      [PAGINATED_DATA_KEY]: ingredientsResolver
    },
  },
  {
    path: 'details/:id',
    component: IngredientDetailsComponent,
    resolve: {
      [DATA_KEY]: ingredientResolver
    },
  },
  {
    path: 'form/:id',
    component: IngredientFormComponent,
    canActivate: [
      ingredientFormGuard
    ],
    resolve: {
      [DATA_KEY]: ingredientResolver
    },
  },
  {
    path: 'form',
    pathMatch: 'full',
    redirectTo: 'form/'
  },
]
