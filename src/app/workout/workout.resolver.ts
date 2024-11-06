import { ResolveFn } from "@angular/router";
import { inject } from "@angular/core";
import { WorkoutService } from "./workout.service";
import { Workout } from "./workout";

export const workoutResolver: ResolveFn<Workout> = (route) => {
  return inject(WorkoutService).get(route.paramMap.get("id") as string);
};
