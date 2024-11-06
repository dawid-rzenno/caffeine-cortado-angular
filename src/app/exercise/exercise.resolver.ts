import { ResolveFn } from '@angular/router';
import { inject } from "@angular/core";
import { ExerciseService } from "./exercise.service";
import { Exercise } from "./exercise";

export const exerciseResolver: ResolveFn<Exercise> = (route) => {
  return inject(ExerciseService).get(route.paramMap.get('id') as string);
};
