import { Component } from '@angular/core';
import { MatGridListModule } from "@angular/material/grid-list";
import { TrainingCardComponent } from "./training-card/training-card.component";
import { DietCardComponent } from "./diet-card/diet-card.component";
import { GoalsCardComponent } from "./goals-card/goals-card.component";

@Component({
  selector: 'app-dashboard',
	imports: [MatGridListModule, TrainingCardComponent, DietCardComponent, GoalsCardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
