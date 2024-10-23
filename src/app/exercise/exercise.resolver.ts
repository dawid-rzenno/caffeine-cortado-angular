import { ResolveFn } from '@angular/router';
import { PaginatedResponse } from "../shared/models/paginated-response";
import { inject } from "@angular/core";
import { ExerciseService } from "./exercise.service";

import { ItemBase } from "../shared/models/item-base";

export const exerciseResolver: ResolveFn<unknown | PaginatedResponse<ItemBase>> = (route) => {
  return inject(ExerciseService).get(route.paramMap.get('id') as string);
};
