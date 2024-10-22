import { ItemBase } from "../shared/item-table-component-abstract.directive";
import { Meal, MealPatch } from "../meal/meal";

type DietBase = {
  name: string;
}

export type Diet = ItemBase & DietBase & {
  meals: Meal[];
}

export type DietPatch = ItemBase & DietBase & {
  meals: MealPatch[];
}
