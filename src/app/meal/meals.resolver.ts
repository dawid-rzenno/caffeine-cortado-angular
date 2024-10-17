import { ResolveFn } from '@angular/router';
import { inject } from "@angular/core";
import { MealModel } from "./meal.model";
import { MealService } from "./meal.service";
import { PaginatedResponse } from "../shared/models/paginated-response";
import { MatPaginatorConfig } from "../shared/models/mat-paginator-config";

export const mealsResolver: ResolveFn<PaginatedResponse<MealModel>> = () => {
  return inject(MealService).getAll(MatPaginatorConfig.defaultPaginationParams);
};
