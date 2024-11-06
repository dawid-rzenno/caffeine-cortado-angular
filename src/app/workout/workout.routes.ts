import { Route } from "@angular/router";
import { WorkoutFormComponent } from "./workout-form/workout-form.component";
import { WorkoutDetailsComponent } from "./workout-details/workout-details.component";
import { WorkoutTableComponent } from "./workout-table/workout-table.component";
import { workoutResolver } from "./workout.resolver";
import { workoutsResolver } from "./workouts.resolver";
import { workoutFormGuard } from "./workout-form.guard";

import { ITEM_KEY, ITEMS_KEY } from "../shopping-list/route-data-keys";

export const workoutRoutes: Route[] = [
  {
    path: "list",
    component: WorkoutTableComponent,
    resolve: {
      [ITEMS_KEY]: workoutsResolver,
    },
  },
  {
    path: "details/:id",
    component: WorkoutDetailsComponent,
    resolve: {
      [ITEM_KEY]: workoutResolver,
    },
  },
  {
    path: "form/:id",
    component: WorkoutFormComponent,
    canActivate: [workoutFormGuard],
    resolve: {
      [ITEM_KEY]: workoutResolver,
    },
  },
  {
    path: "form",
    pathMatch: "full",
    redirectTo: "form/",
  },
];
