import { Component, DestroyRef, OnInit } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { ActivatedRoute, Params, Router, RouterLink } from "@angular/router";
import { DietsService } from "../diets.service";
import { BehaviorSubject, of, switchMap } from "rxjs";
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { DietMealsComponent } from "./diet-meals/diet-meals.component";
import { Diet } from "../diet";
import { AsyncPipe } from "@angular/common";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";

@Component({
	selector: 'app-diet',
	imports: [
		MatButtonModule,
		MatFormFieldModule,
		MatInput,
		ReactiveFormsModule,
		MatIconModule,
		RouterLink,
		DietMealsComponent,
		AsyncPipe
	],
	templateUrl: './diet.component.html',
	styleUrl: './diet.component.scss'
})
export class DietComponent implements OnInit {
	readonly nameControl =
		new FormControl<string>("", { validators: Validators.required, nonNullable: true });

	readonly dietMealsControl = new FormArray([]);

	readonly form = new FormGroup({
		name: this.nameControl,
	});

	readonly diet$ = new BehaviorSubject<Diet | undefined>(undefined);

	constructor(
		private route: ActivatedRoute,
		private dietsService: DietsService,
		private router: Router,
		private destroyRef: DestroyRef
	) {
	}

	ngOnInit() {
		this.diet$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(diet => {
			if (diet) {
				this.form.patchValue(diet);
				return;
			}

			this.form.reset();
		})

		this.route.params.pipe(
			switchMap((params: Params) => {
				return params['id']
					? this.dietsService.getById$(params['id'])
					: of(undefined)
			})
		).subscribe((diet?: Diet) => {
			this.diet$.next(diet);
		});
	}

	onSubmit() {
		if (this.form.invalid) {
			return;
		}

		if (this.diet$.value) {
			this.dietsService.update$(this.form.value as Diet)
				.pipe(takeUntilDestroyed(this.destroyRef))
				.subscribe((diet: Diet) => this.diet$.next(diet));
			return;
		}

		this.dietsService.create$(this.form.value as Diet)
			.pipe(takeUntilDestroyed(this.destroyRef))
			.subscribe((diet: Diet) => this.navigateToDiet(diet.id));
	}

	onReset() {
		if (this.diet$.value) {
			this.form.patchValue(this.diet$.value);
			return;
		}

		this.form.reset();
	}

	navigateToDiets() {
		this.router.navigateByUrl('/diets');
	}

	navigateToDiet(id: number) {
		this.router.navigateByUrl(`/diets/${id}`);
	}

	onDelete(id: number) {
		this.dietsService.delete$(id).subscribe(() => {
			this.navigateToDiets()
		})
	}

	onDietChange(diet: Diet) {
		this.diet$.next(diet);
	}
}
