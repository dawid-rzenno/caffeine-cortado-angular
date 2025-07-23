import { Routes } from '@angular/router';
import { AuthComponent } from "./auth/auth.component";
import { SignInFormComponent } from "./auth/sign-in-form/sign-in-form.component";
import { UsersComponent } from "./users/users.component";
import { UserComponent } from "./users/user/user.component";

export const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent),
	},
	{
		path: 'dashboard',
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
		path: 'users',
		children: [
			{
				path: '',
				pathMatch: 'full',
				component: UsersComponent,
			},
			{
				path: 'new',
				component: UserComponent,
			},
			{
				path: ':id',
				component: UserComponent,
			},
		]
	},
	{
		path: 'dashboard',
		loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent),
	},
	{
		path: 'diets',
		loadChildren: () => import('./diets/diets.module').then(m => m.DietsModule),
	},
	{
		path: 'meals',
		loadChildren: () => import('./meals/meals.module').then(m => m.MealsModule),
	},
	{
		path: 'ingredients',
		loadChildren: () => import('./ingredients/ingredients.module').then(m => m.IngredientsModule),
	},
	{
		path: 'trainings',
		loadChildren: () => import('./trainings/trainings.module').then(m => m.TrainingsModule),
	},
	{
		path: 'goals',
		loadChildren: () => import('./goals/goals.module').then(m => m.GoalsModule),
	},
	{
		path: 'not-found',
		loadComponent: () => import('./core/not-found/not-found.component').then(m => m.NotFoundComponent),
	},
	{
		path: '**',
		redirectTo: 'not-found'
	}
];
