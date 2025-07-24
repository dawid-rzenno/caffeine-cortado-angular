import { Injectable } from '@angular/core';
import { environment } from "../../../../environments/environment";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DietMealsService {
	constructor(private http: HttpClient) { }

	private createApiUrl(dietId: number, mealId: number) {
		return `${environment.apiUrl}/diets/${dietId}/meals/${mealId}`;
	}

	assign$(dietId: number, mealId: number) {
		return this.http.post<void>(this.createApiUrl(dietId, mealId), undefined);
	}

	unassign$(dietId: number, mealId: number) {
		return this.http.delete<void>(this.createApiUrl(dietId, mealId));
	}
}
