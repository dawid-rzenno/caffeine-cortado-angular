import { MatPaginatorConfig } from "./mat-paginator-config";

import { ItemBase } from "./item-base";
import { Sort } from "./sort";
import { Pageable } from "./pageable";

type PaginatedResponseArgs<T extends ItemBase> = Omit<
  PaginatedResponse<T>,
  "createMatPaginatorConfig"
>;

export class PaginatedResponse<Item extends ItemBase> {
  totalElements: number;
  totalPages: number;
  size: number;
  content: Item[];
  number: number;
  sort: Sort;
  numberOfElements: number;
  pageable: Pageable;
  first: boolean;
  last: boolean;
  empty: boolean;

  constructor(args: PaginatedResponseArgs<Item>) {
    this.totalElements = args.totalElements;
    this.totalPages = args.totalPages;
    this.size = args.size;
    this.content = args.content;
    this.number = args.number;
    this.sort = args.sort;
    this.numberOfElements = args.numberOfElements;
    this.pageable = args.pageable;
    this.first = args.first;
    this.last = args.last;
    this.empty = args.empty;
  }

  createMatPaginatorConfig(): MatPaginatorConfig {
    return new MatPaginatorConfig(
      this.pageable.pageNumber,
      this.pageable.pageSize,
      this.totalElements,
    );
  }
}
