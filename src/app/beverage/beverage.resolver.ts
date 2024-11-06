import { ResolveFn } from "@angular/router";
import { inject } from "@angular/core";
import { BeverageService } from "./beverage.service";
import { Beverage } from "./beverage";

export const beverageResolver: ResolveFn<Beverage> = (route) => {
  const id: string | null = route.paramMap.get("id");
  const service: BeverageService = inject(BeverageService);
  return id ? service.get(id) : service.create();
};
