import { Component, Input } from '@angular/core';
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { DietDay } from "../dashboard";

@Component({
  selector: 'app-diet-day-card',
	imports: [MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './diet-day-card.component.html',
  styleUrl: './diet-day-card.component.scss'
})
export class DietDayCardComponent {
	@Input() dietDay?: DietDay;
}
