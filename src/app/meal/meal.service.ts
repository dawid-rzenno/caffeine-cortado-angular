import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { HttpClient, HttpParams } from "@angular/common/http";
import { map, Observable } from "rxjs";
import { MealModel, MealModel, MealRequest } from "./meal.model";
import { GetAllRequestParams, TableComponentAbstractService } from "../shared/table-component-abstract.directive";
import { Ingredient } from "../ingredient/ingredient";
import { PaginatedResponse } from "../shared/models/paginated-response";

@Injectable({
  providedIn: 'root'
})
export class MealService implements TableComponentAbstractService<MealModel>{

  private readonly endpointUrl: string = `${environment.apiUrl}/food/meal`;

  constructor(private http: HttpClient) { }

  create(details?: MealModel): Observable<MealModel> {
    const body: Partial<MealRequest> = details ? {
      name: details.name,
      description: details.description,
      ingredient_ids: details.ingredients.map((ingredient: Ingredient) => ingredient.id!),
      rating: details.rating
    } : {};

    return this.http.post<MealModel>(`${this.endpointUrl}`, body)
  }

  get(id: string): Observable<MealModel> {
    return this.http.get<MealModel>(`${this.endpointUrl}/${id}`)
  }

  getAll(params?: GetAllRequestParams): Observable<PaginatedResponse<MealModel>> {
    return this.http.get<PaginatedResponse<MealModel>>(`${this.endpointUrl}`, {
      params: new HttpParams({ fromObject: params })
    }).pipe(
      map((paginatedResponse: PaginatedResponse<MealModel>) => new PaginatedResponse<MealModel>(paginatedResponse))
    )
  }

  update(details: MealModel): Observable<MealModel> {
    return this.http.put<MealModel>(`${this.endpointUrl}/${details.id}`, details)
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.endpointUrl}/${id}`)
  }
}
