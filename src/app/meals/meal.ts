import { Ingredient } from "../ingredients/ingredient";
import { DietMeal } from "../diets/diet/diet-meals/diet-meal";

export type Meal = {
	id: number;
	name: string;
	timestamp: Date;
	userId: number;
	ingredients: Ingredient[];
	dietMeal: DietMeal;
}
