import { Injectable } from '@angular/core';
import { Diet, DietPatch } from "./diet";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { ItemServiceAbstract } from "../shared/abstracts/item-service.abstract";

@Injectable({
  providedIn: 'root'
})
export class DietService extends ItemServiceAbstract<Diet, DietPatch> {
  protected readonly endpointUrl: string = `${environment.apiUrl}/food/diet`;

  constructor(http: HttpClient) {
    super(http);
  }
}
