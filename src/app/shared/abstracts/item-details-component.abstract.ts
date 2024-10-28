import { ActivatedRoute } from "@angular/router";
import { Directive } from "@angular/core";
import { ITEM_KEY } from "../../shopping-list/shopping-list.routes";
import { ItemBase } from "../models/item-base";

@Directive()
export abstract class ItemDetailsComponentAbstract<Item extends ItemBase> {
  details: Item = this.route.snapshot.data[ITEM_KEY];

  protected constructor(private route: ActivatedRoute) {}
}
