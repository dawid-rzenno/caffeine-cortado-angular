import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { HttpClient, HttpParams } from "@angular/common/http";
import { map, Observable } from "rxjs";
import { ShoppingListModel, ShoppingListModel, ShoppingListRequest } from "./shopping-list-model";
import { GetAllRequestParams } from "../shared/table-component-abstract.directive";
import { Ingredient } from "../ingredient/ingredient";
import { PaginatedResponse } from "../shared/models/paginated-response";

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  private readonly endpointUrl: string = `${environment.apiUrl}/food/shopping-list`;

  constructor(private http: HttpClient) { }

  create(details?: ShoppingListModel): Observable<ShoppingListModel> {
    const body: Partial<ShoppingListRequest> = details ? {
      name: details.name,
      description: details.description,
      ingredient_ids: details.ingredients.map((ingredient: Ingredient) => ingredient.id!),
    } : {};

    return this.http.post<ShoppingListModel>(`${this.endpointUrl}`, body)
  }

  get(id: string): Observable<ShoppingListModel> {
    return this.http.get<ShoppingListModel>(`${this.endpointUrl}/${id}`)
  }

  getAll(params?: GetAllRequestParams): Observable<PaginatedResponse<ShoppingListModel>> {
    return this.http.get<PaginatedResponse<ShoppingListModel>>(`${this.endpointUrl}`, {
      params: new HttpParams({ fromObject: params })
    }).pipe(
      map((paginatedResponse: PaginatedResponse<ShoppingListModel>) => new PaginatedResponse<ShoppingListModel>(paginatedResponse))
    )
  }

  update(details: ShoppingListModel): Observable<ShoppingListModel> {
    return this.http.put<ShoppingListModel>(`${this.endpointUrl}/${details.id}`, details)
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.endpointUrl}/${id}`)
  }
}
