import { ResolveFn } from '@angular/router';
import { inject } from "@angular/core";
import { Ingredient } from "./ingredient";
import { IngredientService } from "./ingredient.service";

export const ingredientResolver: ResolveFn<Ingredient> = (route) => {
  return inject(IngredientService).get(route.paramMap.get('id') as string);

};
