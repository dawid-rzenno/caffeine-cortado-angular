import { Routes } from "@angular/router";
import { MassUnitComponent } from "./mass-unit/mass-unit.component";
import { MassUnitsComponent } from "./mass-units.component";

export const massUnitsRoutes: Routes = [
	{
				path: '',
				pathMatch: 'full',
				component: MassUnitsComponent,
			},
			{
				path: 'new',
				component: MassUnitComponent,
			},
			{
				path: ':id',
				component: MassUnitComponent,
			}
]
