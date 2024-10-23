import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from "@angular/router";
import { Meal } from "../meal";
import { ItemDetailsComponentAbstract } from "../../shared/abstracts/item-details-component.abstract";
import { MatCardModule } from "@angular/material/card";

@Component({
  selector: 'cortado-meal-details',
  standalone: true,
  imports: [
    MatCardModule,
    RouterLink,
  ],
  templateUrl: './meal-details.component.html',
  styleUrl: './meal-details.component.scss'
})
export class MealDetailsComponent extends ItemDetailsComponentAbstract<Meal> {

  constructor(route: ActivatedRoute) {
    super(route);
  }
}
