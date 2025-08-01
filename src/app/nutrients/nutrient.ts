import { NutrientType } from "./nutrient-types/nutrient-type";
import { MassUnit } from "../mass-units/mass-unit";
import { ItemBase, ItemUpdateBase } from "../shared/item-base";

export type Nutrient = ItemBase & {
	typeId: number;
	massUnitId: number;
};

export type NutrientDetails = Nutrient & {
	massUnit: MassUnit;
	type: NutrientType;
};

export type CreateNutrientPayload = Omit<Nutrient, keyof ItemBase>

export type UpdateNutrientPayload = Omit<Nutrient, keyof ItemUpdateBase>
