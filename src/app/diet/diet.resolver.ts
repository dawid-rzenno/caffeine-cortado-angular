import { ResolveFn } from '@angular/router';
import { inject } from "@angular/core";
import { DietDetails } from "./diet";
import { DietService } from "./diet.service";

export const dietResolver: ResolveFn<DietDetails> = (route) => {
  const id: string | null = route.paramMap.get('id');
  const service: DietService = inject(DietService);
  return id ? service.get(id) : service.create();
};
