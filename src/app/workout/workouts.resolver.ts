import { ResolveFn } from '@angular/router';
import { inject } from "@angular/core";
import { WorkoutService } from "./workout.service";
import { PaginatedResponse } from "../shared/models/paginated-response";
import { ItemBase } from "../shared/abstracts/item-table-component-abstract.directive";

export const workoutsResolver: ResolveFn<PaginatedResponse<ItemBase>> = () => {
  const service: WorkoutService = inject(WorkoutService);
  return service.getAll()
};
