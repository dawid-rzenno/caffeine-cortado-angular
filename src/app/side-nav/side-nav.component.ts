import { Component } from '@angular/core';
import { MatButton } from "@angular/material/button";
import { AppService } from "../app.service";

@Component({
	selector: 'app-side-nav',
	imports: [
		MatButton
	],
	templateUrl: './side-nav.component.html',
	styleUrl: './side-nav.component.scss'
})
export class SideNavComponent {
	constructor(private appService: AppService) {
	}

	close() {
		this.appService.isSideNavOpen$.next(false);
	}
}
