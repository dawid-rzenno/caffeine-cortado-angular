import { Component, DestroyRef, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { CreateMealPayload, MealDetails, UpdateMealPayload } from "../meal";
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { MealsService } from "../meals.service";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { AsyncPipe } from "@angular/common";
import { MealIngredientsComponent } from "./meal-ingredients/meal-ingredients.component";
import { DetailsComponent } from "../../shared/details/details.component";

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
export class MealComponent extends DetailsComponent<MealDetails, CreateMealPayload, UpdateMealPayload> implements OnInit {
	readonly nameControl =
		new FormControl<string>("", { validators: Validators.required, nonNullable: true });

	readonly form = new FormGroup({
		name: this.nameControl,
	});

	constructor(route: ActivatedRoute, service: MealsService, destroyRef: DestroyRef, private router: Router) {
		super(route, service, destroyRef)
	}

	ngOnInit() {
		this.updateDetailsOnIdRouteParamChange();
		this.updateFormOnDetailsChange();
	}

	navigateToItems() {
		this.router.navigateByUrl('/meals');
	}

	navigateToItem(id: number) {
		this.router.navigateByUrl(`/meals/${id}`);
	}
}
