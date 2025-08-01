import { Ingredient } from "../ingredients/ingredient";
import { ItemBase, ItemUpdateBase } from "../shared/item-base";

export type Meal = ItemBase & {
	name: string;
}

export type MealDetails = Meal & {
	ingredients: Ingredient[];
}

export type CreateMealPayload = Omit<Meal, keyof ItemBase>

export type UpdateMealPayload = Omit<Meal, keyof ItemUpdateBase>
