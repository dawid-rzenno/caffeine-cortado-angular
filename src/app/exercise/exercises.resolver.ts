import { ResolveFn } from '@angular/router';
import { PaginatedResponse } from "../shared/models/paginated-response";
import { inject } from "@angular/core";
import { ExerciseService } from "./exercise.service";
import { Exercise } from "./exercise";

export const exercisesResolver: ResolveFn<PaginatedResponse<Exercise>> = () => {
  const service: ExerciseService = inject(ExerciseService);
  return service.getAll()
};
