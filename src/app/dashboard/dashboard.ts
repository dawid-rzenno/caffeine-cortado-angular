import { Goal } from "../goals/goal";
import { Diet } from "../diets/diet";
import { Training } from "../trainings/training";

export type MotivationalQuote = {
	id: number;
	quote: string;
	author: string;
	userId: number;
	timestamp: Date;
}

export type Dashboard = {
	motivationalQuote: MotivationalQuote;
	goals: Goal[];
	diet: Diet;
	training: Training;
}
