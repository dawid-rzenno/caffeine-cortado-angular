import { ItemBase, ItemUpdateBase } from "../shared/item-base";

export type Training = ItemBase & {
	name: string;
}

export type TrainingDetails = Training;

export type CreateTrainingPayload = Omit<Training, keyof ItemBase>

export type UpdateTrainingPayload = Omit<Training, keyof ItemUpdateBase>

