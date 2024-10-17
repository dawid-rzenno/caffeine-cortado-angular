import { IdentifiedItem } from "../shared/table-component-abstract.directive";
import { MealModel } from "../meal/meal.model";

type DietBase = {
  name: string;
  description: string;
}

export type Diet = IdentifiedItem & DietBase & {
  meals: MealModel[];
}

type PatchDietRequestBase = {
  meal_ids?: number[];
}

export type PatchDietRequest = IdentifiedItem & Partial<DietBase & PatchDietRequestBase>;
export type PatchDietResponse = Partial<Diet>;
