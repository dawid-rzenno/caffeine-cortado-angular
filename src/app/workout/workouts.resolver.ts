import { ResolveFn } from "@angular/router";
import { inject } from "@angular/core";
import { WorkoutService } from "./workout.service";
import { PaginatedResponse } from "../shared/models/paginated-response";
import { Workout } from "./workout";

export const workoutsResolver: ResolveFn<PaginatedResponse<Workout>> = () => {
  const service: WorkoutService = inject(WorkoutService);
  return service.getAll();
};
