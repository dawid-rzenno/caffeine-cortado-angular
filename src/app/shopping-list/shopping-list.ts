import { Ingredient, IngredientPatch } from "../ingredient/ingredient";
import { ItemBase } from "../shared/models/item-base";

type ShoppingListBase = {
  name: string;
};

export type ShoppingList = ItemBase & ShoppingListBase & {
  ingredients: Ingredient[]
};

export type ShoppingListPatch = ItemBase & Partial<ShoppingListBase & {
  ingredients: IngredientPatch[]
}>;
