import { Component, Input } from '@angular/core';
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { TrainingDay } from "../dashboard";

@Component({
  selector: 'app-training-day-card',
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './training-day-card.component.html',
  styleUrl: './training-day-card.component.scss'
})
export class TrainingDayCardComponent {
	@Input() trainingDay?: TrainingDay;
}
