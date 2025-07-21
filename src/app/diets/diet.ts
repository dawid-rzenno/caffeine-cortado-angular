import { Meal } from "./diet/diet-meals/meal";

export type Diet = {
	id: number,
	name: string,
	userId: number,
	timestamp: Date,
	meals: Meal[],
}
