import { ResolveFn } from '@angular/router';
import { PaginatedResponse } from "../shared/models/paginated-response";
import { inject } from "@angular/core";
import { ExerciseService } from "./exercise.service";

import { ItemBase } from "../shared/models/item-base";
import { Exercise } from "./exercise";

export const exerciseResolver: ResolveFn<Exercise> = (route) => {
  return inject(ExerciseService).get(route.paramMap.get('id') as string);
};
