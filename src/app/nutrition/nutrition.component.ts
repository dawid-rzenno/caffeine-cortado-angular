import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { NutritionBase, NutritionExample } from "./models/nutrition";
import { MatGridListModule } from "@angular/material/grid-list";

@Component({
  selector: "cortado-nutrition",
  standalone: true,
  imports: [MatGridListModule],
  templateUrl: "./nutrition.component.html",
  styleUrl: "./nutrition.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NutritionComponent {
  @Input({ alias: "item" }) nutrition: NutritionBase = NutritionExample;
}
