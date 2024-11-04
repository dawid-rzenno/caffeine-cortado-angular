import { Component } from '@angular/core';
import { ItemDetailsComponentAbstract } from "../../shared/abstracts/item-details-component.abstract";
import { Beverage } from "../beverage";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'cortado-beverage-details',
  standalone: true,
  imports: [],
  templateUrl: './beverage-details.component.html',
  styleUrl: './beverage-details.component.scss'
})
export class BeverageDetailsComponent extends ItemDetailsComponentAbstract<Beverage> {

  constructor(route: ActivatedRoute) {
    super(route);
  }
}
