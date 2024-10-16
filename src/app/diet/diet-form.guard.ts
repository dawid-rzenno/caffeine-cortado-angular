import { CanActivateFn, RedirectCommand, Router } from '@angular/router';
import { inject } from "@angular/core";
import { DietService } from "./diet.service";
import { map } from "rxjs";
import { Diet } from "./diet";

export const dietFormGuard: CanActivateFn = (route, state) => {
  const service: DietService = inject(DietService);
  const router: Router = inject(Router);

  return route.paramMap.get('id')
    ? true
    : service.create().pipe(
    map((diet: Diet) => new RedirectCommand(
      router.createUrlTree([state.url, diet.id]), { onSameUrlNavigation: 'reload' }
    ))
  );
};
