import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { AssignationService } from "../../../shared/assignation/assignation.service.abstract";
import { NutrientDetails } from "../../../nutrients/nutrient";
import { CreateIngredientNutrientPayload } from "./create-ingredient-nutrient-payload";

@Injectable({
	providedIn: 'root'
})
export class IngredientNutrientsService extends AssignationService<NutrientDetails, CreateIngredientNutrientPayload> {
	constructor(http: HttpClient,) {
		super(http, 'ingredients', 'nutrients');
	}
}
