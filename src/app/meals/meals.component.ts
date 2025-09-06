import { Component } from '@angular/core';
import { CrudTableComponent } from "../shared/crud-table/crud-table.component";

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrl: './meals.component.scss',
	imports: [CrudTableComponent]
})
export class MealsComponent {
}
