import { Component } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatTableModule } from "@angular/material/table";
import { Meal, MealPatch } from "../meal";
import { ItemTableComponentAbstract } from "../../shared/abstracts/item-table-component.abstract";
import { MatCardModule } from "@angular/material/card";
import { MatPaginatorModule } from "@angular/material/paginator";
import { ActivatedRoute, RouterModule } from "@angular/router";
import { MatDialog } from "@angular/material/dialog";
import { MealService } from "../meal.service";
import { NgIf } from "@angular/common";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";

@Component({
  selector: "cortado-meal-table",
  standalone: true,
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    RouterModule,
    MatCardModule,
    NgIf,
    FaIconComponent,
  ],
  templateUrl: "./meal-table.component.html",
  styleUrl: "./meal-table.component.scss",
})
export class MealTableComponent extends ItemTableComponentAbstract<
  Meal,
  MealPatch
> {
  override displayedColumns: string[] = ["id", "name", "rating", "actions"];

  constructor(service: MealService, route: ActivatedRoute, dialog: MatDialog) {
    super(service, route, dialog);
  }
}
