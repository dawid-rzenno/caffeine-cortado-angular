import { map, Observable, takeUntil } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { ObservingComponentAbstract } from "./abstracts/observing-component.abstract";
import { Directive } from "@angular/core";
import { PageEvent } from "@angular/material/paginator";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { ConfirmationDialogComponent } from "../confirmation-dialog/confirmation-dialog.component";
import { MatPaginatorConfig, PaginationParams } from "./models/mat-paginator-config";
import { PaginatedResponse } from "./models/paginated-response";
import { ITEMS_KEY } from "../shopping-list/shopping-list.routes";
import { HttpClient, HttpParams } from "@angular/common/http";

export type Id = number;

export type ItemBase = { id: Id; };

export type SearchResult = ItemBase & {
  name: string;
};

export type GetAllRequestParams = Partial<PaginationParams> & {
  search?: string;
  parentId?: number;
}

@Directive()
export abstract class ItemServiceAbstract<
  Item extends ItemBase,
  ItemPatch extends ItemBase
> {
  protected abstract endpointUrl: string;

  protected constructor(protected http: HttpClient) {}

  create(): Observable<Item> {
    return this.http.post<Item>(`${this.endpointUrl}`, undefined)
  }

  get(id: string): Observable<Item> {
    return this.http.get<Item>(`${this.endpointUrl}/${id}`)
  }

  getAll(params?: GetAllRequestParams): Observable<PaginatedResponse<Item>> {
    return this.http.get<PaginatedResponse<Item>>(`${this.endpointUrl}`, {
      params: new HttpParams({ fromObject: params })
    }).pipe(
      map((paginatedResponse: PaginatedResponse<Item>) => new PaginatedResponse<Item>(paginatedResponse))
    )
  }

  patch(patch: ItemPatch): Observable<ItemPatch> {
    return this.http.patch<ItemPatch>(`${this.endpointUrl}/${patch.id}`, patch)
  }

  search(params?: GetAllRequestParams): Observable<PaginatedResponse<SearchResult>> {
    return this.http.get<PaginatedResponse<SearchResult>>(`${this.endpointUrl}/search`, {
      params: new HttpParams({ fromObject: params })
    }).pipe(
      map((paginatedResponse: PaginatedResponse<SearchResult>) =>
        new PaginatedResponse<SearchResult>(paginatedResponse))
    )
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.endpointUrl}/${id}`)
  }
}

@Directive()
export abstract class ItemTableComponentAbstract<Item extends ItemPatch, ItemPatch extends ItemBase> extends ObservingComponentAbstract {
  items: Item[] = [];

  displayedColumns: string[] = ["id", "name", "actions"];
  pageSizeOptions: number[] = MatPaginatorConfig.DefaultPageSizeOptions;

  matPaginatorConfig: MatPaginatorConfig;

  protected constructor(
    private service: ItemServiceAbstract<Item, ItemPatch>,
    private route: ActivatedRoute,
    private dialog: MatDialog
  ) {
    super();

    const paginatedResponse: PaginatedResponse<Item> = this.route.snapshot.data[ITEMS_KEY];
    this.matPaginatorConfig = paginatedResponse.createMatPaginatorConfig();
    this.items = paginatedResponse.content;
  }

  onDeleteClick(item: Item): void {
    this.delete(item);
  }

  onPageChange(pageEvent: PageEvent): void {
    this.matPaginatorConfig = new MatPaginatorConfig(pageEvent.pageIndex, pageEvent.pageSize, pageEvent.length);
    this.getAll(this.matPaginatorConfig.paginationParams);
  }

  private delete(item: Item): void {
    const dialogRef: MatDialogRef<ConfirmationDialogComponent, unknown> = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        title: "Delete item",
        content: "Are you sure you want to delete this item? This is a permanent action.",
        buttonText: "Delete"
      }
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result && item.id) {
        this.service
          .delete(item.id)
          .pipe(takeUntil(this.destroy$))
          .subscribe(() => this.getAll(this.matPaginatorConfig.paginationParams));
      }
    });
  }

  private getAll(params: GetAllRequestParams): void {
    this.service
      .getAll(params)
      .pipe(takeUntil(this.destroy$))
      .subscribe((paginatedResponse: PaginatedResponse<Item>) => {
        this.matPaginatorConfig = paginatedResponse.createMatPaginatorConfig();
        this.items = paginatedResponse.content;
      });
  }
}
