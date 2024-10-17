import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { inject } from "@angular/core";
import { MealModel } from "./meal.model";
import { MealService } from "./meal.service";

export const mealResolver: ResolveFn<MealModel> = (route: ActivatedRouteSnapshot) => {
  return inject(MealService).get(route.paramMap.get('id') as string);
};
