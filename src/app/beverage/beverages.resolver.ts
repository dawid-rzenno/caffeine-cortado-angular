import { ResolveFn } from '@angular/router';
import { PaginatedResponse } from "../shared/models/paginated-response";
import { inject } from "@angular/core";
import { BeverageService } from "./beverage.service";

export const beveragesResolver: ResolveFn<PaginatedResponse<unknown>> = () => {
  const service: BeverageService = inject(BeverageService);
  return service.getAll()
};
