import { MassUnit, NutrientType } from "./nutrient-types/nutrient-type";

export type Nutrient = {
	id: number;
	typeId: number;
	type: NutrientType;
	massUnitId: number;
	massUnit: MassUnit;
	timestamp: Date;
	userId: number;
};
