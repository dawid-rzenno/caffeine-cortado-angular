import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Diet } from "../diet";
import { ItemDetailsComponentAbstract } from "../../shared/abstracts/item-details-component.abstract";
import { MatCardModule } from "@angular/material/card";
import { NutritionComponent } from "../../nutrition/nutrition.component";

@Component({
  selector: 'cortado-diet-details',
  standalone: true,
  imports: [
    MatCardModule,
    NutritionComponent,
  ],
  templateUrl: './diet-details.component.html',
  styleUrl: './diet-details.component.scss'
})
export class DietDetailsComponent extends ItemDetailsComponentAbstract<Diet> {

  constructor(route: ActivatedRoute) {
    super(route);
  }
}
