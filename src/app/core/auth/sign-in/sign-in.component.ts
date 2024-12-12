import { Component } from "@angular/core";
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { AuthService, SignInBody } from "../auth.service";
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
} from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import { MatCheckbox } from "@angular/material/checkbox";
import { MatButton } from "@angular/material/button";
import { RouterLink } from "@angular/router";

export type SignUpForm = {
  username: FormControl<string>;
  password: FormControl<string>;
};

export type SignInForm = SignUpForm & {
  rememberMe: FormControl<boolean>;
};

@Component({
  selector: "cortado-sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.scss"],
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardSubtitle,
    MatCardContent,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInput,
    MatCheckbox,
    MatButton,
    MatCardActions,
    RouterLink,
  ],
})
export class SignInComponent {
  readonly formGroup: FormGroup<SignInForm> = new FormGroup<SignInForm>({
    username: new FormControl<string>("dawid", {
      validators: [Validators.required],
      nonNullable: true,
    }),
    password: new FormControl<string>("password", {
      validators: [Validators.required],
      nonNullable: true,
    }),
    rememberMe: new FormControl<boolean>(false, { nonNullable: true }),
  });

  constructor(private authService: AuthService) {}

  signIn(): void {
    this.authService
      .signIn(
        // Button that calls this method is disabled until sign-in form is valid so additional validation is not needed
        this.formGroup.value as SignInBody,
      )
      .subscribe();
  }
}
