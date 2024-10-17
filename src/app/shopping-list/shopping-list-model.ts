import { IdentifiedItem } from "../shared/table-component-abstract.directive";
import { Ingredient } from "../ingredient/ingredient";

export type ShoppingListModel = IdentifiedItem & {
  name: string;
  description: string;
  ingredients: Ingredient[]
}

export type ShoppingListRequest = Omit<ShoppingListModel, 'ingredients'> & {
  ingredient_ids: number[];
}
