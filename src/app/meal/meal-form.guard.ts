import { CanActivateFn, RedirectCommand, Router } from '@angular/router';
import { inject } from "@angular/core";
import { map } from "rxjs";
import { MealService } from "./meal.service";
import { MealModel } from "./meal.model";

export const mealFormGuard: CanActivateFn = (route, state) => {
  const service: MealService = inject(MealService);
  const router: Router = inject(Router);

  return route.paramMap.get('id')
    ? true
    : service.create().pipe(
    map((meal: MealModel) => new RedirectCommand(
      router.createUrlTree([state.url, meal.id])
    ))
  );
};
