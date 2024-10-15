import { ResolveFn } from '@angular/router';
import { inject } from "@angular/core";
import { ShoppingListDetails } from "./shopping-list";
import { ShoppingListService } from "./shopping-list.service";

export const shoppingListResolver: ResolveFn<ShoppingListDetails> = (route) => {
  const id: string | null = route.paramMap.get('id');
  const service: ShoppingListService = inject(ShoppingListService);
  return id ? service.get(id) : service.create()
};
