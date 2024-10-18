import { CanActivateFn, RedirectCommand, Router } from '@angular/router';
import { inject } from "@angular/core";
import { map } from "rxjs";
import { IngredientService } from "./ingredient.service";
import { Ingredient } from "./ingredient";

export const ingredientFormGuard: CanActivateFn = (route, state) => {
  const service: IngredientService = inject(IngredientService);
  const router: Router = inject(Router);

  return route.paramMap.get('id')
    ? true
    : service.create().pipe(
    map((ingredient: Ingredient) => new RedirectCommand(
      router.createUrlTree([state.url, ingredient.id])
    ))
  );
};
