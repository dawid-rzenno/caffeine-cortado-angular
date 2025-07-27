import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Diet } from "./diet";

@Injectable({
  providedIn: 'root'
})
export class DietsService {
	readonly apiUrl = `${environment.apiUrl}/diets`;

  constructor(private http: HttpClient) { }

	getAll$() {
		return this.http.get<Diet[]>(`${this.apiUrl}`);
	}

	getById$(id: number) {
		return this.http.get<Diet>(`${this.apiUrl}/${id}`);
	}

	create$(form: Diet) {
		return this.http.post<Diet>(`${this.apiUrl}`, form);
	}

	update$(form: Diet) {
		return this.http.put<Diet>(`${this.apiUrl}`, form);
	}

	delete$(id: number) {
		return this.http.delete<void>(`${this.apiUrl}/${id}`);
	}
}
