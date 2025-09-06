import { Component } from '@angular/core';
import { DietsService } from "./diets.service";
import { CrudTableComponent } from "../shared/crud-table/crud-table.component";
import { CRUD_SERVICE } from "../shared/crud-table/crud.service.abstract";

@Component({
	selector: 'app-diets',
	templateUrl: './diets.component.html',
	styleUrl: './diets.component.scss',
	imports: [CrudTableComponent],
	providers: [
		{ provide: CRUD_SERVICE, useClass: DietsService },
	]
})
export class DietsComponent {
}
