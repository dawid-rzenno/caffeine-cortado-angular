import { CanActivateFn, RedirectCommand, Router } from '@angular/router';
import { inject } from "@angular/core";
import { map } from "rxjs";
import { ShoppingListService } from "./shopping-list.service";
import { ShoppingList } from "./shopping-list";

export const shoppingListFormGuard: CanActivateFn = (route, state) => {
  const service: ShoppingListService = inject(ShoppingListService);
  const router: Router = inject(Router);

  return route.paramMap.get('id')
    ? true
    : service.create().pipe(
    map((shoppingList: ShoppingList) => new RedirectCommand(
      router.createUrlTree([state.url, shoppingList.id])
    ))
  );
};
