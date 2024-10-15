import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { inject } from "@angular/core";
import { Meal, MealDetails } from "./meal";
import { MealService } from "./meal.service";
import { PaginatedResponse } from "../shared/models/paginated-response";
import { MatPaginatorConfig } from "../shared/models/mat-paginator-config";

export const mealResolver: ResolveFn<MealDetails | PaginatedResponse<Meal>> = (route: ActivatedRouteSnapshot) => {
  const id: string | null = route.paramMap.get('id');
  const service: MealService = inject(MealService);
  return id ? service.get(id) : service.create()
};
