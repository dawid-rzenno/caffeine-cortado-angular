import { Component } from '@angular/core';
import { ItemDetailsComponentAbstract } from "../../shared/abstracts/item-details-component.abstract";
import { Exercise } from "../exercise";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'cortado-exercise-details',
  standalone: true,
  imports: [],
  templateUrl: './exercise-details.component.html',
  styleUrl: './exercise-details.component.scss'
})
export class ExerciseDetailsComponent extends ItemDetailsComponentAbstract<Exercise> {
  constructor(route: ActivatedRoute) {
    super(route);
  }
}
