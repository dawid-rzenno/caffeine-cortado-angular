import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from "@angular/material/icon";
import { AppService } from "../../app.service";
import { AuthService } from "../../auth/auth.service";
import { User } from "../../auth/user";
import { BehaviorSubject } from "rxjs";
import { AsyncPipe } from "@angular/common";
import { RouterLink } from "@angular/router";

@Component({
	selector: 'app-toolbar',
	imports: [
		MatToolbarModule,
		MatButtonModule,
		MatIconModule,
		AsyncPipe,
		RouterLink
	],
	templateUrl: './toolbar.component.html',
	styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {
	readonly user$: BehaviorSubject<User | undefined>

	constructor(private appService: AppService, private authService: AuthService) {
		this.user$ = this.authService.user$;
	}

	openSideNav(): void {
		this.appService.isSideNavOpen$.next(true);
	}

	signOut(): void {
		this.authService.signOut();
	}
}
