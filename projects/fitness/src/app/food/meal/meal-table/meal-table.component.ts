import { Component, Input } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { MatTableModule } from "@angular/material/table";
import { Meal } from "../meal";
import { TableComponentAbstract } from "../../table-component-abstract.directive";
import { MatCardModule } from "@angular/material/card";
import { MatPaginatorModule } from "@angular/material/paginator";
import { RouterModule } from "@angular/router";
import { MatDialog } from "@angular/material/dialog";
import { MealService } from "../meal.service";
import { NgIf } from "@angular/common";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-meal-table',
  standalone: true,
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    RouterModule,
    MatCardModule,
    NgIf,
    FaIconComponent
  ],
  templateUrl: './meal-table.component.html',
  styleUrl: './meal-table.component.scss'
})
export class MealTableComponent extends TableComponentAbstract<Meal> {
  @Input({ transform: (value: Meal[] | null) => value ?? []}) dataSource: Meal[] = [];

  override displayedColumns: string[] = ["id", "name", "description", "rating", "actions"];

  constructor(service: MealService, dialog: MatDialog) {
    super(service, dialog);
  }
}