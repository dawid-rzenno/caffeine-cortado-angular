import { Injectable } from '@angular/core';
import { environment } from "../../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Diet } from "../../diet";
import { DietMealForm } from "./diet-meal-form";

@Injectable({
	providedIn: 'root'
})
export class DietMealsService {
	constructor(private http: HttpClient) {
	}

	assign$(dietId: number, form: DietMealForm) {
		return this.http.post<Diet>(`${environment.apiUrl}/diets/${dietId}/meals`, form);
	}

	unassign$(dietId: number, mealId: number) {
		return this.http.delete<Diet>(`${environment.apiUrl}/diets/${dietId}/meals/${mealId}`);
	}
}
