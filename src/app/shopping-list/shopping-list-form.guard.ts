import { CanActivateFn, RedirectCommand, Router } from '@angular/router';
import { inject } from "@angular/core";
import { map } from "rxjs";
import { ShoppingListService } from "./shopping-list.service";
import { ShoppingListModel } from "./shopping-list-model";

export const shoppingListFormGuard: CanActivateFn = (route, state) => {
  const service: ShoppingListService = inject(ShoppingListService);
  const router: Router = inject(Router);

  return route.paramMap.get('id')
    ? true
    : service.create().pipe(
    map((shoppingList: ShoppingListModel) => new RedirectCommand(
      router.createUrlTree([state.url, shoppingList.id])
    ))
  );
};
