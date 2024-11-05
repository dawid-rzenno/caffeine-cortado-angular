import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { ItemServiceAbstract } from "../shared/abstracts/item-service.abstract";
import { Workout, WorkoutPatch } from "./workout";

@Injectable({
  providedIn: 'root'
})
export class WorkoutService extends ItemServiceAbstract<Workout, WorkoutPatch> {
  protected readonly endpointUrl: string = `${environment.apiUrl}/fitness/workout`;

  constructor(http: HttpClient) {
    super(http);
  }
}
