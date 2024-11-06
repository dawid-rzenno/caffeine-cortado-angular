import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { ItemServiceAbstract } from "../shared/abstracts/item-service.abstract";
import { Exercise, ExercisePatch } from "./exercise";

@Injectable({
  providedIn: "root",
})
export class ExerciseService extends ItemServiceAbstract<
  Exercise,
  ExercisePatch
> {
  protected readonly endpointUrl: string = `${environment.apiUrl}/fitness/exercise`;

  constructor(protected override http: HttpClient) {
    super(http);
  }
}
