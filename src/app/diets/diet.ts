import { Meal } from "../meals/meal";

export type Diet = {
	id: number,
	name: string,
	userId: number,
	timestamp: Date,
	meals: Meal[],
}
