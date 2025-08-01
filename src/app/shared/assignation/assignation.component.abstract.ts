import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTable } from "@angular/material/table";
import { CreateAssignationPayloadBase, IAssignationService } from "./assignation.service.abstract";
import { MatDialogConfig, MatDialogRef } from "@angular/material/dialog";
import { DestroyRef } from "@angular/core";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { Id, ItemBase } from "../item-base";
import { AssignationDialogData } from "../assignation-dialog/assignation-dialog.component.abstract";

export abstract class AssignationComponent<
	Child extends ItemBase,
	CreateAssignationPayload extends CreateAssignationPayloadBase
> {
	abstract parentId: Id;
	abstract children: Child[];

	abstract paginator: MatPaginator;
	abstract sort: MatSort;
	abstract table: MatTable<Child>;

	readonly abstract displayedColumns: string[];

	protected constructor(protected service: IAssignationService<Child, CreateAssignationPayload>, private destroyRef: DestroyRef) {
	}

	get dialogConfig(): MatDialogConfig<AssignationDialogData> {
		return {
			data: {
				parentId: this.parentId
			}
		}
	}

	abstract getSearchDialogRef(): MatDialogRef<any>;

	updateDataSource() {
		this.table.dataSource = this.children;
		this.paginator.length = this.children.length;
		this.table.renderRows();
	}

	openSearchDialog(): void {
		const dialogRef = this.getSearchDialogRef();

		dialogRef.afterClosed()
			.pipe(takeUntilDestroyed(this.destroyRef))
			.subscribe((assignedChild?: Child) => {

				if (assignedChild) {
					this.children = [...this.children, assignedChild];
				}
			});
	}

	unassign(childId: Id) {
		this.service.unassign$(this.parentId, childId)
			.pipe(takeUntilDestroyed(this.destroyRef))
			.subscribe(() => {
				this.children = this.children.filter((child: Child) => child.id !== childId);
			})
	}
}
