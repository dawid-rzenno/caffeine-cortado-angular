import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { BehaviorSubject, of, switchMap } from "rxjs";
import { ActivatedRoute, Params, Router, RouterLink } from "@angular/router";
import { NutrientTypesService } from "../nutrient-types.service";
import { NutrientType } from "../nutrient-type";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { AsyncPipe } from "@angular/common";

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
	],
  templateUrl: './nutrient-type.component.html',
  styleUrl: './nutrient-type.component.scss'
})
export class NutrientTypeComponent implements OnInit {
	readonly idControl =
		new FormControl<number | undefined>(undefined, { validators: Validators.required, nonNullable: true });

	readonly nameControl =
		new FormControl<string>("", { validators: Validators.required, nonNullable: true });

	readonly massUnitIdControl =
		new FormControl<number>(0, { validators: Validators.required, nonNullable: true });

	readonly form = new FormGroup({
		id: this.idControl,
		name: this.nameControl,
		massUnitId: this.massUnitIdControl,
	});

	readonly nutrientType$: BehaviorSubject<NutrientType> = new BehaviorSubject<NutrientType>({ } as NutrientType);

	constructor(private route: ActivatedRoute, private service: NutrientTypesService, private router: Router) {}

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
		}
	}

	onDelete(id: number) {
		this.service.delete$(id).subscribe(() => {
			this.navigateToNutrientTypes()
		})
	}
}
