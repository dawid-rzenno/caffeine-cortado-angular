import { Route } from "@angular/router";
import { MealFormComponent } from "./meal-form/meal-form.component";
import { MealDetailsComponent } from "./meal-details/meal-details.component";
import { mealResolver } from "./meal.resolver";
import { MealTableComponent } from "./meal-table/meal-table.component";
import { mealsResolver } from "./meals.resolver";
import { mealFormGuard } from "./meal-form.guard";

export const mealRoutes: Route[] = [
  {
    path: 'list',
    component: MealTableComponent,
    resolve: {
      paginatedResponse: mealsResolver
    },
  },
  {
    path: 'details/:id',
    component: MealDetailsComponent,
    resolve: {
      details: mealResolver
    },
  },
  {
    path: 'form/:id',
    component: MealFormComponent,
    canActivate: [
      mealFormGuard
    ],
    resolve: {
      details: mealResolver
    },
  },
  {
    path: 'form',
    pathMatch: 'full',
    redirectTo: 'form/'
  },
]
