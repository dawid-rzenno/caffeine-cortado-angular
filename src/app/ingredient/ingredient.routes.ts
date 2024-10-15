import { Route } from "@angular/router";
import { ingredientResolver } from "./ingredient.resolver";
import { IngredientDetailsComponent } from "./ingredient-details/ingredient-details.component";
import { IngredientFormComponent } from "./ingredient-form/ingredient-form.component";
import { IngredientTableComponent } from "./ingredient-table/ingredient-table.component";
import { ingredientsResolver } from "./ingredients.resolver";

export const ingredientRoutes: Route[] = [
  {
    path: 'list',
    component: IngredientTableComponent,
    resolve: {
      paginatedResponse: ingredientsResolver
    },
  },
  {
    path: 'details/:id',
    component: IngredientDetailsComponent,
    resolve: {
      details: ingredientResolver
    },
  },
  {
    path: 'form/:id',
    component: IngredientFormComponent,
    resolve: {
      details: ingredientResolver
    },
  }
]
