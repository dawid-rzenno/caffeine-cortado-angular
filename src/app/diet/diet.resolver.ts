import { RedirectCommand, ResolveFn, Router } from '@angular/router';
import { inject } from "@angular/core";
import { Diet, DietDetails } from "./diet";
import { DietService } from "./diet.service";
import { map } from "rxjs";

export const dietResolver: ResolveFn<DietDetails>  = (route, state) => {

  const service: DietService = inject(DietService);
  const router: Router = inject(Router);

  return route.paramMap.get('id')
    ? service.get(route.paramMap.get('id') as string)
    : service.create().pipe(
      map((diet: Diet) => new RedirectCommand(
        router.createUrlTree([state.url, diet.id])
      ))
    );
};
