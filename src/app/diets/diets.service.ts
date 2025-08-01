import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { CreateDietPayload, Diet, DietDetails, UpdateDietPayload } from "./diet";
import { CrudService } from "../shared/crud/crud.service.abstract";

@Injectable({
  providedIn: 'root'
})
export class DietsService extends CrudService<Diet, DietDetails, CreateDietPayload, UpdateDietPayload> {
	readonly apiUrl = `${environment.apiUrl}/diets`;

  constructor(http: HttpClient) {
		super(http);
	}
}
