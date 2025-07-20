import { Routes } from "@angular/router";
import { AuthComponent } from "./auth.component";
import { SignInFormComponent } from "./sign-in-form/sign-in-form.component";
import { SignUpFormComponent } from "./sign-up-form/sign-up-form.component";

export const AuthRoutes: Routes = [
	{
		path: '',
		component: AuthComponent,
		children: [
			{
				path: 'sign-in',
				component: SignInFormComponent,
			},
			{
				path: 'sign-up',
				component: SignUpFormComponent,
			},
		]
	}
]
