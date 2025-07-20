import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent),
	},
	{
		path: 'auth',
		loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
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
