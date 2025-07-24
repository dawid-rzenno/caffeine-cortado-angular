import { Component, OnInit } from '@angular/core';
import { MatGridListModule } from "@angular/material/grid-list";
import { GoalsCardComponent } from "./goals-card/goals-card.component";
import { DashboardService } from "./dashboard.service";
import { Dashboard } from "./dashboard";
import { MotivationalQuoteCardComponent } from "./motivational-quote-card/motivational-quote-card.component";
import { DietCardComponent } from "./diet-card/diet-card.component";
import { TrainingCardComponent } from "./training-card/training-card.component";

@Component({
  selector: 'app-dashboard',
	imports: [MatGridListModule, TrainingCardComponent, DietCardComponent, GoalsCardComponent, TrainingCardComponent, MotivationalQuoteCardComponent, DietCardComponent, TrainingCardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
	dashboard?: Dashboard;

	constructor(private service: DashboardService) { }

	ngOnInit() {
		this.service.getDashboard$().subscribe(dashboard => {
			this.dashboard = dashboard;
		})
	}
}
