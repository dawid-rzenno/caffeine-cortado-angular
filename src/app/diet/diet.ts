import { Meal, MealPatch } from "../meal/meal";
import { ItemBase } from "../shared/models/item-base";

type DietBase = {
  name: string;
};

export type Diet = ItemBase &
  DietBase & {
    meals: Meal[];
  };

export type DietPatch = ItemBase &
  DietBase & {
    meals: MealPatch[];
  };
