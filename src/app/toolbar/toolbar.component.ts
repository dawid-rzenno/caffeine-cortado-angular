import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from "@angular/material/icon";
import { AppService } from "../app.service";

@Component({
	selector: 'app-toolbar',
	imports: [
		MatToolbarModule,
		MatButtonModule,
		MatIconModule
	],
	templateUrl: './toolbar.component.html',
	styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {
	constructor(private appService: AppService) {
	}

	openSideNav(): void {
		this.appService.isSideNavOpen$.next(true);
	}
}
