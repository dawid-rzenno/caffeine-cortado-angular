import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatIconModule } from "@angular/material/icon";
import { ActivatedRoute, Params, Router, RouterLink } from "@angular/router";
import { AsyncPipe } from "@angular/common";
import { BehaviorSubject, of, switchMap } from "rxjs";
import { MassUnit } from "../../nutrients/nutrient-types/nutrient-type";
import { MassUnitsService } from "../mass-units.service";

@Component({
	selector: 'app-mass-unit',
	imports: [
		MatButtonModule,
		MatFormFieldModule,
		MatInput,
		ReactiveFormsModule,
		MatIconModule,
		RouterLink,
		AsyncPipe
	],
	templateUrl: './mass-unit.component.html',
	styleUrl: './mass-unit.component.scss'
})
export class MassUnitComponent implements OnInit {
	readonly idControl =
		new FormControl<number | undefined>(undefined, { validators: Validators.required, nonNullable: true });

	readonly nameControl =
		new FormControl<string>("", { validators: Validators.required, nonNullable: true });

	readonly form = new FormGroup({
		id: this.idControl,
		name: this.nameControl,
	});

	readonly massUnit$: BehaviorSubject<MassUnit> = new BehaviorSubject<MassUnit>({} as MassUnit);

	constructor(private route: ActivatedRoute, private massUnitsService: MassUnitsService, private router: Router) {
	}

	ngOnInit() {
		this.massUnit$.subscribe((massUnit: MassUnit | undefined) => this.updateForm(massUnit))

		this.route.params.pipe(
			switchMap((params: Params) => {
				const id: number | undefined = params['id'];
				return id ? this.massUnitsService.getById$(id) : of(undefined)
			})
		).subscribe((massUnit?: MassUnit) => {
			this.massUnit$.next(massUnit ?? {} as MassUnit);
		});
	}

	onSubmit() {
		const massUnit: MassUnit = {} as MassUnit;

		if (this.idControl.value) {
			massUnit.id = this.idControl.value;
		}

		if (this.nameControl.value) {
			massUnit.name = this.nameControl.value;
		}

		if (this.idControl.value) {
			this.massUnitsService.update$(massUnit).subscribe(() => {
				this.navigateToMassUnits();
			})
		} else {
			this.massUnitsService.create$(massUnit).subscribe((massUnit: MassUnit) => {
				this.navigateToMassUnit(massUnit.id);
			})
		}
	}

	navigateToMassUnits() {
		this.router.navigateByUrl('/mass-units');
	}

	navigateToMassUnit(id: number) {
		this.router.navigateByUrl(`/mass-units/${id}`);
	}

	updateForm(massUnit?: MassUnit) {
		if (massUnit) {
			this.idControl.setValue(massUnit.id);
			this.nameControl.setValue(massUnit.name);
		}
	}

	onDelete(id: number) {
		this.massUnitsService.delete$(id).subscribe(() => {
			this.navigateToMassUnits()
		})
	}
}
