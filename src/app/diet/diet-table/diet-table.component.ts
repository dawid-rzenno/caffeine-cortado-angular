import { Component } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { ActivatedRoute, RouterModule } from "@angular/router";
import { ItemTableComponentAbstract } from "../../shared/abstracts/item-table-component.abstract";
import { Diet, DietPatch } from "../diet";
import { DietService } from "../diet.service";
import { MatDialog } from "@angular/material/dialog";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { NgIf } from "@angular/common";

@Component({
  selector: "cortado-diet-table",
  standalone: true,
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    RouterModule,
    MatCardModule,
    FaIconComponent,
    NgIf,
  ],
  templateUrl: "./diet-table.component.html",
  styleUrl: "./diet-table.component.scss",
})
export class DietTableComponent extends ItemTableComponentAbstract<
  Diet,
  DietPatch
> {
  constructor(service: DietService, route: ActivatedRoute, dialog: MatDialog) {
    super(service, route, dialog);
  }
}
