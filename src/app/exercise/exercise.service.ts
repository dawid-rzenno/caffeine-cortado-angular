import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { ItemBase } from "../shared/models/item-base";
import { ItemServiceAbstract } from "../shared/abstracts/item-service.abstract";

@Injectable({
  providedIn: 'root'
})
export class ExerciseService extends ItemServiceAbstract<ItemBase, ItemBase>{
  protected readonly endpointUrl: string = `${environment.apiUrl}/fitness/exercise`;

  constructor(protected override http: HttpClient) {
    super(http);
  }
}
