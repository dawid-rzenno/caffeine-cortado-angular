import { Component } from "@angular/core";
import { ItemTableComponentAbstract } from "../../shared/abstracts/item-table-component.abstract";
import { MatDialog } from "@angular/material/dialog";
import { IngredientService } from "../ingredient.service";
import { Ingredient, IngredientPatch } from "../ingredient";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { ActivatedRoute, RouterModule } from "@angular/router";
import { NgIf } from "@angular/common";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";

@Component({
  selector: "cortado-ingredient-table",
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
  templateUrl: "./ingredient-table.component.html",
  styleUrl: "./ingredient-table.component.scss",
})
export class IngredientTableComponent extends ItemTableComponentAbstract<
  Ingredient,
  IngredientPatch
> {
  override displayedColumns: string[] = ["id", "name", "actions"];

  constructor(
    service: IngredientService,
    route: ActivatedRoute,
    dialog: MatDialog,
  ) {
    super(service, route, dialog);
  }
}
