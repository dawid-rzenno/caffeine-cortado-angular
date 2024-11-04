import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ShoppingList } from "../shopping-list";
import { ItemDetailsComponentAbstract } from "../../shared/abstracts/item-details-component.abstract";
import { MatCardModule } from "@angular/material/card";

@Component({
  selector: 'cortado-shopping-list-details',
  standalone: true,
  imports: [
    MatCardModule,
  ],
  templateUrl: './shopping-list-details.component.html',
  styleUrl: './shopping-list-details.component.scss'
})
export class ShoppingListDetailsComponent extends ItemDetailsComponentAbstract<ShoppingList> {

  constructor(route: ActivatedRoute) {
    super(route);
  }
}
