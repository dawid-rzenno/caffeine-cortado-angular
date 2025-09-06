import { UntypedFormGroup } from "@angular/forms";
import { BehaviorSubject, of, switchMap } from "rxjs";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { DestroyRef } from "@angular/core";
import { IDetailsCrudService } from "../crud-table/crud.service.abstract";
import { ActivatedRoute, Params } from "@angular/router";
import { Id, ItemBase } from "../item-base";

export abstract class DetailsComponent<
	ItemDetails extends ItemBase,
	CreateItemPayload,
	UpdateItemPayload
> {
	readonly abstract form: UntypedFormGroup;

	readonly details$ = new BehaviorSubject<ItemDetails | undefined>(undefined);

	protected constructor(
		protected route: ActivatedRoute,
		protected service: IDetailsCrudService<ItemDetails, CreateItemPayload, UpdateItemPayload>,
		protected destroyRef: DestroyRef
	) {
	}

	abstract navigateToItem(id: Id): void;

	abstract navigateToItems(): void;

	updateForm(details?: ItemDetails) {
		if (details) {
			this.form.patchValue(details);
			return;
		}

		this.form.reset();
	}

	updateFormOnDetailsChange() {
		this.details$
			.pipe(takeUntilDestroyed(this.destroyRef))
			.subscribe(this.updateForm)
	}

	updateDetailsOnIdRouteParamChange(): void {
		this.route.params.pipe(
			takeUntilDestroyed(this.destroyRef),
			switchMap((params: Params) => {
				return params['id']
					? this.service.getById$(parseInt(params['id']))
					: of(undefined)
			})
		).subscribe((details?: ItemDetails) => {
			this.details$.next(details);
		});
	}

	getUpdateItemPayload(id: Id): UpdateItemPayload {
		return { id, ...this.form.value };
	}

	getCreateItemPayload(): CreateItemPayload {
		return this.form.value;
	}

	onSubmit() {
		if (this.form.invalid) {
			return;
		}

		const id = this.details$.value?.id;

		if (id) {
			this.createItem(id);
			return;
		}

		this.updateItem();
	}

	createItem(id: Id) {
		this.service.update$(this.getUpdateItemPayload(id))
			.pipe(takeUntilDestroyed(this.destroyRef))
			.subscribe((details: ItemDetails) => this.details$.next(details));
	}

	updateItem() {
		this.service.create$(this.getCreateItemPayload())
			.pipe(takeUntilDestroyed(this.destroyRef))
			.subscribe((details: ItemDetails) => this.navigateToItem(details.id));
	}

	onDelete(id: Id) {
		this.service.delete$(id)
			.pipe(takeUntilDestroyed(this.destroyRef))
			.subscribe(() => {
					this.navigateToItems();
				}
			)
	}

	onDetailsChange(details: ItemDetails) {
		this.details$.next(details);
	}

	onReset() {
		this.updateForm(this.details$.value)
	}
}
