import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from "@angular/router";
import { NgForOf } from "@angular/common";
import { ShoppingList } from "../shopping-list";
import { ItemDetailsComponentAbstract } from "../../shared/abstracts/item-details-component.abstract";
import { MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle } from "@angular/material/card";

@Component({
  selector: 'cortado-shopping-list-details',
  standalone: true,
  imports: [
    NgForOf,
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardSubtitle,
    MatCardTitle,
    RouterModule,
  ],
  templateUrl: './shopping-list-details.component.html',
  styleUrl: './shopping-list-details.component.scss'
})
export class ShoppingListDetailsComponent extends ItemDetailsComponentAbstract<ShoppingList> {

  constructor(route: ActivatedRoute) {
    super(route);
  }
}
