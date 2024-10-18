import { IdentifiedItem } from "../shared/table-component-abstract.directive";

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

export type Ingredient = IdentifiedItem & IngredientBase;

export type IngredientPatchRequest = IdentifiedItem & Partial<IngredientBase>;

export type IngredientPatchResponse = Partial<Ingredient>;
