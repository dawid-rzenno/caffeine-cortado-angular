import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { ItemServiceAbstract } from "../shared/item-table-component-abstract.directive";
import { ShoppingList, ShoppingListPatch } from "./shopping-list";

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService extends ItemServiceAbstract<ShoppingList, ShoppingListPatch>{
  protected readonly endpointUrl: string = `${environment.apiUrl}/food/shopping-list`;

  constructor(http: HttpClient) {
    super(http);
  }
}
