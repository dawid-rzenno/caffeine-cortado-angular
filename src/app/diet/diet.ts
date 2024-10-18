import { IdentifiedItem } from "../shared/item-table-component-abstract.directive";
import { Meal, MealPatchRequest } from "../meal/meal";

type DietBase = {
  name: string;
  description: string;
};

export type Diet = IdentifiedItem & DietBase & {
  meals: Meal[];
};

export type DietPatchRequest = IdentifiedItem & Partial<DietBase & {
  meals: MealPatchRequest[];
}>;

export type DietPatchResponse = Partial<Diet>;
