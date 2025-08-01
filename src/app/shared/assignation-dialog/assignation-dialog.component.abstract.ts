import { Id } from "../item-base";
import { ICrudService } from "../crud/crud.service.abstract";
import { MatDialogRef } from "@angular/material/dialog";
import { CreateAssignationPayloadBase, IAssignationService } from "../assignation/assignation.service.abstract";
import { MatTable } from "@angular/material/table";
import { FormControl, UntypedFormGroup } from "@angular/forms";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { DestroyRef } from "@angular/core";

export type AssignationDialogData = {
	parentId: Id;
}

export abstract class AssignationDialogComponent<
	Child,
	CreateAssignationPayload extends CreateAssignationPayloadBase
> {
	abstract table: MatTable<Child>;
	readonly abstract displayedColumns: string[];

	readonly abstract matDialogRef: MatDialogRef<any>;
	readonly abstract dialogData: AssignationDialogData;

	readonly abstract childService: ICrudService<Child>;
	readonly abstract service: IAssignationService<Child, CreateAssignationPayload>;

	readonly abstract termControl: FormControl<string>
	readonly abstract globalSearchControl: FormControl<boolean>
	readonly abstract form: UntypedFormGroup;

	protected constructor(protected destroyRef: DestroyRef) {
	}

	createAssignationPayload(childId: Id): CreateAssignationPayload {
		return { childId } as CreateAssignationPayload;
	}

	search() {
		if (this.form.invalid) {
			return;
		}

		this.childService.getAll$({ term: this.termControl.value, globalSearch: this.globalSearchControl.value })
			.pipe(takeUntilDestroyed(this.destroyRef))
			.subscribe((children) => {
				this.table.dataSource = children;
			});
	}

	assign(childId: number) {
		this.service.assign$(this.dialogData.parentId, this.createAssignationPayload(childId))
			.pipe(takeUntilDestroyed(this.destroyRef))
			.subscribe((child: Child) => {
				this.matDialogRef.close(child);
			})
	}

	onNoClick() {
		this.matDialogRef.close();
	}
}
