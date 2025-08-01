import { CreateAssignationPayloadBase } from "../../../shared/assignation/assignation.service.abstract";

export type CreateDietMealPayload = CreateAssignationPayloadBase & {
	mealIndex: number;
	mealDayIndex: number;
}
