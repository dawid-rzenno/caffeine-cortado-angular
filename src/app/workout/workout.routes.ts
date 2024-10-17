import { Route } from "@angular/router";
import { WorkoutFormComponent } from "./workout-form/workout-form.component";
import { WorkoutDetailsComponent } from "./workout-details/workout-details.component";
import { WorkoutTableComponent } from "./workout-table/workout-table.component";
import { workoutResolver } from "./workout.resolver";
import { workoutsResolver } from "./workouts.resolver";
import { workoutFormGuard } from "./workout-form.guard";
import { FORM_DATA_KEY, TABLE_DATA_KEY } from "../shopping-list/shopping-list.routes";

export const workoutRoutes: Route[] = [
  {
    path: 'list',
    component: WorkoutTableComponent,
    resolve: {
      [TABLE_DATA_KEY]: workoutsResolver
    },
  },
  {
    path: 'details/:id',
    component: WorkoutDetailsComponent,
    resolve: {
      [FORM_DATA_KEY]: workoutResolver
    },
  },
  {
    path: 'form/:id',
    component: WorkoutFormComponent,
    canActivate: [
      workoutFormGuard
    ],
    resolve: {
      [FORM_DATA_KEY]: workoutResolver
    },
  },
  {
    path: 'form',
    pathMatch: 'full',
    redirectTo: 'form/'
  },
]
