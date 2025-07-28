export type MassUnit = {
	id: number;
	name: string;
	userId: number;
	timestamp: Date;
}

export type NutrientType = {
	id: number;
	name: string;
	massUnitId: number;
	massUnit: MassUnit;
	userId: number;
	timestamp: Date;
}
