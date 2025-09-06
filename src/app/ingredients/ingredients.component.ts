import { Component } from '@angular/core';
import { CrudTableComponent } from "../shared/crud-table/crud-table.component";

@Component({
  selector: 'app-ingredients',
	imports: [CrudTableComponent],
  templateUrl: './ingredients.component.html',
  styleUrl: './ingredients.component.scss'
})
export class IngredientsComponent {
}
