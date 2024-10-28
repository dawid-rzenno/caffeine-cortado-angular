import { Component, Input } from '@angular/core';
import { Macronutrient } from "../nutrient";
import { MatCell, MatCellDef, MatColumnDef, MatHeaderCell, MatHeaderCellDef } from "@angular/material/table";

@Component({
  selector: 'cortado-nutrition-table-column',
  standalone: true,
  imports: [
    MatCell,
    MatCellDef,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderCellDef
  ],
  templateUrl: './nutrition-table-cell.component.html',
  styleUrl: './nutrition-table-cell.component.scss'
})
export class NutritionTableCellComponent {
  @Input({ required: true }) nutrient!: Macronutrient;
}
