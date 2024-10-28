import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
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
  @Input({ required: true }) item!: NutritionBase;
}
