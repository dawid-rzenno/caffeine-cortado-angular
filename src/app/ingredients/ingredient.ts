import { Nutrient } from "../nutrients/nutrient";
import { ItemBase, ItemUpdateBase } from "../shared/item-base";

export type Ingredient = ItemBase & {
	name: string,
};

export type IngredientDetails = Ingredient & {
	nutrients: Nutrient[],
};

export type CreateIngredientPayload = Omit<Ingredient, keyof ItemBase>;

export type UpdateIngredientPayload = Omit<Ingredient, keyof ItemUpdateBase>;
