import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class IngredientNutrientsService {
	constructor(private http: HttpClient) { }

	private createApiUrl(ingredientId: number, nutrientId: number) {
		return `${environment.apiUrl}/ingredients/${ingredientId}/nutrients/${nutrientId}`;
	}

	assign$(ingredientId: number, nutrientId: number) {
		return this.http.post<void>(this.createApiUrl(ingredientId, nutrientId), undefined);
	}

	unassign$(ingredientId: number, nutrientId: number) {
		return this.http.delete<void>(this.createApiUrl(ingredientId, nutrientId));
	}
}
