import { Component } from '@angular/core';
import { CrudTableComponent } from "../shared/crud-table/crud-table.component";

@Component({
  selector: 'app-mass-units',
	imports: [CrudTableComponent],
  templateUrl: './mass-units.component.html',
  styleUrl: './mass-units.component.scss'
})
export class MassUnitsComponent {
}
