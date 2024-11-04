import { ItemBase } from "../../shared/models/item-base";
import { PaginatedResponse } from "../../shared/models/paginated-response";

export function createFakePaginatedResponse<T extends ItemBase>(content: T[]) {
  return new PaginatedResponse<T>({
    content,
    empty: false,
    first: false,
    last: false,
    number: 0,
    numberOfElements: 0,
    pageable: {
      pageNumber: 0,
      pageSize: 0,
      sort: {
        empty: false,
        sorted: false,
        unsorted: false
      },
      offset: 0,
      paged: false,
      unpaged: false
    },
    size: 0,
    sort: {
      empty: false,
      sorted: false,
      unsorted: false
    },
    totalElements: 0,
    totalPages: 0
  });
}
