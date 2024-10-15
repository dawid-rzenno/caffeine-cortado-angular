import { ResolveFn } from '@angular/router';
import { inject } from "@angular/core";
import { Ingredient } from "./ingredient";
import { IngredientService } from "./ingredient.service";
import { PaginatedResponse } from "../shared/models/paginated-response";
import { MatPaginatorConfig } from "../shared/models/mat-paginator-config";

export const ingredientsResolver: ResolveFn<PaginatedResponse<Ingredient>> = () => {
  return inject(IngredientService).getAll(MatPaginatorConfig.defaultPaginationParams);
};
