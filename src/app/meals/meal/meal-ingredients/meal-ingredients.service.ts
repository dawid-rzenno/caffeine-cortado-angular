import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { AssignationService } from "../../../shared/assignation/assignation.service.abstract";
import { Meal } from "../../meal";
import { CreateMealIngredientPayload } from "./meal-ingredients.component";

@Injectable({
	providedIn: 'root'
})
export class MealIngredientsService extends AssignationService<Meal, CreateMealIngredientPayload> {
	constructor(http: HttpClient) {
		super(http, 'meals', 'ingredients');
	}
}
