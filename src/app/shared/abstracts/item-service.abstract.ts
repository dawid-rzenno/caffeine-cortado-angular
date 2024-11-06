import { Directive } from "@angular/core";
import { ItemBase } from "../models/item-base";
import { HttpClient, HttpParams } from "@angular/common/http";
import { map, Observable } from "rxjs";
import { PaginatedResponse } from "../models/paginated-response";
import { SearchResult } from "../models/search-result";
import { PaginationParams } from "../models/mat-paginator-config";

@Directive()
export abstract class ItemServiceAbstract<
  Item extends ItemBase,
  ItemPatch extends ItemBase,
> {
  protected abstract endpointUrl: string;

  protected constructor(protected http: HttpClient) {}

  create(): Observable<Item> {
    return this.http.post<Item>(`${this.endpointUrl}`, undefined);
  }

  get(id: string): Observable<Item> {
    return this.http.get<Item>(`${this.endpointUrl}/${id}`);
  }

  getAll(
    params?: Partial<PaginationParams>,
  ): Observable<PaginatedResponse<Item>> {
    return this.http
      .get<PaginatedResponse<Item>>(`${this.endpointUrl}`, {
        params: new HttpParams({ fromObject: params }),
      })
      .pipe(
        map(
          (paginatedResponse: PaginatedResponse<Item>) =>
            new PaginatedResponse<Item>(paginatedResponse),
        ),
      );
  }

  patch(patch: ItemPatch): Observable<ItemPatch> {
    return this.http.patch<ItemPatch>(`${this.endpointUrl}/${patch.id}`, patch);
  }

  search(
    params?: Partial<PaginationParams>,
  ): Observable<PaginatedResponse<SearchResult>> {
    return this.http
      .get<PaginatedResponse<SearchResult>>(`${this.endpointUrl}/search`, {
        params: new HttpParams({ fromObject: params }),
      })
      .pipe(
        map(
          (paginatedResponse: PaginatedResponse<SearchResult>) =>
            new PaginatedResponse<SearchResult>(paginatedResponse),
        ),
      );
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.endpointUrl}/${id}`);
  }
}
