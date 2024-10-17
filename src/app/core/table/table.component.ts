import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { MatButtonModule } from "@angular/material/button";
import { MatTableModule } from "@angular/material/table";
import { RouterModule } from "@angular/router";
import { IdentifiedItem } from "../../shared/table-component-abstract.directive";

export type TableRecord = IdentifiedItem & {
  name: string,
  description: string,
}

@Component({
  selector: 'cortado-table',
  standalone: true,
	imports: [
		FaIconComponent,
		MatButtonModule,
    MatTableModule,
    RouterModule
	],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent implements OnChanges {
  @Input() records: TableRecord[] = [];
  @Input() enableActions: boolean = false;

  protected readonly defaultDisplayedColumns: string[] = ["id", "name", "description"];
  displayedColumns: string[] = ["id", "name", "description"];

  onRemoveClick(tableRecord: TableRecord): void {
    this.records = this.records.filter((removedRecord: TableRecord) => removedRecord.id !== tableRecord.id);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['enableActions']?.currentValue) {
      this.displayedColumns = [...this.defaultDisplayedColumns, 'actions'];
    } else {
      this.displayedColumns = this.defaultDisplayedColumns;
    }
  }
}
