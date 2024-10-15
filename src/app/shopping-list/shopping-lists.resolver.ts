import { ResolveFn } from '@angular/router';
import { inject } from "@angular/core";
import { ShoppingListService } from "./shopping-list.service";
import { PaginatedResponse } from "../shared/models/paginated-response";

export const shoppingListsResolver: ResolveFn<PaginatedResponse<unknown>> = () => {
  const service: ShoppingListService = inject(ShoppingListService);
  return service.getAll()
};
