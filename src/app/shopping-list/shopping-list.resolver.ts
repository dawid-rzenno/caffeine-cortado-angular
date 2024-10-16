import { ResolveFn } from '@angular/router';
import { inject } from "@angular/core";
import { ShoppingListDetails } from "./shopping-list";
import { ShoppingListService } from "./shopping-list.service";

export const shoppingListResolver: ResolveFn<ShoppingListDetails> = (route) => {
  return inject(ShoppingListService).get(route.paramMap.get('id') as string);
};
