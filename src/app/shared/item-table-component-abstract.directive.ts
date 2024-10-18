import { Observable, takeUntil } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { ObservingComponentAbstract } from "./abstracts/observing-component.abstract";
import { Directive } from "@angular/core";
import { PageEvent } from "@angular/material/paginator";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { ConfirmationDialogComponent } from "../confirmation-dialog/confirmation-dialog.component";
import { MatPaginatorConfig, PaginationParams } from "./models/mat-paginator-config";
import { PaginatedResponse } from "./models/paginated-response";
import { ITEMS_KEY } from "../shopping-list/shopping-list.routes";

export type IdentifiedItem = {
  id: number;
}

export type GetAllRequestParams = Partial<PaginationParams> & {
  search?: string;
  parentId?: number;
}

export type ItemTableComponentAbstractService<Item extends IdentifiedItem> = {
  delete(id: number): Observable<void>;
  getAll(params: GetAllRequestParams): Observable<PaginatedResponse<Item>>;
}

@Directive()
export abstract class ItemTableComponentAbstract<Item extends IdentifiedItem> extends ObservingComponentAbstract {
  items: Item[] = [];

  displayedColumns: string[] = ["id", "name", "description", "actions"];
  pageSizeOptions: number[] = MatPaginatorConfig.DefaultPageSizeOptions;

  matPaginatorConfig: MatPaginatorConfig;

  protected constructor(
    private service: ItemTableComponentAbstractService<Item>,
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
