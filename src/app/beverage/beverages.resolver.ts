import { ResolveFn } from '@angular/router';
import { PaginatedResponse } from "../shared/models/paginated-response";
import { inject } from "@angular/core";
import { BeverageService } from "./beverage.service";
import { ItemBase } from "../shared/abstracts/item-table-component-abstract.directive";

export const beveragesResolver: ResolveFn<PaginatedResponse<ItemBase>> = () => {
  const service: BeverageService = inject(BeverageService);
  return service.getAll()
};
