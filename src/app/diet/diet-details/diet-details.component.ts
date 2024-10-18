import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from "@angular/router";
import { Diet } from "../diet";
import { ItemDetailsComponentAbstract } from "../../shared/abstracts/item-details-component-abstract.directive";
import { MatCardModule } from "@angular/material/card";
import { MealTableComponent } from "../../meal/meal-table/meal-table.component";

@Component({
  selector: 'cortado-diet-details',
  standalone: true,
  imports: [
    MatCardModule,
    RouterLink,
    MealTableComponent
  ],
  templateUrl: './diet-details.component.html',
  styleUrl: './diet-details.component.scss'
})
export class DietDetailsComponent extends ItemDetailsComponentAbstract<Diet> {
  constructor(route: ActivatedRoute) {
    super(route);
  }
}
