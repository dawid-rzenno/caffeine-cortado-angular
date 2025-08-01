import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { CreateNutrientPayload, Nutrient, NutrientDetails, UpdateNutrientPayload } from "./nutrient";
import { CrudService } from "../shared/crud/crud.service.abstract";

@Injectable({
	providedIn: 'root'
})
export class NutrientsService extends CrudService<Nutrient, NutrientDetails, CreateNutrientPayload, UpdateNutrientPayload> {
	readonly apiUrl = `${environment.apiUrl}/nutrients`;

	constructor(http: HttpClient) {
		super(http);
	}
}
