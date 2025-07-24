import { Component } from '@angular/core';
import { AuthService } from "../auth.service";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";

type SignUpFormControls = {
	username: FormControl<string>,
	password: FormControl<string>,
}

@Component({
  selector: 'app-sign-up-form',
  imports: [MatCardModule, MatButtonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './sign-up-form.component.html',
  styleUrl: './sign-up-form.component.scss'
})
export class SignUpFormComponent {

	readonly usernameControl = new FormControl<string>("", { validators: Validators.required, nonNullable: true })
	readonly passwordControl = new FormControl<string>("", { validators: Validators.required, nonNullable: true })

	readonly form: FormGroup<SignUpFormControls> = new FormGroup({
		username: this.usernameControl,
		password: this.passwordControl,
	});

	constructor(private authService: AuthService, private router: Router) {
	}

	onSubmit() {
		this.form.markAllAsTouched();

		if (this.form.valid) {
			this.authService.signUp$({
				username: this.form.value.username ?? "",
				password: this.form.value.password ?? "",
			}).subscribe(() => {
				this.router.navigateByUrl("/auth/sign-in");
			});
		}
	}
}
