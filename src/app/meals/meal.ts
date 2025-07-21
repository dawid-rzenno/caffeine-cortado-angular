import { Ingredient } from "../ingredients/ingredient";

export type Meal = {
	id: number;
	name: string;
	timestamp: Date;
	userId: number;
	ingredients: Ingredient[];
}
