import { Route } from "@angular/router";
import { MealFormComponent } from "./meal-form/meal-form.component";
import { MealDetailsComponent } from "./meal-details/meal-details.component";
import { mealResolver } from "./meal.resolver";
import { MealTableComponent } from "./meal-table/meal-table.component";
import { mealsResolver } from "./meals.resolver";
import { mealFormGuard } from "./meal-form.guard";
import { FORM_DATA_KEY, TABLE_DATA_KEY } from "../shopping-list/shopping-list.routes";

export const mealRoutes: Route[] = [
  {
    path: 'list',
    component: MealTableComponent,
    resolve: {
      [TABLE_DATA_KEY]: mealsResolver
    },
  },
  {
    path: 'details/:id',
    component: MealDetailsComponent,
    resolve: {
      [FORM_DATA_KEY]: mealResolver
    },
  },
  {
    path: 'form/:id',
    component: MealFormComponent,
    canActivate: [
      mealFormGuard
    ],
    resolve: {
      [FORM_DATA_KEY]: mealResolver
    },
  },
  {
    path: 'form',
    pathMatch: 'full',
    redirectTo: 'form/'
  },
]
