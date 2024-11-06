import { ItemBase } from "../shared/models/item-base";

type ExerciseBase = {
  name: string;
};

export type Exercise = ItemBase & ExerciseBase & {};

export type ExercisePatch = ItemBase & ExerciseBase & {};
