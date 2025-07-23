import { Component } from '@angular/core';
import { AppService } from "../../app.service";
import { MatListModule } from "@angular/material/list";
import { IsActiveMatchOptions, Router, RouterLink } from "@angular/router";

export type Link = {
	url: string;
	label: string;
}

@Component({
	selector: 'app-side-nav',
	imports: [
		MatListModule,
		RouterLink
	],
	templateUrl: './side-nav.component.html',
	styleUrl: './side-nav.component.scss'
})
export class SideNavComponent {
	readonly links: Link[] = [
		{
			url: "dashboard",
			label: "Dashboard",
		},
		{
			url: "goals",
			label: "Goals",
		},
		{
			url: "diets",
			label: "Diets",
		},
		{
			url: "meals",
			label: "Meals",
		},
		{
			url: "ingredients",
			label: "Ingredients",
		},
		{
			url: "trainings",
			label: "Trainings",
		},
		{
			url: "users",
			label: "Users",
		}
	];

	constructor(private appService: AppService, private router: Router) {
	}

	close() {
		this.appService.isSideNavOpen$.next(false);
	}

	isActive(url: string): boolean {
		const matchOptions: IsActiveMatchOptions = {
			paths: 'exact',
			queryParams: 'ignored',
			fragment: 'ignored',
			matrixParams: 'ignored'
		};

		return this.router.isActive(url, matchOptions);
	}
}
