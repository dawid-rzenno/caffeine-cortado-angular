import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NutritionBase } from "../nutrition-table/nutrition";
import { MatGridListModule } from "@angular/material/grid-list";

@Component({
  selector: 'cortado-nutrition-information',
  standalone: true,
  imports: [
    MatGridListModule
  ],
  templateUrl: './nutrition-information.component.html',
  styleUrl: './nutrition-information.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NutritionInformationComponent {
  item: NutritionBase = {
    macronutrients: [
      {
        id: 0,
        name: 'Protein',
        amount: {
          rdaPercentage: 54,
          value: 23,
          unit: 'g'
        }
      },
      {
        id: 1,
        name: 'Fat',
        amount: {
          rdaPercentage: 78,
          value: 23,
          unit: 'g'
        },
        components: [
          {
            id: 0,
            name: 'of which saturates',
            amount: {
              rdaPercentage: 2,
              value: 13,
              unit: 'g'
            }
          },
          {
            id: 0,
            name: 'of which mono-unsaturates',
            amount: {
              rdaPercentage: 12,
              value: 2,
              unit: 'g'
            }
          },
          {
            id: 0,
            name: 'polyunsaturates',
            amount: {
              rdaPercentage: 8,
              value: 14,
              unit: 'g'
            }
          },
        ]
      },
      {
        id: 2,
        name: 'Carbohydrates',
        amount: {
          rdaPercentage: 12,
          value: 78,
          unit: 'g'
        },
        components: [
          {
            id: 0,
            name: 'of which sugars',
            amount: {
              rdaPercentage: 33,
              value: 22,
              unit: 'g'
            }
          },
          {
            id: 0,
            name: 'of which starch',
            amount: {
              rdaPercentage: 33,
              value: 22,
              unit: 'g'
            }
          },
        ]
      }
    ],
    minerals: [
      {
        id: 1,
        name: 'Calcium',
        amount: {
          rdaPercentage: 19,
          value: 12,
          unit: 'mg'
        }
      },
      {
        id: 2,
        name: 'Iron',
        amount: {
          rdaPercentage: 66,
          value: 12,
          unit: 'mg'
        }
      },
      {
        id: 3,
        name: 'Magnesium',
        amount: {
          rdaPercentage: 33,
          value: 22,
          unit: 'mg'
        }
      },

    ],
    vitamins: [
      {
        id: 1,
        name: 'Vitamin C',
        amount: {
          rdaPercentage: 12,
          value: 56,
          unit: 'mg'
        }
      },
      {
        id: 2,
        name: 'Vitamin A',
        amount: {
          rdaPercentage: 34,
          value: 76,
          unit: 'mg'
        }
      },
      {
        id: 4,
        name: 'Vitamin D',
        amount: {
          rdaPercentage: 45,
          value: 33,
          unit: 'mg'
        }
      },
    ],
    energy: [
      {
        value: 1123,
        unit: 'kcal'
      },
      {
        value: 662,
        unit: 'kJ'
      },
    ]

  }
}
