import { Component } from '@angular/core';
import { ItemDetailsComponentAbstract } from "../../shared/abstracts/item-details-component.abstract";
import { Ingredient } from "../ingredient";
import { ActivatedRoute } from "@angular/router";
import { MatCardModule } from "@angular/material/card";
import { MatGridListModule } from "@angular/material/grid-list";

@Component({
  selector: 'cortado-ingredient-details',
  standalone: true,
  imports: [
    MatCardModule,
    MatGridListModule
  ],
  templateUrl: './ingredient-details.component.html',
  styleUrl: './ingredient-details.component.scss'
})
export class IngredientDetailsComponent extends ItemDetailsComponentAbstract<Ingredient> {

  constructor(route: ActivatedRoute) {
    super(route);
  }
}
