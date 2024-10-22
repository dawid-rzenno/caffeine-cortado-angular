import { ResolveFn } from '@angular/router';
import { PaginatedResponse } from "../shared/models/paginated-response";
import { inject } from "@angular/core";
import { BeverageService } from "./beverage.service";
import { ItemBase } from "../shared/item-table-component-abstract.directive";

export const beverageResolver: ResolveFn<unknown | PaginatedResponse<ItemBase>> = (route) => {
  const id: string | null = route.paramMap.get('id');
  const service: BeverageService = inject(BeverageService);
  return id ? service.get(id) : service.create()
};
