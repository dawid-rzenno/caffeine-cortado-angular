import { ActivatedRoute } from "@angular/router";
import { ItemBase } from "../models/item-base";
import { Directive } from "@angular/core";
import { ITEM_KEY } from "../../shopping-list/route-data-keys";

@Directive()
export abstract class ItemDetailsComponentAbstract<Item extends ItemBase> {
  details: Item = this.route.snapshot.data[ITEM_KEY];

  protected constructor(protected route: ActivatedRoute) {}
}
