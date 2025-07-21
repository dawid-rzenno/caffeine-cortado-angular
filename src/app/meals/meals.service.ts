import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Meal } from "./meal";

@Injectable({
  providedIn: 'root'
})
export class MealsService {
	readonly apiUrl = `${environment.apiUrl}/meals`;

	constructor(private http: HttpClient) { }

	getAll$(): Observable<Meal[]> {
		return this.http.get<Meal[]>(`${this.apiUrl}`);
	}

	getById$(id: number): Observable<Meal> {
		return this.http.get<Meal>(`${this.apiUrl}/${id}`);
	}

	create$(form: Meal): Observable<Meal> {
		return this.http.post<Meal>(`${this.apiUrl}`, form);
	}

	update$(form: Meal): Observable<Meal> {
		return this.http.put<Meal>(`${this.apiUrl}`, form);
	}

	delete$(id: number): Observable<Meal> {
		return this.http.delete<Meal>(`${this.apiUrl}/${id}`);
	}
}
