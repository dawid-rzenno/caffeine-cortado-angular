import { ResolveFn } from '@angular/router';
import { inject } from "@angular/core";
import { IngredientDetails } from "./ingredient";
import { IngredientService } from "./ingredient.service";

export const ingredientResolver: ResolveFn<IngredientDetails> = (route) => {
  return inject(IngredientService).get(route.paramMap.get('id') as string);

};
