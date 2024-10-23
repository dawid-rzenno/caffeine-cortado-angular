import { ResolveFn } from '@angular/router';
import { PaginatedResponse } from "../shared/models/paginated-response";
import { inject } from "@angular/core";
import { ExerciseService } from "./exercise.service";
import { ItemBase } from "../shared/abstracts/item-table-component-abstract.directive";

export const exercisesResolver: ResolveFn<unknown | PaginatedResponse<ItemBase>> = () => {
  const service: ExerciseService = inject(ExerciseService);
  return service.getAll()
};
