import { Component } from '@angular/core';
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { AuthService } from "../auth.service";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { Router } from "@angular/router";

type SignInFormControls = {
	username: FormControl<string>,
	password: FormControl<string>,
}

@Component({
	selector: 'app-sign-in-form',
	imports: [MatCardModule, MatButtonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule],
	templateUrl: './sign-in-form.component.html',
	styleUrl: './sign-in-form.component.scss'
})
export class SignInFormComponent {

	readonly usernameControl = new FormControl<string>("", { validators: Validators.required, nonNullable: true })
	readonly passwordControl = new FormControl<string>("", { validators: Validators.required, nonNullable: true })

	readonly form: FormGroup<SignInFormControls> = new FormGroup({
		username: this.usernameControl,
		password: this.passwordControl,
	});

	constructor(private authService: AuthService, private router: Router) {
	}

	onSubmit() {
		this.form.markAllAsTouched();

		if (this.form.valid) {
			this.authService.signIn$({
				username: this.form.value.username ?? "",
				password: this.form.value.password ?? "",
			}).subscribe(() => {
				this.router.navigate(['/dashboard']);
			});
		}
	}
}
