import { Component, Input } from '@angular/core';
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { Diet } from "../../diets/diet";

@Component({
  selector: 'app-diet-card',
	imports: [MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './diet-card.component.html',
  styleUrl: './diet-card.component.scss'
})
export class DietCardComponent {
	@Input() diet?: Diet;
}
