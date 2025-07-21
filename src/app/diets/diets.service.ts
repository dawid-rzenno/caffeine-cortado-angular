import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Observable } from 'rxjs';

export type Diet = {
	id: number,
	name: string,
	userId: number,
	timestamp: Date,
}

@Injectable({
  providedIn: 'root'
})
export class DietsService {
	readonly apiUrl = `${environment.apiUrl}/diets`;

  constructor(private http: HttpClient) { }

	getAll$(): Observable<Diet[]> {
		return this.http.get<Diet[]>(`${this.apiUrl}`);
	}

	getById$(id: number): Observable<Diet> {
		return this.http.get<Diet>(`${this.apiUrl}/${id}`);
	}

	create$(form: Diet): Observable<Diet> {
		return this.http.post<Diet>(`${this.apiUrl}`, form);
	}

	update$(form: Diet): Observable<Diet> {
		return this.http.put<Diet>(`${this.apiUrl}`, form);
	}
}
