import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { ItemBase } from "../shared/models/item-base";
import { ItemServiceAbstract } from "../shared/abstracts/item-service.abstract";

@Injectable({
  providedIn: 'root'
})
export class WorkoutService extends ItemServiceAbstract<ItemBase, ItemBase> {
  protected readonly endpointUrl: string = `${environment.apiUrl}/fitness/workout`;

  constructor(protected override http: HttpClient) {
    super(http);
  }
}
