import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from "@angular/router";
import { NgForOf } from "@angular/common";
import { ShoppingListModel } from "../shopping-list-model";
import { ItemDetailsComponentAbstract } from "../../shared/abstracts/item-details-component-abstract.directive";
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
export class ShoppingListDetailsComponent extends ItemDetailsComponentAbstract<ShoppingListModel> {

  constructor(route: ActivatedRoute) {
    super(route);
  }
}
