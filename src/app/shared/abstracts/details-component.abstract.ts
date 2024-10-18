import { ActivatedRoute } from "@angular/router";
import { Directive } from "@angular/core";
import { DATA_KEY } from "../../shopping-list/shopping-list.routes";

@Directive()
export abstract class DetailsComponentAbstract<ItemDetails> {
  details: ItemDetails = this.route.snapshot.data[DATA_KEY];

  protected constructor(private route: ActivatedRoute) {}
}
