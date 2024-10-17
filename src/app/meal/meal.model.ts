import { IdentifiedItem } from "../shared/table-component-abstract.directive";
import { Ingredient } from "../ingredient/ingredient";

export type MealModel = IdentifiedItem & {
  name: string;
  description: string;
  rating: number;
  ingredients: Ingredient[]
}

export type MealRequest = Omit<MealModel, 'ingredients'> & {
  ingredient_ids: number[];
}

