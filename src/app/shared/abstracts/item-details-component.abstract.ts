import { ActivatedRoute } from "@angular/router";
import { ITEM_KEY } from "../../shopping-list/shopping-list.routes";
import { ItemBase } from "../models/item-base";
import { Directive } from "@angular/core";

@Directive()
export abstract class ItemDetailsComponentAbstract<Item extends ItemBase> {
  details: Item = this.route.snapshot.data[ITEM_KEY];

  protected constructor(protected route: ActivatedRoute) {}
}
