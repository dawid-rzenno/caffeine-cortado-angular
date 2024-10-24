import { Component, Input } from '@angular/core';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { MatButtonModule } from "@angular/material/button";
import { MatTableModule } from "@angular/material/table";
import { RouterLink } from "@angular/router";
import { Nutrition } from "./nutrition";

export enum NutritionTableColumns {

}

@Component({
  selector: 'cortado-nutrition-table',
  standalone: true,
  imports: [
    FaIconComponent,
    MatButtonModule,
    MatTableModule,
    RouterLink,
  ],
  templateUrl: './nutrition-table.component.html',
  styleUrl: './nutrition-table.component.scss'
})
export class NutritionTableComponent {
  @Input() items: Nutrition[] = [];

  @Input() detailsLink = '';
  @Input() formLink = '';

  displayedColumns: string[] = ['id', 'name', 'category', 'price', 'actions'];
}
