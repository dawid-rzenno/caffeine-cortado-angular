import { Component } from '@angular/core';
import { ItemFormComponentAbstract } from "../../shared/abstracts/item-form-component.abstract";
import { Exercise, ExercisePatch } from "../exercise";
import { FormControl, FormGroup } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { ExerciseService } from "../exercise.service";

export type ExerciseForm = {
  id: FormControl<number | undefined>,
  name: FormControl<string | undefined>,
}

@Component({
  selector: 'cortado-exercise-form',
  standalone: true,
  imports: [],
  templateUrl: './exercise-form.component.html',
  styleUrl: './exercise-form.component.scss'
})
export class ExerciseFormComponent extends ItemFormComponentAbstract<Exercise, ExercisePatch> {

  readonly form: FormGroup<ExerciseForm> = new FormGroup<ExerciseForm>({
    id: new FormControl<number | undefined>(undefined, { nonNullable: true }),
    name: new FormControl<string>("", { nonNullable: true }),
  });

  constructor(route: ActivatedRoute, service: ExerciseService) {
    super(route, service);
  }
}
