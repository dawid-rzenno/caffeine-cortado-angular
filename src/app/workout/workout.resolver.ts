import { ResolveFn } from '@angular/router';
import { inject } from "@angular/core";
import { WorkoutService } from "./workout.service";

export const workoutResolver: ResolveFn<unknown> = (route) => {
  const id: string | null = route.paramMap.get('id');
  const service: WorkoutService = inject(WorkoutService);
  return id ? service.get(id) : service.create()
};
