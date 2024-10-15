import { ResolveFn } from '@angular/router';
import { inject } from "@angular/core";
import { IngredientDetails } from "./ingredient";
import { IngredientService } from "./ingredient.service";

export const ingredientResolver: ResolveFn<IngredientDetails> = (route) => {
  const id: string | null = route.paramMap.get('id');
  const service: IngredientService = inject(IngredientService);
  return id ? service.get(id) : service.create()
};
