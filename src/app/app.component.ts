import { Component, ViewChild } from '@angular/core';
import { ToolbarComponent } from "./toolbar/toolbar.component";
import { FooterComponent } from "./footer/footer.component";
import { RouterOutlet } from "@angular/router";
import { MatSidenav, MatSidenavModule } from "@angular/material/sidenav";
import { AppService } from "./app.service";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { MatButtonModule } from "@angular/material/button";
import { SideNavComponent } from "./side-nav/side-nav.component";

@Component({
	selector: 'app-root',
	imports: [
		ToolbarComponent,
		FooterComponent,
		RouterOutlet,
		MatSidenavModule,
		MatButtonModule,
		SideNavComponent
	],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})
export class AppComponent {
	@ViewChild('sidenav') sidenav!: MatSidenav;

	constructor(private appService: AppService) {
		this.appService.isSideNavOpen$.pipe(takeUntilDestroyed()).subscribe(isSideNavOpen => {
			if (isSideNavOpen) {
				this.sidenav.open();
			} else {
				this.sidenav.close();
			}
		})
	}

	close() {
		this.appService.isSideNavOpen$.next(false);
	}
}
