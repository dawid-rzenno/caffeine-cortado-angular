import { Ingredient, IngredientPatch } from "../ingredient/ingredient";
import { ItemBase } from "../shared/models/item-base";
import { NutritionBase } from "../nutrition-information/nutrition";

type MealBase = NutritionBase & {
  name: string;
  rating: number;
}

export type Meal = ItemBase & MealBase & {
  ingredients: Ingredient[]
}

export type MealPatch = ItemBase & Partial<MealBase & {
  ingredients: IngredientPatch[]
}>;
