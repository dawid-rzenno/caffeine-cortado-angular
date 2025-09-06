import { Component } from '@angular/core';
import { CrudTableComponent } from "../shared/crud-table/crud-table.component";

@Component({
  selector: 'app-goals',
	imports: [CrudTableComponent],
  templateUrl: './goals.component.html',
  styleUrl: './goals.component.scss'
})
export class GoalsComponent {
}
