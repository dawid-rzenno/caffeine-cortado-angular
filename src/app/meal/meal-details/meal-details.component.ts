import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from "@angular/router";
import { MealModel } from "../meal.model";
import { DetailsComponentAbstract } from "../../shared/abstracts/details-component.abstract";
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
export class MealDetailsComponent extends DetailsComponentAbstract<MealModel> {

  constructor(route: ActivatedRoute) {
    super(route);
  }
}
