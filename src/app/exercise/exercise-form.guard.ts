import { CanActivateFn, RedirectCommand, Router } from '@angular/router';
import { inject } from "@angular/core";
import { map } from "rxjs";
import { ExerciseService } from "./exercise.service";
import { ItemBase } from "../shared/item-table-component-abstract.directive";

export const exerciseFormGuard: CanActivateFn = (route, state) => {
  const service: ExerciseService = inject(ExerciseService);
  const router: Router = inject(Router);

  return route.paramMap.get('id')
    ? true
    : service.create().pipe(
    map((exercise: ItemBase) => new RedirectCommand(
      router.createUrlTree([state.url, exercise.id])
    ))
  );
};
