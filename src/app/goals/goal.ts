import { ItemBase, ItemUpdateBase } from "../shared/item-base";

export type Goal = ItemBase & {
	name: string;
}

export type GoalDetails = Goal;

export type CreateGoalPayload = Omit<Goal, keyof ItemBase>;

export type UpdateGoalPayload = Omit<Goal, keyof ItemUpdateBase>;
