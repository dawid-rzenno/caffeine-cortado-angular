import { IdentifiedItem } from "../shared/item-table-component-abstract.directive";
import { Ingredient, IngredientPatchRequest } from "../ingredient/ingredient";

type MealBase = {
  name: string;
  description: string;
  rating: number;
};

export type Meal = IdentifiedItem & MealBase & {
  ingredients: Ingredient[]
};

export type MealPatchRequest = IdentifiedItem & Partial<MealBase & {
  ingredients: IngredientPatchRequest[];
}>;

export type MealPatchResponse = Partial<Meal>;

