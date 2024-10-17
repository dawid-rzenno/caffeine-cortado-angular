import { ActivatedRoute, Data } from "@angular/router";
import { debounceTime, filter, map, mergeMap, Observable, takeUntil } from "rxjs";
import { FormControl, UntypedFormGroup } from "@angular/forms";
import { Directive, OnInit } from "@angular/core";
import { ObservingComponentAbstract } from "./observing-component.abstract";
import { GetAllRequestParams } from "../table-component-abstract.directive";
import { PaginatedResponse } from "../models/paginated-response";
import { FORM_DATA_KEY } from "../../shopping-list/shopping-list.routes";

export type FormComponentAbstractService<ItemDetails> = {
  create(item: ItemDetails): Observable<ItemDetails>;
}

export type SearchComponentAbstractService<Item> = {
  getAll(data: GetAllRequestParams): Observable<PaginatedResponse<Item>>;
}

@Directive()
export abstract class FormComponentAbstract<DataModel extends Record<string, any>> extends ObservingComponentAbstract implements OnInit {
  abstract formGroup: UntypedFormGroup;
  abstract defaultFormGroupValue: DataModel;

  readonly dataSource$: Observable<DataModel> = this.route.data.pipe(
    map((routeData: Data) => routeData[FORM_DATA_KEY]),
    filter((dataModel: DataModel) => Boolean(dataModel)),
    takeUntil(this.destroy$)
  );

  protected constructor(private route: ActivatedRoute, private service: FormComponentAbstractService<DataModel>) {
    super();
  }

  createAutocompleteOptions$<T>(searchFormControl: FormControl<string>, service: SearchComponentAbstractService<T>): Observable<T[]> {
    return searchFormControl.valueChanges.pipe(
      debounceTime(250),
      mergeMap((search: string) => service.getAll({ search })),
      map((response: PaginatedResponse<T>) => response.content),
      takeUntil(this.destroy$)
    )
  }

  optionToNameMapper<T extends { name: string }>(value: T) {
    return value.name;
  }

  ngOnInit(): void {
    this.dataSource$.subscribe((dataModel: DataModel) => {
      this.formGroup.patchValue(dataModel);
    });
  }

  onCreateClick(): void {
    this.service.create(this.formGroup.getRawValue()).subscribe()
  }

  onSaveClick(): void {
    this.onCreateClick();
  }

  onResetClick(): void {
    this.formGroup.reset(this.defaultFormGroupValue)
  }
}
