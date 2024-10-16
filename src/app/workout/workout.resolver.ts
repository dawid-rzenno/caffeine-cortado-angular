import { ResolveFn } from '@angular/router';
import { inject } from "@angular/core";
import { WorkoutService } from "./workout.service";

export const workoutResolver: ResolveFn<unknown> = (route) => {
  return inject(WorkoutService).get(route.paramMap.get('id') as string);
};
