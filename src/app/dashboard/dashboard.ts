import { Goal } from "../goals/goal";

export type TrainingDay = {
	id: number;
	name: string;
	userId: number;
	timestamp: Date;
}

export type DietDay = {
	id: number;
	name: string;
	userId: number;
	timestamp: Date;
}

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
	dietDay: DietDay;
	trainingDay: TrainingDay;
}
