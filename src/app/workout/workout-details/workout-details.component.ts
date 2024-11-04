import { Component } from '@angular/core';
import { ItemDetailsComponentAbstract } from "../../shared/abstracts/item-details-component.abstract";
import { Workout } from "../workout";
import { ActivatedRoute } from "@angular/router";
import { MatCardModule } from "@angular/material/card";

@Component({
  selector: 'cortado-workout-details',
  standalone: true,
  imports: [
    MatCardModule
  ],
  templateUrl: './workout-details.component.html',
  styleUrl: './workout-details.component.scss'
})
export class WorkoutDetailsComponent extends ItemDetailsComponentAbstract<Workout> {
  constructor(route: ActivatedRoute) {
    super(route);
  }
}
