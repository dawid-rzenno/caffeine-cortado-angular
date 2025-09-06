import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { CreateMealPayload, Meal, MealDetails, UpdateMealPayload } from "./meal";
import { CrudService } from "../shared/crud-table/crud.service.abstract";

@Injectable({
  providedIn: 'root'
})
export class MealsService extends CrudService<Meal, MealDetails, CreateMealPayload, UpdateMealPayload> {
	readonly apiUrl = `${environment.apiUrl}/meals`;

	constructor( http: HttpClient) {
		super(http);
	}
}
