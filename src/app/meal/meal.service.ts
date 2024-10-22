import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Meal, MealPatch } from "./meal";
import { ItemServiceAbstract } from "../shared/item-table-component-abstract.directive";

@Injectable({
  providedIn: 'root'
})
export class MealService extends ItemServiceAbstract<Meal, MealPatch> {
  protected readonly endpointUrl: string = `${environment.apiUrl}/food/meal`;

  constructor(http: HttpClient) {
    super(http);
  }
}
