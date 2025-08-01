import { Component, DestroyRef, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { map, Observable, switchMap } from "rxjs";
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { NutrientTypesService } from "../nutrient-types.service";
import {
	CreateNutrientTypePayload,
	NutrientType,
	NutrientTypeDetails,
	UpdateNutrientTypePayload
} from "../nutrient-type";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { AsyncPipe, NgForOf } from "@angular/common";
import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from "@angular/material/autocomplete";
import { SelectOption } from "../../../utils/select-option";
import { MassUnitsService } from "../../../mass-units/mass-units.service";
import { MassUnit } from "../../../mass-units/mass-unit";
import { DetailsComponent } from "../../../shared/details/details.component";

import { Id } from "../../../shared/item-base";

@Component({
	selector: 'app-nutrient-type',
	imports: [
		MatButtonModule,
		MatFormFieldModule,
		MatInput,
		ReactiveFormsModule,
		MatIconModule,
		RouterLink,
		AsyncPipe,
		MatAutocompleteModule,
		NgForOf,
	],
	templateUrl: './nutrient-type.component.html',
	styleUrl: './nutrient-type.component.scss'
})
export class NutrientTypeComponent
	extends DetailsComponent<NutrientTypeDetails, CreateNutrientTypePayload, UpdateNutrientTypePayload>
	implements OnInit {

	readonly nameControl =
		new FormControl<string>("", { validators: Validators.required, nonNullable: true });

	readonly massUnitSearchControl =
		new FormControl<string>("", { validators: Validators.required, nonNullable: true });

	readonly massUnitIdControl =
		new FormControl<number>(0, { validators: Validators.required, nonNullable: true });

	readonly massUnitSelectOptions: Observable<SelectOption[]> = this.massUnitSearchControl.valueChanges.pipe(
		switchMap(term => this.massUnitsService.getAll$({ term })),
		map((massUnits: MassUnit[]) => massUnits.map(this.massUnitToSelectOption))
	);

	readonly form = new FormGroup({
		name: this.nameControl,
		massUnitSearch: this.massUnitSearchControl,
		massUnitId: this.massUnitIdControl,
	});

	constructor(
		route: ActivatedRoute,
		service: NutrientTypesService,
		destroyRef: DestroyRef,
		private massUnitsService: MassUnitsService,
		private router: Router
	) {
		super(route, service, destroyRef);
	}

	ngOnInit() {
		this.updateFormOnDetailsChange();
		this.updateDetailsOnIdRouteParamChange();
	}

	override getUpdateItemPayload(id: Id): UpdateNutrientTypePayload {
		const nutrientType: NutrientType = { id } as NutrientType;

		if (this.nameControl.value) {
			nutrientType.name = this.nameControl.value;
		}

		if (this.massUnitIdControl.value) {
			nutrientType.massUnitId = this.massUnitIdControl.value;
		}

		return nutrientType;
	}

	override updateForm(nutrientType?: NutrientType) {
		if (nutrientType) {
			this.nameControl.setValue(nutrientType.name);

			if (nutrientType.massUnit) {
				this.massUnitSearchControl.setValue(nutrientType.massUnit.name, { emitEvent: false });
				this.massUnitIdControl.setValue(nutrientType.massUnit.id);
			}
			return;
		}

		this.form.reset();
	}

	navigateToItems() {
		this.router.navigateByUrl('/nutrients/nutrient-types');
	}

	navigateToItem(id: number) {
		this.router.navigateByUrl(`/nutrients/nutrient-types/${id}`);
	}

	massUnitToSelectOption(massUnit: MassUnit) {
		return {
			value: massUnit.id,
			viewValue: massUnit.name,
		} as SelectOption;
	}

	onOptionSelected(event: MatAutocompleteSelectedEvent) {
		this.massUnitIdControl.setValue(event.option.value);
		this.massUnitSearchControl.setValue(event.option.viewValue);
	}


}
