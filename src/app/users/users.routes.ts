import { Routes } from "@angular/router";
import { UsersComponent } from "./users.component";
import { UserComponent } from "./user/user.component";

export const UsersRoutes: Routes = [
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
