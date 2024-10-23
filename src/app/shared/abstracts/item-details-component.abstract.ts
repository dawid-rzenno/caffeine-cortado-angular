import { ActivatedRoute } from "@angular/router";
import { Directive } from "@angular/core";
import { ITEM_KEY } from "../../shopping-list/shopping-list.routes";

@Directive()
export abstract class ItemDetailsComponentAbstract<Item> {
  details: Item = this.route.snapshot.data[ITEM_KEY];

  protected constructor(private route: ActivatedRoute) {}
}
