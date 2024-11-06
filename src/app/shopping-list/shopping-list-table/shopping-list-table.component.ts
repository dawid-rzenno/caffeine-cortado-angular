import { Component } from "@angular/core";
import { ShoppingList, ShoppingListPatch } from "../shopping-list";
import { ItemTableComponentAbstract } from "../../shared/abstracts/item-table-component.abstract";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { ActivatedRoute, RouterModule } from "@angular/router";
import { ShoppingListService } from "../shopping-list.service";
import { MatDialog } from "@angular/material/dialog";
import { NgIf } from "@angular/common";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";

@Component({
  selector: "cortado-shopping-list-table",
  standalone: true,
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatCardModule,
    RouterModule,
    NgIf,
    FaIconComponent,
  ],
  templateUrl: "./shopping-list-table.component.html",
  styleUrl: "./shopping-list-table.component.scss",
})
export class ShoppingListTableComponent extends ItemTableComponentAbstract<
  ShoppingList,
  ShoppingListPatch
> {
  constructor(
    service: ShoppingListService,
    route: ActivatedRoute,
    dialog: MatDialog,
  ) {
    super(service, route, dialog);
  }
}
