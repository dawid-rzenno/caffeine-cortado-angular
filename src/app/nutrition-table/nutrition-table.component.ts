import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { MatButtonModule } from "@angular/material/button";
import { MatTableModule } from "@angular/material/table";
import { RouterLink } from "@angular/router";
import { ItemNutrition, Nutrition } from "./item-nutrition";
import { NutritionTableCellComponent } from "./nutrition-table-column/nutrition-table-cell.component";

@Component({
  selector: 'cortado-nutrition-table',
  standalone: true,
  imports: [
    FaIconComponent,
    MatButtonModule,
    MatTableModule,
    RouterLink,
    NutritionTableCellComponent,
  ],
  templateUrl: './nutrition-table.component.html',
  styleUrl: './nutrition-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NutritionTableComponent {
  @Input({ required: true }) items!: Nutrition[] | ItemNutrition[];

  @Input() detailsLink?: string;
  @Input() formLink?: string;
  @Input() onDeleteClick?: (id: string) => void;

  displayedColumns: string[] = [
    'name',
    'energy',
    'totalFat',
    'cholesterol',
    'sodium',
    'totalCarbohydrates',
    'protein',
  ];
}
