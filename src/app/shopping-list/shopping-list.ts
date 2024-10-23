import { ItemBase } from "../shared/abstracts/item-table-component-abstract.directive";
import { Ingredient, IngredientPatch } from "../ingredient/ingredient";

type ShoppingListBase = {
  name: string;
};

export type ShoppingList = ItemBase & ShoppingListBase & {
  ingredients: Ingredient[]
};

export type ShoppingListPatch = ItemBase & Partial<ShoppingListBase & {
  ingredients: IngredientPatch[]
}>;
