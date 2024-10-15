import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { inject } from "@angular/core";
import { MealDetails } from "./meal";
import { MealService } from "./meal.service";

export const mealResolver: ResolveFn<MealDetails> = (route: ActivatedRouteSnapshot) => {
  const id: string | null = route.paramMap.get('id');
  const service: MealService = inject(MealService);
  return id ? service.get(id) : service.create()
};
