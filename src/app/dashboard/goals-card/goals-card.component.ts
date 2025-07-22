import { Component } from '@angular/core';
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: 'app-goals-card',
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './goals-card.component.html',
  styleUrl: './goals-card.component.scss'
})
export class GoalsCardComponent {

}
