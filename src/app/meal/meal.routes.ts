import { Route } from "@angular/router";
import { MealFormComponent } from "./meal-form/meal-form.component";
import { mealResolver } from "./meal.resolver";
import { MealTableComponent } from "./meal-table/meal-table.component";
import { mealsResolver } from "./meals.resolver";
import { mealFormGuard } from "./meal-form.guard";
import { ITEM_KEY, ITEMS_KEY } from "../shopping-list/shopping-list.routes";
import { MealDetailsComponent } from "./meal-details/meal-details.component";

export const mealRoutes: Route[] = [
  {
    path: 'list',
    component: MealTableComponent,
    resolve: {
      [ITEMS_KEY]: mealsResolver
    },
  },
  {
    path: 'details/:id',
    component: MealDetailsComponent,
    resolve: {
      [ITEM_KEY]: mealResolver
    },
  },
  {
    path: 'form/:id',
    component: MealFormComponent,
    canActivate: [
      mealFormGuard
    ],
    resolve: {
      [ITEM_KEY]: mealResolver
    },
  },
  {
    path: 'form',
    pathMatch: 'full',
    redirectTo: 'form/'
  },
]
