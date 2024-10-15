import { ResolveFn } from '@angular/router';
import { inject } from "@angular/core";
import { Diet } from "./diet";
import { DietService } from "./diet.service";
import { PaginatedResponse } from "../shared/models/paginated-response";
import { MatPaginatorConfig } from "../shared/models/mat-paginator-config";

export const dietsResolver: ResolveFn<PaginatedResponse<Diet>> = () => {
  return inject(DietService).getAll(MatPaginatorConfig.defaultPaginationParams);
};
