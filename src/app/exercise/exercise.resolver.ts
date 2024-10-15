import { ResolveFn } from '@angular/router';
import { PaginatedResponse } from "../shared/models/paginated-response";
import { inject } from "@angular/core";
import { ExerciseService } from "./exercise.service";

export const exerciseResolver: ResolveFn<unknown | PaginatedResponse<unknown>> = (route) => {
  const id: string | null = route.paramMap.get('id');
  const service: ExerciseService = inject(ExerciseService);
  return id ? service.get(id) : service.create()
};
