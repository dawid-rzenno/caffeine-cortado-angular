import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { BehaviorSubject, of, switchMap } from "rxjs";
import { Meal } from "../meal";
import { ActivatedRoute, Params, Router, RouterLink } from "@angular/router";
import { MealsService } from "../meals.service";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { AsyncPipe } from "@angular/common";
import { Ingredient } from "../../ingredients/ingredient";
import { MealIngredientsComponent } from "./meal-ingredients/meal-ingredients.component";

@Component({
  selector: 'app-meal',
	imports: [
		MatButtonModule,
		MatFormFieldModule,
		MatInput,
		ReactiveFormsModule,
		MatIconModule,
		RouterLink,
		AsyncPipe,
		MealIngredientsComponent
	],
  templateUrl: './meal.component.html',
  styleUrl: './meal.component.scss'
})
export class MealComponent implements OnInit {
	readonly idControl =
		new FormControl<number | undefined>(undefined, { validators: Validators.required, nonNullable: true });

	readonly nameControl =
		new FormControl<string>("", { validators: Validators.required, nonNullable: true });

	readonly form: FormGroup = new FormGroup({
		id: this.idControl,
		name: this.nameControl,
	});

	readonly meal$: BehaviorSubject<Meal> = new BehaviorSubject<Meal>({ ingredients: [] as Ingredient[] } as Meal);

	constructor(private route: ActivatedRoute, private mealsService: MealsService, private router: Router) {}

	ngOnInit() {
		this.meal$.subscribe((meal: Meal | undefined) => this.updateForm(meal))

		this.route.params.pipe(
			switchMap((params: Params) => {
				const id: number | undefined = params['id'];
				return id ? this.mealsService.getById$(id) : of(undefined)
			})
		).subscribe((meal?: Meal) => {
			this.meal$.next(meal ?? { ingredients: [] as Ingredient[] } as Meal);
		});
	}

	onSubmit() {
		const meal: Meal = {} as Meal;

		if (this.idControl.value) {
			meal.id = this.idControl.value;
		}

		if (this.nameControl.value) {
			meal.name = this.nameControl.value;
		}

		if (this.idControl.value) {
			this.mealsService.update$(meal).subscribe(() => {
				this.navigateToMeals();
			})
		} else {
			this.mealsService.create$(meal).subscribe((meal: Meal) => {
				this.navigateToMeal(meal.id);
			})
		}
	}

	navigateToMeals() {
		this.router.navigateByUrl('/meals');
	}

	navigateToMeal(id: number) {
		this.router.navigateByUrl(`/meals/${id}`);
	}

	updateForm(meal?: Meal) {
		if (meal) {
			this.idControl.setValue(meal.id);
			this.nameControl.setValue(meal.name);
		}
	}

	onDelete(id: number) {
		this.mealsService.delete$(id).subscribe(() => {
			this.navigateToMeals()
		})
	}
}
