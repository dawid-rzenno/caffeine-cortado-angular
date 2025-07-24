import { Component, Input } from '@angular/core';
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { Training } from "../../trainings/training";

@Component({
  selector: 'app-training-card',
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './training-card.component.html',
  styleUrl: './training-card.component.scss'
})
export class TrainingCardComponent {
	@Input() training?: Training;
}
