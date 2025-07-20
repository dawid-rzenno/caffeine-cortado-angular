import { Component } from '@angular/core';
import { ToolbarComponent } from "./toolbar/toolbar.component";
import { FooterComponent } from "./footer/footer.component";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-root',
	imports: [
		ToolbarComponent,
		FooterComponent,
		RouterOutlet
	],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
