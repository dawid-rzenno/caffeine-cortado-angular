import { ItemBase } from "../../shared/models/item-base";
import { ITEM_KEY, ITEMS_KEY } from "../shopping-list.routes";

import { createFakePaginatedResponse } from "./create-fake-paginated-response";

export function createFakeActivatedRoute<T extends ItemBase>(content: T[]) {
  return {
    snapshot: {
      data: {
        [ITEMS_KEY]: createFakePaginatedResponse<T>(content),
        [ITEM_KEY]: content.length ? content[0] : undefined,
      }
    }
  }
}
