import { Component } from "@angular/core";
import { ItemFormComponentAbstract } from "../../shared/abstracts/item-form-component.abstract";
import { Workout, WorkoutPatch } from "../workout";
import { FormArray, FormControl, FormGroup } from "@angular/forms";
import { Exercise } from "../../exercise/exercise";
import { ActivatedRoute } from "@angular/router";
import { WorkoutService } from "../workout.service";

export type WorkoutForm = {
  id: FormControl<number | undefined>;
  name: FormControl<string | undefined>;
  exercises: FormArray<FormControl<Exercise>>;
};

@Component({
  selector: "cortado-workout-form",
  standalone: true,
  imports: [],
  templateUrl: "./workout-form.component.html",
  styleUrl: "./workout-form.component.scss",
})
export class WorkoutFormComponent extends ItemFormComponentAbstract<
  Workout,
  WorkoutPatch
> {
  readonly form: FormGroup<WorkoutForm> = new FormGroup<WorkoutForm>({
    id: new FormControl<number | undefined>(undefined, {
      nonNullable: true,
    }),
    name: new FormControl<string>("", { nonNullable: true }),
    exercises: new FormArray<FormControl<Exercise>>([]),
  });

  constructor(route: ActivatedRoute, service: WorkoutService) {
    super(route, service);
  }
}
