import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";
import { HttpClient, HttpParams } from "@angular/common/http";
import { map, Observable } from "rxjs";
import { GetAllRequestParams } from "../shared/abstracts/item-table-component.abstract";
import { PaginatedResponse } from "../shared/models/paginated-response";
import { ItemBase } from "../shared/models/item-base";

@Injectable({
  providedIn: 'root'
})
export class BeverageService {

  private readonly endpointUrl: string = `${environment.apiUrl}/food/beverage`;

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
