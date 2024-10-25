import { Ingredient, IngredientPatch } from "../ingredient/ingredient";
import { ItemBase } from "../shared/models/item-base";
import { Nutrition } from "../nutrition-table/item-nutrition";

type MealBase = Nutrition & {
  name: string;
  rating: number;
}

export type Meal = ItemBase & MealBase & {
  ingredients: Ingredient[]
}

export type MealPatch = ItemBase & Partial<MealBase & {
  ingredients: IngredientPatch[]
}>;
