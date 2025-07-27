import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatIconModule } from "@angular/material/icon";
import { ActivatedRoute, Params, Router, RouterLink } from "@angular/router";
import { AsyncPipe } from "@angular/common";
import { BehaviorSubject, of, switchMap } from "rxjs";
import { NutrientNamesService } from "../nutrient-names.service";
import { NutrientName } from "../nutrient-name";

@Component({
  selector: 'app-nutrient-name',
  imports: [
		MatButtonModule,
		MatFormFieldModule,
		MatInput,
		ReactiveFormsModule,
		MatIconModule,
		RouterLink,
		AsyncPipe,
	],
  templateUrl: './nutrient-name.component.html',
  styleUrl: './nutrient-name.component.scss'
})
export class NutrientNameComponent implements OnInit {
	readonly idControl =
		new FormControl<number | undefined>(undefined, { validators: Validators.required, nonNullable: true });

	readonly nameControl =
		new FormControl<string>("", { validators: Validators.required, nonNullable: true });

	readonly form = new FormGroup({
		id: this.idControl,
		name: this.nameControl,
	});

	readonly nutrientName$: BehaviorSubject<NutrientName> = new BehaviorSubject<NutrientName>({ } as NutrientName);

	constructor(private route: ActivatedRoute, private service: NutrientNamesService, private router: Router) {}

	ngOnInit() {
		this.nutrientName$.subscribe((nutrientName: NutrientName | undefined) => this.updateForm(nutrientName))

		this.route.params.pipe(
			switchMap((params: Params) => {
				const id: number | undefined = params['id'];
				return id ? this.service.getById$(id) : of(undefined)
			})
		).subscribe((nutrientName?: NutrientName) => {
			this.nutrientName$.next(nutrientName ?? { } as NutrientName);
		});
	}

	onSubmit() {
		const nutrientName: NutrientName = {} as NutrientName;

		if (this.idControl.value) {
			nutrientName.id = this.idControl.value;
		}

		if (this.nameControl.value) {
			nutrientName.name = this.nameControl.value;
		}

		if (this.idControl.value) {
			this.service.update$(nutrientName).subscribe(() => {
				this.navigateToNutrientNames();
			})
		} else {
			this.service.create$(nutrientName).subscribe((nutrientName: NutrientName) => {
				this.navigateToNutrientName(nutrientName.id);
			})
		}
	}

	navigateToNutrientNames() {
		this.router.navigateByUrl('/nutrients/nutrient-names');
	}

	navigateToNutrientName(id: number) {
		this.router.navigateByUrl(`/nutrients/nutrient-names/${id}`);
	}

	updateForm(nutrientName?: NutrientName) {
		if (nutrientName) {
			this.idControl.setValue(nutrientName.id);
			this.nameControl.setValue(nutrientName.name);
		}
	}

	onDelete(id: number) {
		this.service.delete$(id).subscribe(() => {
			this.navigateToNutrientNames()
		})
	}
}
