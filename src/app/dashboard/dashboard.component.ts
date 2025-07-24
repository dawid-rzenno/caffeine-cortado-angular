import { Component, OnInit } from '@angular/core';
import { MatGridListModule } from "@angular/material/grid-list";
import { GoalsCardComponent } from "./goals-card/goals-card.component";
import { DashboardService } from "./dashboard.service";
import { Dashboard } from "./dashboard";
import { TrainingDayCardComponent } from "./training-day-card/training-day-card.component";
import { MotivationalQuoteCardComponent } from "./motivational-quote-card/motivational-quote-card.component";
import { DietDayCardComponent } from "./diet-day-card/diet-day-card.component";

@Component({
  selector: 'app-dashboard',
	imports: [MatGridListModule, TrainingDayCardComponent, DietDayCardComponent, GoalsCardComponent, TrainingDayCardComponent, MotivationalQuoteCardComponent],
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
