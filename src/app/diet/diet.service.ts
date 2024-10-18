import { Injectable } from '@angular/core';
import { GetAllRequestParams, TableComponentAbstractService } from "../shared/table-component-abstract.directive";
import { Diet, DietPatchRequest } from "./diet";
import { map, Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Meal, MealPatchRequest } from "../meal/meal";
import { PaginatedResponse } from "../shared/models/paginated-response";

@Injectable({
  providedIn: 'root'
})
export class DietService implements TableComponentAbstractService<Diet> {

  private readonly endpointUrl: string = `${environment.apiUrl}/food/diet`;

  constructor(private http: HttpClient) { }

  create(details?: Diet): Observable<Diet> {
    const body: Partial<DietPatchRequest> = details ? {
      name: details.name,
      description: details.description,
      meals: details.meals.map((meal: Meal) => ({ id: meal.id } as MealPatchRequest)),
    } : {};

    return this.http.post<Diet>(`${this.endpointUrl}`, body)
  }

  get(id: string): Observable<Diet> {
    return this.http.get<Diet>(`${this.endpointUrl}/${id}`)
  }

  getAll(params?: GetAllRequestParams): Observable<PaginatedResponse<Diet>> {
    return this.http.get<PaginatedResponse<Diet>>(`${this.endpointUrl}`, {
      params: new HttpParams({ fromObject: params })
    }).pipe(
      map((paginatedResponse: PaginatedResponse<Diet>) => new PaginatedResponse<Diet>(paginatedResponse))
    )
  }

  update(details: Diet): Observable<Diet> {
    return this.http.put<Diet>(`${this.endpointUrl}/${details.id}`, details)
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.endpointUrl}/${id}`)
  }
}
