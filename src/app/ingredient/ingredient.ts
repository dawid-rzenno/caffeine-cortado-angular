import { ItemBase } from "../shared/models/item-base";
import { NutritionBase } from "../nutrition/models/nutrition";

type IngredientBase = NutritionBase & {
  name: string;
  price: number;
};

export type Ingredient = ItemBase & IngredientBase;

export type IngredientPatch = ItemBase & Partial<IngredientBase & {}>;
