import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Ingredient, IngredientPatch } from "./ingredient";
import { ItemServiceAbstract } from "../shared/item-table-component-abstract.directive";

@Injectable({
  providedIn: 'root'
})
export class IngredientService extends ItemServiceAbstract<Ingredient, IngredientPatch> {
  protected readonly endpointUrl: string = `${environment.apiUrl}/food/ingredient`;

  constructor(http: HttpClient) {
    super(http);
  }
}
