import { Component, DestroyRef, OnInit } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatIconModule } from "@angular/material/icon";
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { AsyncPipe } from "@angular/common";
import { IngredientNutrientsComponent } from "./ingredient-nutrients/ingredient-nutrients.component";
import { IngredientsService } from "../ingredients.service";
import { CreateIngredientPayload, IngredientDetails } from "../ingredient";
import { DetailsComponent } from "../../shared/details/details.component";
import { UpdateDietPayload } from "../../diets/diet";

export type IngredientFormControls = {
	name: FormControl<string>;
}

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
export class IngredientComponent extends DetailsComponent<IngredientDetails, CreateIngredientPayload, UpdateDietPayload> implements OnInit {
	readonly nameControl =
		new FormControl<string>("", { validators: Validators.required, nonNullable: true });

	readonly form = new FormGroup<IngredientFormControls>({
		name: this.nameControl,
	});

	constructor( route: ActivatedRoute,  service: IngredientsService, destroyRef: DestroyRef, private router: Router) {
		super(route, service, destroyRef)
	}

	ngOnInit() {
		this.updateFormOnDetailsChange();
		this.updateDetailsOnIdRouteParamChange();
	}

	navigateToItems() {
		this.router.navigateByUrl('/ingredients');
	}

	navigateToItem(id: number) {
		this.router.navigateByUrl(`/ingredients/${id}`);
	}
}
