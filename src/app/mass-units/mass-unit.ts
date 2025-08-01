import { ItemBase, ItemUpdateBase } from "../shared/item-base";

export type MassUnit = ItemBase & {
	name: string;
}

export type MassUnitDetails = MassUnit;

export type CreateMassUnitPayload = Omit<MassUnit, keyof ItemBase>;

export type UpdateMassUnitPayload = Omit<MassUnit, keyof ItemUpdateBase>;
