import { ItemBase } from "../shared/models/item-base";

type WorkoutBase = {}

export type Workout = ItemBase & WorkoutBase & {}

export type WorkoutPatch = ItemBase & Partial<WorkoutBase & {}>
