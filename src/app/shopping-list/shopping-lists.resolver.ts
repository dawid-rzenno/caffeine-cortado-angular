import { ResolveFn } from '@angular/router';
import { inject } from "@angular/core";
import { ShoppingListService } from "./shopping-list.service";
import { PaginatedResponse } from "../shared/models/paginated-response";
import { ShoppingList } from "./shopping-list";

export const shoppingListsResolver: ResolveFn<PaginatedResponse<ShoppingList>> = () => {
  const service: ShoppingListService = inject(ShoppingListService);
  return service.getAll()
};
