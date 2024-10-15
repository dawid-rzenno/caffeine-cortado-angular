import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { map, Observable } from "rxjs";
import { PaginatedResponse } from "../shared/models/paginated-response";
import { GetAllRequestParams } from "../shared/table-component-abstract.directive";

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  private readonly endpointUrl: string = `${environment.apiUrl}/fitness/exercise`;

  constructor(private http: HttpClient) { }

  create(details?: unknown): Observable<unknown> {
    const body: Partial<unknown> = details ? {} : {};

    return this.http.post<unknown>(`${this.endpointUrl}`, body)
  }

  get(id: string): Observable<unknown> {
    return this.http.get<unknown>(`${this.endpointUrl}/${id}`)
  }

  getAll(params?: GetAllRequestParams): Observable<PaginatedResponse<unknown>> {
    return this.http.get<PaginatedResponse<unknown>>(`${this.endpointUrl}`, {
      params: new HttpParams({ fromObject: params })
    }).pipe(
      map((paginatedResponse: PaginatedResponse<unknown>) => new PaginatedResponse<unknown>(paginatedResponse))
    )
  }
}
