import { Component } from '@angular/core';
import { CrudTableComponent } from "../../shared/crud-table/crud-table.component";

@Component({
  selector: 'app-nutrient-types',
	imports: [CrudTableComponent],
  templateUrl: './nutrient-types.component.html',
  styleUrl: './nutrient-types.component.scss'
})
export class NutrientTypesComponent {
}
