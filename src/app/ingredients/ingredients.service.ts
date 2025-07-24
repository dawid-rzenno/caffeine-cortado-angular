import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Ingredient } from "./ingredient";

export type Nutrient = {
	id: number;
	name: string;
	timestamp: Date;
	userId: number;
};

@Injectable({
  providedIn: 'root'
})
export class IngredientsService {
	readonly apiUrl = `${environment.apiUrl}/ingredients`;

  constructor(private http: HttpClient) { }

	getAll$() {
		return this.http.get<Ingredient[]>(`${this.apiUrl}`);
	}

	getAllByTerm$(params: { term: string, globalSearch: boolean }) {
		return this.http.get<Ingredient[]>(`${this.apiUrl}`, { params });
	}

	getById$(id: number) {
		return this.http.get<Ingredient>(`${this.apiUrl}/${id}`);
	}

	create$(form: Nutrient) {
		return this.http.post<Ingredient>(`${this.apiUrl}`, form);
	}

	update$(form: Nutrient) {
		return this.http.put<Ingredient>(`${this.apiUrl}`, form);
	}

	delete$(id: number) {
		return this.http.delete<Ingredient>(`${this.apiUrl}/${id}`);
	}
}
