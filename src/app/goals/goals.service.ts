import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs";
import { Goal } from "./goal";

@Injectable({
  providedIn: 'root'
})
export class GoalsService {

	readonly apiUrl = `${environment.apiUrl}/goals`;

  constructor(private http: HttpClient) { }

	getAll$(): Observable<Goal[]> {
		return this.http.get<Goal[]>(`${this.apiUrl}`);
	}

	getById$(id: number): Observable<Goal> {
		return this.http.get<Goal>(`${this.apiUrl}/${id}`);
	}

	create$(form: Goal): Observable<Goal> {
		return this.http.post<Goal>(`${this.apiUrl}`, form);
	}

	update$(form: Goal): Observable<Goal> {
		return this.http.put<Goal>(`${this.apiUrl}`, form);
	}

	delete$(id: number): Observable<Goal> {
		return this.http.delete<Goal>(`${this.apiUrl}/${id}`);
	}
}
