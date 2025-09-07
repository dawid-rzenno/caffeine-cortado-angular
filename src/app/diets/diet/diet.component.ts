import { Component, DestroyRef, OnInit } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { ActivatedRoute, Router } from "@angular/router";
import { DietsService } from "../diets.service";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { DietMealsComponent } from "./diet-meals/diet-meals.component";
import { CreateDietPayload, DietDetails, UpdateDietPayload } from "../diet";
import { AsyncPipe } from "@angular/common";
import { DetailsComponent } from "../../shared/details/details.component";
import { DetailsTopbarComponent } from "../../shared/details/details-topbar/details-topbar.component";

export type DietFormControls = {
	name: FormControl<string>
}

@Component({
	selector: 'app-diet',
	imports: [
		MatButtonModule,
		MatFormFieldModule,
		MatInput,
		ReactiveFormsModule,
		MatIconModule,
		DietMealsComponent,
		AsyncPipe,
		DetailsTopbarComponent
	],
	templateUrl: './diet.component.html',
	styleUrl: './diet.component.scss'
})
export class DietComponent extends DetailsComponent<DietDetails, CreateDietPayload, UpdateDietPayload> implements OnInit {
	readonly nameControl =
		new FormControl<string>("", { validators: Validators.required, nonNullable: true });

	readonly form = new FormGroup<DietFormControls>({
		name: this.nameControl,
	});

	constructor(
		private router: Router,
		route: ActivatedRoute,
		service: DietsService,
		destroyRef: DestroyRef
	) {
		super(route, service, destroyRef)
	}

	ngOnInit() {
		this.updateFormOnDetailsChange();
		this.updateDetailsOnIdRouteParamChange();
	}

	navigateToItems() {
		this.router.navigateByUrl('/diets');
	}

	navigateToItem(id: number) {
		this.router.navigateByUrl(`/diets/${id}`);
	}
}
