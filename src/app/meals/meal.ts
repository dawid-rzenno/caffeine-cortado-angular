import { Ingredient } from "./meal/meal.component";

export type Meal = {
	id: number;
	name: string;
	timestamp: Date;
	userId: number;
	ingredients: Ingredient[];
}
