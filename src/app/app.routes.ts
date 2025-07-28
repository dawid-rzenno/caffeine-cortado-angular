import { Routes } from '@angular/router';
import { SignInFormComponent } from "./auth/sign-in-form/sign-in-form.component";
import { UsersComponent } from "./users/users.component";
import { UserComponent } from "./users/user/user.component";

export const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'dashboard',
	},
	{
		path: 'dashboard',
		title: "Dashboard",
		loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent),
	},
	{
		path: 'auth',
		children: [
			{
				path: 'sign-in',
				title: "Sign in",
				component: SignInFormComponent,
			},
			{
				path: 'sign-up',
				title: "Sign up",
				loadComponent: () => import('./auth/sign-up-form/sign-up-form.component').then(m => m.SignUpFormComponent)
			},
		]
	},
	{
		path: 'users',
		title: "Users",
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
		path: 'diets',
		title: "Diets",
		loadChildren: () => import('./diets/diets.module').then(m => m.DietsModule),
	},
	{
		path: 'meals',
		title: "Meals",
		loadChildren: () => import('./meals/meals.module').then(m => m.MealsModule),
	},
	{
		path: 'ingredients',
		title: "Ingredients",
		loadChildren: () => import('./ingredients/ingredients.module').then(m => m.IngredientsModule),
	},
	{
		path: 'nutrients',
		title: "Nutrients",
		loadChildren: () => import('./nutrients/nutrients.module').then(m => m.NutrientsModule),
	},
	{
		path: 'nutripedia',
		title: "Nutripedia",
		loadChildren: () => import('./nutripedia/nutripedia.module').then(m => m.NutripediaModule),
	},
	{
		path: 'mass-units',
		title: "Mass units",
		loadChildren: () => import('./mass-units/mass-units.module').then(m => m.MassUnitsModule),
	},
	{
		path: 'trainings',
		title: "Trainings",
		loadChildren: () => import('./trainings/trainings.module').then(m => m.TrainingsModule),
	},
	{
		path: 'goals',
		title: "Goals",
		loadChildren: () => import('./goals/goals.module').then(m => m.GoalsModule),
	},
	{
		path: 'not-found',
		title: "Not found",
		loadComponent: () => import('./core/not-found/not-found.component').then(m => m.NotFoundComponent),
	},
	{
		path: '**',
		redirectTo: 'not-found'
	}
];
