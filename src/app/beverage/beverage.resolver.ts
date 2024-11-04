import { ResolveFn } from '@angular/router';
import { PaginatedResponse } from "../shared/models/paginated-response";
import { inject } from "@angular/core";
import { BeverageService } from "./beverage.service";

import { ItemBase } from "../shared/models/item-base";
import { Beverage } from "./beverage";

export const beverageResolver: ResolveFn<Beverage> = (route) => {
  const id: string | null = route.paramMap.get('id');
  const service: BeverageService = inject(BeverageService);
  return id ? service.get(id) : service.create()
};
