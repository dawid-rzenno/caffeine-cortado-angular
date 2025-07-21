import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Nutrient } from "./ingredients.service";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class NutrientsService {
	readonly apiUrl = `${environment.apiUrl}/nutrients`;

  constructor(private http: HttpClient) { }

	getAll$(): Observable<Nutrient[]> {
		return this.http.get<Nutrient[]>(`${this.apiUrl}`);
	}

	getById$(id: number): Observable<Nutrient> {
		return this.http.get<Nutrient>(`${this.apiUrl}/${id}`);
	}

	create$(form: Nutrient): Observable<Nutrient> {
		return this.http.post<Nutrient>(`${this.apiUrl}`, form);
	}

	update$(form: Nutrient): Observable<Nutrient> {
		return this.http.put<Nutrient>(`${this.apiUrl}`, form);
	}

	delete$(id: number): Observable<Nutrient> {
		return this.http.delete<Nutrient>(`${this.apiUrl}/${id}`);
	}
}
