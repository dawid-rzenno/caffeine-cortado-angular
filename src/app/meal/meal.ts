import { ItemBase } from "../shared/abstracts/item-table-component-abstract.directive";
import { Ingredient, IngredientPatch } from "../ingredient/ingredient";

type MealBase = {
  name: string;
  rating: number;
}

export type Meal = ItemBase & MealBase & {
  ingredients: Ingredient[]
}

export type MealPatch = ItemBase & Partial<MealBase & {
  ingredients: IngredientPatch[]
}>;
