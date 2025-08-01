import { Meal } from "../meals/meal";
import { ItemBase, ItemUpdateBase } from "../shared/item-base";

export type Diet = ItemBase & {
	name: string,
}

export type DietDetails = Diet & {
	meals: Meal[],
}

export type CreateDietPayload = Omit<Diet, keyof ItemBase>;

export type UpdateDietPayload = Omit<Diet, keyof ItemUpdateBase>;
