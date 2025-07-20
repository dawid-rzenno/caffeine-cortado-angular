import { Routes } from '@angular/router';
import { AuthComponent } from "./auth/auth.component";
import { SignInFormComponent } from "./auth/sign-in-form/sign-in-form.component";

export const routes: Routes = [
	{
		path: '',
		loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent),
	},
	{
		path: 'auth',
		component: AuthComponent,
		children: [
			{
				path: 'sign-in',
				component: SignInFormComponent,
			},
			{
				path: 'sign-up',
				loadComponent: () => import('./auth/sign-up-form/sign-up-form.component').then(m => m.SignUpFormComponent)
			},
		]
	},
	{
		path: 'not-found',
		loadComponent: () => import('./not-found/not-found.component').then(m => m.NotFoundComponent),
	},
	{
		path: '**',
		redirectTo: 'not-found'
	}
];
