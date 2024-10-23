import { ActivatedRoute, Data } from "@angular/router";
import { debounceTime, filter, map, mergeMap, Observable, shareReplay, takeUntil } from "rxjs";
import { FormControl, UntypedFormGroup } from "@angular/forms";
import { Directive, OnInit } from "@angular/core";
import { ObservingComponentAbstract } from "./observing-component.abstract";
import {
  GetAllRequestParams,
  ItemBase,
  SearchResult
} from "./item-table-component-abstract.directive";
import { PaginatedResponse } from "../models/paginated-response";
import { ITEM_KEY } from "../../shopping-list/shopping-list.routes";

export type FormComponentAbstractService<Item extends ItemBase, ItemPatch extends ItemBase> = {
  create(item: Item): Observable<Item>;
  patch(item: ItemPatch): Observable<ItemPatch>;
  delete(id: number): Observable<void>
}

export type SearchComponentAbstractService<Item extends SearchResult> = {
  getAll(data: GetAllRequestParams): Observable<PaginatedResponse<Item>>;
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

  get idControl(): FormControl<number> {
    return this.form.get('id') as FormControl<number>;
  }

  get nameControl(): FormControl<string> {
    return this.form.get('name') as FormControl<string>;
  }

  protected constructor(protected route: ActivatedRoute, protected service: FormComponentAbstractService<Item, ItemPatch>) {
    super();
  }

  createAutocompleteOptions$<Option extends SearchResult>(searchFormControl: FormControl<string>, service: SearchComponentAbstractService<Option>): Observable<Option[]> {
    return searchFormControl.valueChanges.pipe(
      debounceTime(250),
      mergeMap((search: string) => service.getAll({ search })),
      map((response: PaginatedResponse<Option>) => response.content),
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
}
