import { ItemBase } from "../shared/models/item-base";

type IngredientBase = {
  name: string;
  category_id: number;
  price: number;
  quantity?: number;
  amount: number;
  calories: number;
  proteins: number;
  carbohydrates: number;
  fats: number;
};

export type Ingredient = ItemBase & IngredientBase;

export type IngredientPatch = ItemBase & Partial<IngredientBase & {}>;
