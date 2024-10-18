import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { HttpClient, HttpParams } from "@angular/common/http";
import { map, Observable } from "rxjs";
import { Meal, MealPatchRequest } from "./meal";
import { GetAllRequestParams, ItemTableComponentAbstractService } from "../shared/item-table-component-abstract.directive";
import { Ingredient, IngredientPatchRequest } from "../ingredient/ingredient";
import { PaginatedResponse } from "../shared/models/paginated-response";

@Injectable({
  providedIn: 'root'
})
export class MealService implements ItemTableComponentAbstractService<Meal>{

  private readonly endpointUrl: string = `${environment.apiUrl}/food/meal`;

  constructor(private http: HttpClient) { }

  create(details?: Meal): Observable<Meal> {
    const body: Partial<MealPatchRequest> = details ? {
      name: details.name,
      description: details.description,
      rating: details.rating,
      ingredients: details.ingredients.map((ingredient: Ingredient) => ({ id: ingredient.id } as IngredientPatchRequest)),
    } : {};

    return this.http.post<Meal>(`${this.endpointUrl}`, body)
  }

  get(id: string): Observable<Meal> {
    return this.http.get<Meal>(`${this.endpointUrl}/${id}`)
  }

  getAll(params?: GetAllRequestParams): Observable<PaginatedResponse<Meal>> {
    return this.http.get<PaginatedResponse<Meal>>(`${this.endpointUrl}`, {
      params: new HttpParams({ fromObject: params })
    }).pipe(
      map((paginatedResponse: PaginatedResponse<Meal>) => new PaginatedResponse<Meal>(paginatedResponse))
    )
  }

  update(details: Meal): Observable<Meal> {
    return this.http.put<Meal>(`${this.endpointUrl}/${details.id}`, details)
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.endpointUrl}/${id}`)
  }
}
