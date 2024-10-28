import { Component } from '@angular/core';
import { ItemDetailsComponentAbstract } from "../../shared/abstracts/item-details-component.abstract";
import { Ingredient } from "../ingredient";
import { ActivatedRoute } from "@angular/router";
import { MatCardModule } from "@angular/material/card";
import { MatGridListModule } from "@angular/material/grid-list";
import { NutritionBase } from "../../nutrition-table/nutrition";
import { EnergyUnits, MassUnits } from "../../nutrition-table/units";
import { NutritionInformationComponent } from "../../nutrition-information/nutrition-information.component";

@Component({
  selector: 'cortado-ingredient-details',
  standalone: true,
  imports: [
    MatCardModule,
    MatGridListModule,
    NutritionInformationComponent,
    NutritionInformationComponent
  ],
  templateUrl: './ingredient-details.component.html',
  styleUrl: './ingredient-details.component.scss'
})
export class IngredientDetailsComponent extends ItemDetailsComponentAbstract<Ingredient> {

  nutritionInformation: NutritionBase = {
    macronutrients: [
      {
        id: 0,
        name: 'Protein',
        amount: {
          id: 0,
          rdaPercentage: 54,
          value: 23,
          unit: MassUnits.Gram
        }
      },
      {
        id: 0,
        name: 'Fat',
        amount: {
          id: 0,
          rdaPercentage: 78,
          value: 23,
          unit: MassUnits.Gram
        }
      },
      {
        id: 0,
        name: 'Carbohydrates',
        amount: {
          id: 0,
          rdaPercentage: 12,
          value: 78,
          unit: MassUnits.Gram
        }
      }
    ],
    minerals: [
      {
        id: 0,
        name: 'Calcium',
        amount: {
          id: 0,
          rdaPercentage: 19,
          value: 12,
          unit: MassUnits.Milligram
        }
      },
      {
        id: 0,
        name: 'Iron',
        amount: {
          id: 0,
          rdaPercentage: 66,
          value: 12,
          unit: MassUnits.Milligram
        }
      },
      {
        id: 0,
        name: 'Magnesium',
        amount: {
          id: 0,
          rdaPercentage: 33,
          value: 22,
          unit: MassUnits.Milligram
        }
      },

    ],
    vitamins: [
      {
        id: 0,
        name: 'Vitamin C',
        amount: {
          id: 0,
          rdaPercentage: 12,
          value: 56,
          unit: MassUnits.Milligram
        }
      },
      {
        id: 0,
        name: 'Vitamin A',
        amount: {
          id: 0,
          rdaPercentage: 34,
          value: 76,
          unit: MassUnits.Milligram
        }
      },
      {
        id: 0,
        name: 'Vitamin D',
        amount: {
          id: 0,
          rdaPercentage: 45,
          value: 33,
          unit: MassUnits.Milligram
        }
      },
    ],
    energy: [
      {
        value: 1123,
        unit: EnergyUnits.Kilocalorie
      },
      {
        value: 662,
        unit: EnergyUnits.Kilojoule
      },
    ]

  }

  constructor(route: ActivatedRoute) {
    super(route);
  }
}
