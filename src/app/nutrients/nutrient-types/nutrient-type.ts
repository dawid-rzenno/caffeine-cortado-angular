import { MassUnit } from "../../mass-units/mass-unit";
import { ItemBase, ItemUpdateBase } from "../../shared/item-base";

export type NutrientType = ItemBase & {
	name: string;
	massUnitId: number;
	massUnit: MassUnit;
}

export type NutrientTypeDetails = NutrientType;

export type CreateNutrientTypePayload = Omit<NutrientType, keyof ItemBase>;

export type UpdateNutrientTypePayload = Omit<NutrientType, keyof ItemUpdateBase>;
