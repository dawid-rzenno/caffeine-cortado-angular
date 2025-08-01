import { Component, DestroyRef, OnInit } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatIconModule } from "@angular/material/icon";
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { AsyncPipe } from "@angular/common";
import { BehaviorSubject } from "rxjs";
import { MassUnitsService } from "../mass-units.service";
import { CreateMassUnitPayload, MassUnit, MassUnitDetails, UpdateMassUnitPayload } from "../mass-unit";
import { DetailsComponent } from "../../shared/details/details.component";

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
export class MassUnitComponent extends DetailsComponent<MassUnitDetails, CreateMassUnitPayload, UpdateMassUnitPayload> implements OnInit {
	readonly nameControl =
		new FormControl<string>("", { validators: Validators.required, nonNullable: true });

	readonly form = new FormGroup({
		name: this.nameControl,
	});

	readonly massUnit$: BehaviorSubject<MassUnit> = new BehaviorSubject<MassUnit>({} as MassUnit);

	constructor(route: ActivatedRoute, service: MassUnitsService, destroyRef: DestroyRef, private router: Router) {
		super(route, service, destroyRef)
	}

	ngOnInit() {
		this.updateFormOnDetailsChange();
		this.updateDetailsOnIdRouteParamChange();
	}

	navigateToItems() {
		this.router.navigateByUrl('/mass-units');
	}

	navigateToItem(id: number) {
		this.router.navigateByUrl(`/mass-units/${id}`);
	}
}
