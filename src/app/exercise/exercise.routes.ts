import { Route } from "@angular/router";
import { ExerciseFormComponent } from "./exercise-form/exercise-form.component";
import { ExerciseDetailsComponent } from "./exercise-details/exercise-details.component";
import { ExerciseTableComponent } from "./exercise-table/exercise-table.component";
import { exerciseResolver } from "./exercise.resolver";
import { exercisesResolver } from "./exercises.resolver";

export const exerciseRoutes: Route[] = [
  {
    path: 'list',
    component: ExerciseTableComponent,
    resolve: {
      paginatedResponse: exercisesResolver
    },
  },
  {
    path: 'details/:id',
    component: ExerciseDetailsComponent,
    resolve: {
      details: exerciseResolver
    },
  },
  {
    path: 'form/:id',
    component: ExerciseFormComponent,
    resolve: {
      details: exerciseResolver
    },
  }
]
