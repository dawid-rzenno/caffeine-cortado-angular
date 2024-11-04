import { ItemBase } from "../shared/models/item-base";
import { Exercise, ExercisePatch } from "../exercise/exercise";

type WorkoutBase = {
  name: string;
}

export type Workout = ItemBase & WorkoutBase & {
  exercises: Exercise[]
}

export type WorkoutPatch = ItemBase & Partial<WorkoutBase & {
  exercises: ExercisePatch[];
}>
