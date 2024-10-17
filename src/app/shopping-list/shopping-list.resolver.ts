import { ResolveFn } from '@angular/router';
import { inject } from "@angular/core";
import { ShoppingListModel } from "./shopping-list-model";
import { ShoppingListService } from "./shopping-list.service";

export const shoppingListResolver: ResolveFn<ShoppingListModel> = (route) => {
  return inject(ShoppingListService).get(route.paramMap.get('id') as string);
};
