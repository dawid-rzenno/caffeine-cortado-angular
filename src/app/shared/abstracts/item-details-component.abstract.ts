import { ActivatedRoute } from "@angular/router";
import { ITEM_KEY } from "../../shopping-list/shopping-list.routes";
import { ItemBase } from "../models/item-base";

export abstract class ItemDetailsComponentAbstract<Item extends ItemBase> {
  details: Item = this.route.snapshot.data[ITEM_KEY];

  protected constructor(private route: ActivatedRoute) {}
}
