import { Component } from "@angular/core";
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { AuthService, SignUpBody } from "../auth.service";
import { controlValueMatches } from "./common/control-value-matches";
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
} from "@angular/material/card";
import { MatFormField, MatInput, MatLabel } from "@angular/material/input";
import { MatButton } from "@angular/material/button";
import { RouterLink } from "@angular/router";

export type SignUpForm = {
  email: FormControl<string>;
  username: FormControl<string>;
  displayName: FormControl<string>;
  password: FormControl<string>;
  passwordConfirmation: FormControl<string>;
};

@Component({
  selector: "cortado-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.scss"],
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardSubtitle,
    MatCardContent,
    MatInput,
    ReactiveFormsModule,
    MatLabel,
    MatFormField,
    MatButton,
    MatCardActions,
    RouterLink,
  ],
})
export class SignUpComponent {
  readonly passwordConfirmationControl: FormControl<string> =
    new FormControl<string>("", {
      validators: [Validators.required],
      nonNullable: true,
    });
  readonly formGroup: FormGroup<SignUpForm> = this.getFormGroup();

  constructor(private userService: AuthService) {}

  signUp(): void {
    this.passwordConfirmationControl.disable();
    this.userService
      .signUp(
        // Button that calls this method is disabled until sign-up form is valid so additional validation is not needed
        this.formGroup.value as SignUpBody,
      )
      .subscribe();
    this.passwordConfirmationControl.enable();
  }

  private getFormGroup(): FormGroup<SignUpForm> {
    const formGroup: FormGroup<SignUpForm> = new FormGroup<SignUpForm>({
      email: new FormControl<string>("", {
        validators: [Validators.required, Validators.email],
        nonNullable: true,
      }),
      username: new FormControl<string>("", {
        validators: [Validators.required],
        nonNullable: true,
      }),
      displayName: new FormControl<string>("", { nonNullable: true }),
      password: new FormControl<string>("", {
        validators: [Validators.required],
        nonNullable: true,
      }),
      passwordConfirmation: this.passwordConfirmationControl,
    });

    const passwordControl: FormControl<string> = formGroup.get(
      "password",
    ) as FormControl<string>;
    const passwordConfirmationControl: FormControl<string> = formGroup.get(
      "passwordConfirmation",
    ) as FormControl<string>;

    if (passwordControl && passwordConfirmationControl) {
      passwordConfirmationControl.addValidators(
        controlValueMatches(passwordControl),
      );
    }

    return formGroup;
  }
}
