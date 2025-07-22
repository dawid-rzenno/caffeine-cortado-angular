import { Component, Input } from '@angular/core';
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

export type Training = {
	id: number;
	name: string;
	timestamp: Date;
	userId: number;
}

@Component({
  selector: 'app-training-card',
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './training-card.component.html',
  styleUrl: './training-card.component.scss'
})
export class TrainingCardComponent {
	@Input() training?: Training;
}
