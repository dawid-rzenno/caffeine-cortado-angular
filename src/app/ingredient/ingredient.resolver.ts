import { ResolveFn } from "@angular/router";
import { inject } from "@angular/core";
import { IngredientService } from "./ingredient.service";
import { Ingredient } from "./ingredient";

export const ingredientResolver: ResolveFn<Ingredient> = (route) => {
  return inject(IngredientService).get(route.paramMap.get("id") as string);
};
