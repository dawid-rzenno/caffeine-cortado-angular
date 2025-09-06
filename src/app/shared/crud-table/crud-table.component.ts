import { AfterViewInit, Component, DestroyRef, Inject, Input, ViewChild } from '@angular/core';
import { MatTableModule } from "@angular/material/table";
import { MatPaginator, MatPaginatorModule, PageEvent } from "@angular/material/paginator";
import { MatSort, MatSortable, MatSortModule, Sort, SortDirection } from "@angular/material/sort";
import { MatButtonModule } from "@angular/material/button";
import { ActivatedRoute, NavigationExtras, Params, Router, RouterLink } from "@angular/router";
import { DatePipe } from "@angular/common";
import { ItemBase } from "../item-base";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { debounceTime, switchMap } from "rxjs";
import { CRUD_SERVICE, ICrudService } from "./crud.service.abstract";

export enum CrudTableColumnKeys {
	Name = 'name',
	Timestamp = 'timestamp',
	UserId = 'userId',
	Actions = 'actions',
}

export enum CrudTableQueryParamKeys {
	Sort = 'sort',
	SortBy = 'sortBy',
	Page = 'page',
	Size = 'size',
	Search = 'search',
}

@Component({
	selector: 'app-crud-table',
	imports: [MatTableModule, MatPaginatorModule, MatSortModule, MatButtonModule, RouterLink, DatePipe, MatInputModule, MatIconModule, ReactiveFormsModule],
	templateUrl: './crud-table.component.html',
	styleUrl: './crud-table.component.scss',
	standalone: true,
})
export class CrudTableComponent<Item extends ItemBase = ItemBase> implements AfterViewInit {
	readonly ColumnKeys = CrudTableColumnKeys;
	readonly DisplayedColumnsKeys = [
		this.ColumnKeys.Name,
		this.ColumnKeys.Timestamp,
		this.ColumnKeys.UserId,
		this.ColumnKeys.Actions,
	]

	items: Item[] = [];

	@Input() displayedColumns: string[] = this.DisplayedColumnsKeys;
	@Input({ required: true }) title!: string;

	@ViewChild(MatPaginator) matPaginator!: MatPaginator;
	@ViewChild(MatSort) matSort!: MatSort;

	readonly searchTermControl = new FormControl<string>('', { nonNullable: true });

	readonly formGroup = new FormGroup({
		[CrudTableQueryParamKeys.Search]: this.searchTermControl,
	})

	constructor(
		@Inject(CRUD_SERVICE) private crudService: ICrudService<Item>,
		private router: Router,
		private activatedRoute: ActivatedRoute,
		private destroyRef: DestroyRef
	) {
	}

	ngAfterViewInit() {
		const queryParams: Params = this.activatedRoute.snapshot.queryParams;

		this.setSortingWithQueryParams(queryParams)
		this.setPaginationWithQueryParams(queryParams)
		this.setSearchTermControlWithQueryParams(queryParams)

		this.matSort.sortChange
			.pipe(takeUntilDestroyed(this.destroyRef))
			.subscribe((sort: Sort) => this.setSortingQueryParams(sort));

		this.matPaginator.page
			.pipe(takeUntilDestroyed(this.destroyRef))
			.subscribe((pageEvent: PageEvent) => this.setPaginationQueryParams(pageEvent));

		this.searchTermControl.valueChanges
			.pipe(
				takeUntilDestroyed(this.destroyRef),
				debounceTime(500 + 50),
				// On most modern operating systems, the delay before a continuously pressed key starts repeating is typically
				// around 500 milliseconds by default.
			)
			.subscribe((searchTerm: string) => {
				this.setSearchQueryParam(searchTerm)
			})

		this.activatedRoute.queryParams
			.pipe(
				takeUntilDestroyed(this.destroyRef),
				switchMap((params: Params) => this.crudService.getAll$(params))
			)
			.subscribe((items: Item[]) => {
				this.items = items;
			})
	}

	setSortingWithQueryParams(params: Params): void {
		if (params[CrudTableQueryParamKeys.Sort] && params[CrudTableQueryParamKeys.SortBy]) {
			const matSortable: MatSortable = {
				id: params[CrudTableQueryParamKeys.SortBy],
				start: params[CrudTableQueryParamKeys.Sort] as SortDirection,
				disableClear: false
			}

			this.matSort.sort(matSortable)
		}
	}

	setPaginationWithQueryParams(params: Params): void {
		if (params[CrudTableQueryParamKeys.Page] && params[CrudTableQueryParamKeys.Size]) {
			this.matPaginator.pageSize = params[CrudTableQueryParamKeys.Size];
			this.matPaginator.pageIndex = params[CrudTableQueryParamKeys.Page];
		}
	}

	setSearchTermControlWithQueryParams(params: Params): void {
		if (params[CrudTableQueryParamKeys.Search]) {
			this.searchTermControl.setValue(params[CrudTableQueryParamKeys.Search]);
		}
	}

	setPaginationQueryParams(pageEvent: PageEvent) {
		const { pageIndex, pageSize } = pageEvent;

		const extras: NavigationExtras = {
			queryParams: {
				[CrudTableQueryParamKeys.Page]: pageIndex,
				[CrudTableQueryParamKeys.Size]: pageSize
			},
			queryParamsHandling: 'merge'
		}

		this.router.navigate([], extras);
	}

	setSortingQueryParams(sort: Sort) {
		const { direction, active } = sort;

		const extras: NavigationExtras = {
			queryParams: direction ? {
				[CrudTableQueryParamKeys.Sort]: direction,
				[CrudTableQueryParamKeys.SortBy]: active
			} : {
				[CrudTableQueryParamKeys.Sort]: null,
				[CrudTableQueryParamKeys.SortBy]: null
			},
			queryParamsHandling: 'merge'
		};

		this.router.navigate([], extras);
	}

	setSearchQueryParam(searchTerm?: string) {
		searchTerm = searchTerm ? searchTerm : this.formGroup.controls[CrudTableQueryParamKeys.Search].value;

		const extras: NavigationExtras = {
			queryParams: {
				[CrudTableQueryParamKeys.Search]: searchTerm ? searchTerm : null,
			},
			queryParamsHandling: 'merge'
		};

		this.router.navigate([], extras);
	}
}
