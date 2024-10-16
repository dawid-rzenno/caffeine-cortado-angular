import { DietDetailsComponent } from "./diet-details/diet-details.component";
import { dietResolver } from "./diet.resolver";
import { DietFormComponent } from "./diet-form/diet-form.component";
import { RedirectCommand, Router, Routes } from "@angular/router";
import { DietTableComponent } from "./diet-table/diet-table.component";
import { dietsResolver } from "./diets.resolver";
import { DietService } from "./diet.service";
import { inject } from "@angular/core";
import { map, tap } from "rxjs";
import { Diet } from "./diet";
import { dietFormGuard } from "./diet-form.guard";

export const dietRoutes: Routes = [
  {
    path: 'list',
    component: DietTableComponent,
    resolve: {
      paginatedResponse: dietsResolver
    },
  },
  {
    path: 'details/:id',
    component: DietDetailsComponent,
    resolve: {
      details: dietResolver
    },
  },
  {
    path: 'form/:id',
    component: DietFormComponent,
    resolve: {
      details: dietResolver
    },
  },
  {
    path: 'new',
    pathMatch: 'full',
    redirectTo: 'form/'
  },
]
