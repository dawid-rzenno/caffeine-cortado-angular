import { Injectable } from '@angular/core';
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import {
	CreateNutrientTypePayload,
	NutrientType,
	NutrientTypeDetails,
	UpdateNutrientTypePayload
} from "./nutrient-type";
import { CrudService } from "../../shared/crud/crud.service.abstract";

@Injectable({
	providedIn: 'root'
})
export class NutrientTypesService extends CrudService<NutrientType, NutrientTypeDetails, CreateNutrientTypePayload, UpdateNutrientTypePayload> {
	readonly apiUrl = `${environment.apiUrl}/nutrient-types`;

	constructor(http: HttpClient) {
		super(http);
	}
}
