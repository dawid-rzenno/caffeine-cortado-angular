import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatIconModule } from "@angular/material/icon";
import { ActivatedRoute, Params, Router, RouterLink } from "@angular/router";
import { AsyncPipe } from "@angular/common";
import { IngredientNutrientsComponent } from "./ingredient-nutrients/ingredient-nutrients.component";
import { BehaviorSubject, of, switchMap } from "rxjs";
import { IngredientsService } from "../ingredients.service";
import { Ingredient } from "../ingredient";
import { Nutrient } from "../../nutrients/nutrient";

@Component({
  selector: 'app-ingredient',
  imports: [
		MatButtonModule,
		MatFormFieldModule,
		MatInput,
		ReactiveFormsModule,
		MatIconModule,
		RouterLink,
		IngredientNutrientsComponent,
		AsyncPipe
	],
  templateUrl: './ingredient.component.html',
  styleUrl: './ingredient.component.scss'
})
export class IngredientComponent implements OnInit {
	readonly idControl =
		new FormControl<number | undefined>(undefined, { validators: Validators.required, nonNullable: true });

	readonly nameControl =
		new FormControl<string>("", { validators: Validators.required, nonNullable: true });

	readonly form = new FormGroup({
		id: this.idControl,
		name: this.nameControl,
	});

	readonly ingredient$: BehaviorSubject<Ingredient> = new BehaviorSubject<Ingredient>({ nutrients: [] as Nutrient[] } as Ingredient);

	constructor(private route: ActivatedRoute, private ingredientsService: IngredientsService, private router: Router) {}

	ngOnInit() {
		this.ingredient$.subscribe((ingredient: Ingredient | undefined) => this.updateForm(ingredient))

		this.route.params.pipe(
			switchMap((params: Params) => {
				const id: number | undefined = params['id'];
				return id ? this.ingredientsService.getById$(id) : of(undefined)
			})
		).subscribe((ingredient?: Ingredient) => {
			this.ingredient$.next(ingredient ?? { nutrients: [] as Nutrient[] } as Ingredient);
		});
	}

	onSubmit() {
		const ingredient: Ingredient = {} as Ingredient;

		if (this.idControl.value) {
			ingredient.id = this.idControl.value;
		}

		if (this.nameControl.value) {
			ingredient.name = this.nameControl.value;
		}

		if (this.idControl.value) {
			this.ingredientsService.update$(ingredient).subscribe(() => {
				this.navigateToIngredients();
			})
		} else {
			this.ingredientsService.create$(ingredient).subscribe((ingredient: Ingredient) => {
				this.navigateToIngredient(ingredient.id);
			})
		}
	}

	navigateToIngredients() {
		this.router.navigateByUrl('/ingredients');
	}

	navigateToIngredient(id: number) {
		this.router.navigateByUrl(`/ingredients/${id}`);
	}

	updateForm(ingredient?: Ingredient) {
		if (ingredient) {
			this.idControl.setValue(ingredient.id);
			this.nameControl.setValue(ingredient.name);
		}
	}

	onDelete(id: number) {
		this.ingredientsService.delete$(id).subscribe(() => {
			this.navigateToIngredients()
		})
	}
}
