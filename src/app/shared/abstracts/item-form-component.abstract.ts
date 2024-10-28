import { ActivatedRoute, Data } from "@angular/router";
import { debounceTime, filter, map, mergeMap, Observable, shareReplay, switchMap, takeUntil } from "rxjs";
import { FormControl, UntypedFormGroup } from "@angular/forms";
import { Directive, inject, OnInit } from "@angular/core";
import { ObservingComponentAbstract } from "./observing-component.abstract";
import { PaginatedResponse } from "../models/paginated-response";
import { ITEM_KEY } from "../../shopping-list/shopping-list.routes";
import { ItemBase } from "../models/item-base";
import { SearchResult } from "../models/search-result";
import { PaginationParams } from "../models/mat-paginator-config";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { NameChangeModalComponent } from "../../diet/diet-form/name-change-modal/name-change-modal.component";

export type FormComponentAbstractService<Item extends ItemBase, ItemPatch extends ItemBase> = {
  create(item: Item): Observable<Item>;
  patch(item: ItemPatch): Observable<ItemPatch>;
  delete(id: number): Observable<void>
}

export type SearchParams = { name: string }

export type SearchComponentAbstractService<Item extends SearchResult> = {
  getAll(params: Partial<PaginationParams>): Observable<PaginatedResponse<Item>>;
  search(params: Partial<PaginationParams & SearchParams>): Observable<PaginatedResponse<SearchResult>>;
}

@Directive()
export abstract class ItemFormComponentAbstract<
  Item extends ItemBase,
  ItemPatch extends ItemBase
> extends ObservingComponentAbstract implements OnInit {

  abstract form: UntypedFormGroup;

  readonly item$: Observable<Item> = this.route.data.pipe(
    map((routeData: Data) => routeData[ITEM_KEY]),
    filter((item: Item) => Boolean(item)),
    shareReplay(1),
    takeUntil(this.destroy$)
  );

  protected get idControl(): FormControl<number> {
    return this.form.get('id') as FormControl<number>;
  }

  protected get nameControl(): FormControl<string> {
    return this.form.get('name') as FormControl<string>;
  }

  protected readonly matDialog: MatDialog = inject(MatDialog);

  protected constructor(
    protected route: ActivatedRoute,
    protected service: FormComponentAbstractService<Item, ItemPatch>
  ) {
    super();
  }

  createAutocompleteOptions$(
    searchFormControl: FormControl<string>,
    service: SearchComponentAbstractService<SearchResult>
  ): Observable<SearchResult[]> {
    return searchFormControl.valueChanges.pipe(
      debounceTime(250),
      mergeMap((search: string) => service.search({ name: search })),
      map((response: PaginatedResponse<SearchResult>) => response.content),
      takeUntil(this.destroy$)
    )
  }

  optionToNameMapper<T extends { name: string }>(value: T) {
    return value.name;
  }

  ngOnInit(): void {
    this.item$.subscribe((item: Item) => {
      this.form.patchValue(item);
    });
  }

  onCreateClick(): void {
    this.service.create(this.form.getRawValue()).subscribe()
  }

  onSaveClick(): void {
    this.onCreateClick();
  }

  onResetClick(): void {
    this.item$.subscribe((initialFormValue: Item) => this.form.reset(initialFormValue))
  }

  onNameEditClick(): void {
    const dialogRef: MatDialogRef<NameChangeModalComponent, string> = this.matDialog.open(
      NameChangeModalComponent,
      { data: { name: this.nameControl.value } }
    );


    dialogRef.afterClosed()
      .pipe(
        filter((newName: string | undefined) => Boolean(newName)),
        switchMap((newName: string | undefined) => this.service.patch({
          id: this.idControl.value,
          name: newName
        } as ItemPatch)),
      )
      .subscribe((response: ItemPatch) => {
        if (response.name) {
          this.nameControl.patchValue(response.name);
        }
      });
  }
}
