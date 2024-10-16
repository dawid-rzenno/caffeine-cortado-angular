import { CanActivateFn, RedirectCommand, Router } from '@angular/router';
import { inject } from "@angular/core";
import { map } from "rxjs";
import { BeverageService } from "./beverage.service";
import { DBItem } from "../shared/table-component-abstract.directive";

export const beverageFormGuard: CanActivateFn = (route, state) => {
  const service: BeverageService = inject(BeverageService);
  const router: Router = inject(Router);

  return route.paramMap.get('id')
    ? true
    : service.create().pipe(
    map((beverage: DBItem) => new RedirectCommand(
      router.createUrlTree([state.url, beverage.id])
    ))
  );
};
