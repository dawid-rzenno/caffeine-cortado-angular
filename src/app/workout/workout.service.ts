import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { HttpClient, HttpParams } from "@angular/common/http";
import { map, Observable } from "rxjs";
import { ItemBase, GetAllRequestParams } from "../shared/item-table-component-abstract.directive";
import { PaginatedResponse } from "../shared/models/paginated-response";

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  private readonly endpointUrl: string = `${environment.apiUrl}/fitness/workout`;

  constructor(private http: HttpClient) { }

  create(details?: ItemBase): Observable<ItemBase> {
    const body: Partial<ItemBase> = details ? {} : {};

    return this.http.post<ItemBase>(`${this.endpointUrl}`, body)
  }

  get(id: string): Observable<ItemBase> {
    return this.http.get<ItemBase>(`${this.endpointUrl}/${id}`)
  }

  getAll(params?: GetAllRequestParams): Observable<PaginatedResponse<ItemBase>> {
    return this.http.get<PaginatedResponse<ItemBase>>(`${this.endpointUrl}`, {
      params: new HttpParams({ fromObject: params })
    }).pipe(
      map((paginatedResponse: PaginatedResponse<ItemBase>) => new PaginatedResponse<ItemBase>(paginatedResponse))
    )
  }
}
