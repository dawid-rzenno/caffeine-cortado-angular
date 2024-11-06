import { FormArray, FormControl } from "@angular/forms";
import { Meal } from "../../meal/meal";

export type DietForm = {
  id: FormControl<number | undefined>;
  name: FormControl<string | undefined>;
  meals: FormArray<FormControl<Meal>>;
};
