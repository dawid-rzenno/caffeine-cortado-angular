import { Component, Input } from '@angular/core';
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MotivationalQuote } from "../dashboard";

@Component({
  selector: 'app-motivational-quote-card',
	imports: [MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './motivational-quote-card.component.html',
  styleUrl: './motivational-quote-card.component.scss'
})
export class MotivationalQuoteCardComponent {
	@Input() motivationalQuote?: MotivationalQuote;
}
