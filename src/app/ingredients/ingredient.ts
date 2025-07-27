import { Nutrient } from "../nutrients/nutrient";

export type Ingredient = {
	id: number,
	name: string,
	userId: number,
	timestamp: Date,
	nutrients: Nutrient[],
};
