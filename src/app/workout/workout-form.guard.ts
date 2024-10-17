import { CanActivateFn, RedirectCommand, Router } from '@angular/router';
import { inject } from "@angular/core";
import { map } from "rxjs";
import { WorkoutService } from "./workout.service";
import { IdentifiedItem } from "../shared/table-component-abstract.directive";

export const workoutFormGuard: CanActivateFn = () => {
  const router: Router = inject(Router);

  return inject(WorkoutService).create().pipe(
    map((workout: IdentifiedItem) => new RedirectCommand(
      router.parseUrl('../form/' + workout.id)
    ))
  );
};
