import { Injectable } from '@angular/core';
import { map, Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Ingredient } from "./ingredient";
import { GetAllRequestParams, ItemTableComponentAbstractService } from "../shared/item-table-component-abstract.directive";
import { PaginatedResponse } from "../shared/models/paginated-response";

@Injectable({
  providedIn: 'root'
})
export class IngredientService implements ItemTableComponentAbstractService<Ingredient> {

  private readonly endpointUrl: string = `${environment.apiUrl}/food/ingredient`;

  constructor(private http: HttpClient) { }

  create(details?: Ingredient): Observable<Ingredient> {
    const body: Partial<Ingredient> = details ? {
      name: details.name,
      category_id: details.category_id,
      price: details.price,
      calories: details.calories,
      proteins: details.proteins,
      carbohydrates: details.carbohydrates,
      fats: details.fats,
    } : {};

    return this.http.post<Ingredient>(`${this.endpointUrl}`, body)
  }

  get(id: string): Observable<Ingredient> {
    return this.http.get<Ingredient>(`${this.endpointUrl}/${id}`)
  }

  getAll(params?: GetAllRequestParams): Observable<PaginatedResponse<Ingredient>> {
    return this.http.get<PaginatedResponse<Ingredient>>(`${this.endpointUrl}`, {
      params: new HttpParams({ fromObject: params })
    }).pipe(
      map((paginatedResponse: PaginatedResponse<Ingredient>) => new PaginatedResponse<Ingredient>(paginatedResponse))
    )
  }

  update(details: Ingredient): Observable<Ingredient> {
    return this.http.put<Ingredient>(`${this.endpointUrl}/${details.id}`, details)
  }

  delete(id: number | undefined): Observable<void> {
    return this.http.delete<void>(`${this.endpointUrl}/${id}`)
  }
}
