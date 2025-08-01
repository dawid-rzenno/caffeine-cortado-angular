import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { DietDetails } from "../../diet";
import { AssignationService } from "../../../shared/assignation/assignation.service.abstract";
import { CreateDietMealPayload } from "./create-diet-meal-payload";

@Injectable({
	providedIn: 'root'
})
export class DietMealsService extends AssignationService<DietDetails, CreateDietMealPayload>{
	constructor(http: HttpClient) {
		super(http, 'diets', 'meals')
	}
}
