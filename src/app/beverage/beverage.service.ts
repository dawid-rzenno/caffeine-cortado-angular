import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { ItemBase } from "../shared/models/item-base";
import { ItemServiceAbstract } from "../shared/abstracts/item-service.abstract";

@Injectable({
  providedIn: 'root'
})
export class BeverageService extends ItemServiceAbstract<ItemBase, ItemBase> {
  protected readonly endpointUrl: string = `${environment.apiUrl}/food/beverage`;

  constructor(protected override http: HttpClient) {
    super(http);
  }
}
