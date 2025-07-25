import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class MealIngredientsService {
	constructor(private http: HttpClient) { }

	private createApiUrl(dietId: number, mealId: number) {
		return `${environment.apiUrl}/meals/${dietId}/ingredients/${mealId}`;
	}

	assign$(mealId: number, ingredientId: number) {
		return this.http.post<void>(this.createApiUrl(mealId, ingredientId), undefined);
	}

	unassign$(mealId: number, ingredientId: number) {
		return this.http.delete<void>(this.createApiUrl(mealId, ingredientId));
	}
}
