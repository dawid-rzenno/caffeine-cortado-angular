import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { inject } from "@angular/core";
import { MealDetails } from "./meal";
import { MealService } from "./meal.service";

export const mealResolver: ResolveFn<MealDetails> = (route: ActivatedRouteSnapshot) => {
  return inject(MealService).get(route.paramMap.get('id') as string);
};
