import { ItemBase } from "../../shared/models/item-base";

import { createFakePaginatedResponse } from "./create-fake-paginated-response";
import { ITEM_KEY, ITEMS_KEY } from "../route-data-keys";

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
