import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
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

	getAll$(): Observable<Ingredient[]> {
		return this.http.get<Ingredient[]>(`${this.apiUrl}`);
	}

	getById$(id: number): Observable<Ingredient> {
		return this.http.get<Ingredient>(`${this.apiUrl}/${id}`);
	}

	create$(form: Nutrient): Observable<Ingredient> {
		return this.http.post<Ingredient>(`${this.apiUrl}`, form);
	}

	update$(form: Nutrient): Observable<Ingredient> {
		return this.http.put<Ingredient>(`${this.apiUrl}`, form);
	}

	delete$(id: number): Observable<Ingredient> {
		return this.http.delete<Ingredient>(`${this.apiUrl}/${id}`);
	}
}
