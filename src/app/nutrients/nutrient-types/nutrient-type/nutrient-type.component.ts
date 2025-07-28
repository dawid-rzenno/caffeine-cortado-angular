import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { BehaviorSubject, map, Observable, of, switchMap } from "rxjs";
import { ActivatedRoute, Params, Router, RouterLink } from "@angular/router";
import { NutrientTypesService } from "../nutrient-types.service";
import { MassUnit, NutrientType } from "../nutrient-type";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { AsyncPipe, NgForOf } from "@angular/common";
import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from "@angular/material/autocomplete";
import { SelectOption } from "../../../utils/select-option";
import { MassUnitsService } from "../../../mass-units/mass-units.service";

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
export class NutrientTypeComponent implements OnInit {
	readonly idControl =
		new FormControl<number | undefined>(undefined, { validators: Validators.required, nonNullable: true });

	readonly nameControl =
		new FormControl<string>("", { validators: Validators.required, nonNullable: true });

	readonly massUnitSearchControl =
		new FormControl<string>("", { validators: Validators.required, nonNullable: true });

	readonly massUnitIdControl =
		new FormControl<number>(0, { validators: Validators.required, nonNullable: true });

	readonly massUnitSelectOptions: Observable<SelectOption[]> = this.massUnitSearchControl.valueChanges.pipe(
		switchMap(term => this.massUnitsService.getAllByTerm$({ term, globalSearch: false })),
		map((massUnits: MassUnit[]) => massUnits.map(this.massUnitToSelectOption))
	);

	readonly form = new FormGroup({
		id: this.idControl,
		name: this.nameControl,
		massUnitSearch: this.massUnitSearchControl,
		massUnitId: this.massUnitIdControl,
	});

	readonly nutrientType$: BehaviorSubject<NutrientType> = new BehaviorSubject<NutrientType>({ } as NutrientType);

	constructor(
		private route: ActivatedRoute,
		private service: NutrientTypesService,
		private massUnitsService: MassUnitsService,
		private router: Router
	) {}

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

	ngOnInit() {
		this.nutrientType$.subscribe((nutrientType: NutrientType | undefined) => this.updateForm(nutrientType))

		this.route.params.pipe(
			switchMap((params: Params) => {
				const id: number | undefined = params['id'];
				return id ? this.service.getById$(id) : of(undefined)
			})
		).subscribe((nutrientType?: NutrientType) => {
			this.nutrientType$.next(nutrientType ?? { } as NutrientType);
		});
	}

	onSubmit() {
		const nutrientType: NutrientType = {} as NutrientType;

		if (this.idControl.value) {
			nutrientType.id = this.idControl.value;
		}

		if (this.nameControl.value) {
			nutrientType.name = this.nameControl.value;
		}

		if (this.massUnitIdControl.value) {
			nutrientType.massUnitId = this.massUnitIdControl.value;
		}

		if (this.idControl.value) {
			this.service.update$(nutrientType).subscribe(() => {
				this.navigateToNutrientTypes();
			})
		} else {
			this.service.create$(nutrientType).subscribe((nutrientType: NutrientType) => {
				this.navigateToNutrientType(nutrientType.id);
			})
		}
	}

	navigateToNutrientTypes() {
		this.router.navigateByUrl('/nutrients/nutrient-types');
	}

	navigateToNutrientType(id: number) {
		this.router.navigateByUrl(`/nutrients/nutrient-types/${id}`);
	}

	updateForm(nutrientType?: NutrientType) {
		if (nutrientType) {
			this.idControl.setValue(nutrientType.id);
			this.nameControl.setValue(nutrientType.name);
			if (nutrientType.massUnit) {
				this.massUnitSearchControl.setValue(nutrientType.massUnit.name, { emitEvent: false });
				this.massUnitIdControl.setValue(nutrientType.massUnit.id);
			}
		}
	}

	onDelete(id: number) {
		this.service.delete$(id).subscribe(() => {
			this.navigateToNutrientTypes()
		})
	}
}
