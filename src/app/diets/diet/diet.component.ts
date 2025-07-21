import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { ActivatedRoute, Params, Router, RouterLink } from "@angular/router";
import { DietsService } from "../diets.service";
import { BehaviorSubject, of, switchMap } from "rxjs";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { DietMealsComponent } from "./diet-meals/diet-meals.component";
import { Diet } from "../diet";
import { AsyncPipe } from "@angular/common";
import { Meal } from "../../meals/meal";

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
	readonly idControl =
		new FormControl<number | undefined>(undefined, { validators: Validators.required, nonNullable: true });

	readonly nameControl =
		new FormControl<string>("", { validators: Validators.required, nonNullable: true });

	readonly form: FormGroup = new FormGroup({
		id: this.idControl,
		name: this.nameControl,
	});

	readonly diet$: BehaviorSubject<Diet> = new BehaviorSubject<Diet>({ meals: [] as Meal[] } as Diet);

	constructor(private route: ActivatedRoute, private dietsService: DietsService, private router: Router) {}

	ngOnInit() {
		this.diet$.subscribe((diet: Diet | undefined) => this.updateForm(diet))

		this.route.params.pipe(
			switchMap((params: Params) => {
				const id: number | undefined = params['id'];
				return id ? this.dietsService.getById$(id) : of(undefined)
			})
		).subscribe((diet?: Diet) => {
			this.diet$.next(diet ?? { meals: [] as Meal[] } as Diet);
		});
	}

	onSubmit() {
		const diet: Diet = {} as Diet;

		if (this.idControl.value) {
			diet.id = this.idControl.value;
		}

		if (this.nameControl.value) {
			diet.name = this.nameControl.value;
		}

		if (this.idControl.value) {
			this.dietsService.update$(diet).subscribe(() => {
				this.navigateToDiets();
			})
		} else {
			this.dietsService.create$(diet).subscribe((diet: Diet) => {
				this.navigateToDiet(diet.id);
			})
		}
	}

	navigateToDiets() {
		this.router.navigateByUrl('/diets');
	}

	navigateToDiet(id: number) {
		this.router.navigateByUrl(`/diets/${id}`);
	}

	updateForm(diet?: Diet) {
		if (diet) {
			this.idControl.setValue(diet.id);
			this.nameControl.setValue(diet.name);
		}
	}

	onDelete(id: number) {
		this.dietsService.delete$(id).subscribe(() => {
			this.navigateToDiets()
		})
	}
}
