import { Route } from "@angular/router";
import { WorkoutFormComponent } from "./workout-form/workout-form.component";
import { WorkoutDetailsComponent } from "./workout-details/workout-details.component";
import { WorkoutTableComponent } from "./workout-table/workout-table.component";
import { workoutResolver } from "./workout.resolver";
import { workoutsResolver } from "./workouts.resolver";

export const workoutRoutes: Route[] = [
  {
    path: 'list',
    component: WorkoutTableComponent,
    resolve: {
      paginatedResponse: workoutsResolver
    },
  },
  {
    path: 'details/:id',
    component: WorkoutDetailsComponent,
    resolve: {
      details: workoutResolver
    },
  },
  {
    path: 'form/:id',
    component: WorkoutFormComponent,
    resolve: {
      details: workoutResolver
    },
  }
]
