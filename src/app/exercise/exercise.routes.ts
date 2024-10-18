import { Route } from "@angular/router";
import { ExerciseFormComponent } from "./exercise-form/exercise-form.component";
import { ExerciseDetailsComponent } from "./exercise-details/exercise-details.component";
import { ExerciseTableComponent } from "./exercise-table/exercise-table.component";
import { exerciseResolver } from "./exercise.resolver";
import { exercisesResolver } from "./exercises.resolver";
import { exerciseFormGuard } from "./exercise-form.guard";
import { DATA_KEY, PAGINATED_DATA_KEY } from "../shopping-list/shopping-list.routes";

export const exerciseRoutes: Route[] = [
  {
    path: 'list',
    component: ExerciseTableComponent,
    resolve: {
      [PAGINATED_DATA_KEY]: exercisesResolver
    },
  },
  {
    path: 'details/:id',
    component: ExerciseDetailsComponent,
    resolve: {
      [DATA_KEY]: exerciseResolver
    },
  },
  {
    path: 'form/:id',
    component: ExerciseFormComponent,
    canActivate: [
      exerciseFormGuard
    ],
    resolve: {
      [DATA_KEY]: exerciseResolver
    },
  },
  {
    path: 'form',
    pathMatch: 'full',
    redirectTo: 'form/'
  },
]
