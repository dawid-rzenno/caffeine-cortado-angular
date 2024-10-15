import { ResolveFn } from '@angular/router';
import { PaginatedResponse } from "../shared/models/paginated-response";
import { inject } from "@angular/core";
import { ExerciseService } from "./exercise.service";

export const exercisesResolver: ResolveFn<unknown | PaginatedResponse<unknown>> = () => {
  const service: ExerciseService = inject(ExerciseService);
  return service.getAll()
};
