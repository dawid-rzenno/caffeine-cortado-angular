import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { map, Observable } from "rxjs";
import { PaginatedResponse } from "../shared/models/paginated-response";
import { ItemBase } from "../shared/models/item-base";
import { PaginationParams } from "../shared/models/mat-paginator-config";

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  private readonly endpointUrl: string = `${environment.apiUrl}/fitness/exercise`;

  constructor(private http: HttpClient) { }

  create(details?: ItemBase): Observable<ItemBase> {
    const body: Partial<ItemBase> = details ? {} : {};

    return this.http.post<ItemBase>(`${this.endpointUrl}`, body)
  }

  get(id: string): Observable<ItemBase> {
    return this.http.get<ItemBase>(`${this.endpointUrl}/${id}`)
  }

  getAll(params?: Partial<PaginationParams>): Observable<PaginatedResponse<ItemBase>> {
    return this.http.get<PaginatedResponse<ItemBase>>(`${this.endpointUrl}`, {
      params: new HttpParams({ fromObject: params })
    }).pipe(
      map((paginatedResponse: PaginatedResponse<ItemBase>) => new PaginatedResponse<ItemBase>(paginatedResponse))
    )
  }
}
