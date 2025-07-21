import { Nutrient } from "./ingredients.service";

export type Ingredient = {
	id: number,
	name: string,
	userId: number,
	timestamp: Date,
	nutrients: Nutrient[],
};
