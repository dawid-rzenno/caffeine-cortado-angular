import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListTableComponent } from './shopping-list-table.component';
import { ActivatedRoute, provideRouter } from "@angular/router";
import { provideHttpClient } from "@angular/common/http";
import { provideHttpClientTesting } from "@angular/common/http/testing";
import { ITEM_KEY, ITEMS_KEY } from "../shopping-list.routes";
import { PaginatedResponse } from "../../shared/models/paginated-response";
import { ItemBase } from "../../shared/models/item-base";
import { FontAwesomeIconLibraryModule } from "../../core/libraries/font-awesome-icon-library.module";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";

export function createFakePaginatedResponse<T extends ItemBase>(content: T[]) {
  return new PaginatedResponse<T>({
    content,
    empty: false,
    first: false,
    last: false,
    number: 0,
    numberOfElements: 0,
    pageable: {
      pageNumber: 0,
      pageSize: 0,
      sort: {
        empty: false,
        sorted: false,
        unsorted: false
      },
      offset: 0,
      paged: false,
      unpaged: false
    },
    size: 0,
    sort: {
      empty: false,
      sorted: false,
      unsorted: false
    },
    totalElements: 0,
    totalPages: 0
  });
}

export function createFakeActivatedRoute<T extends ItemBase>(content: T[]) {
  return {
    snapshot: {
      data: {
        [ITEMS_KEY]: createFakePaginatedResponse<T>(content),
        [ITEM_KEY]: content.length ? content[0] : undefined,
      }
    }
  }
}

describe('ShoppingListTableComponent', () => {
  let component: ShoppingListTableComponent;
  let fixture: ComponentFixture<ShoppingListTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShoppingListTableComponent, FontAwesomeIconLibraryModule, NoopAnimationsModule],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting(),
        { provide: ActivatedRoute, useValue: createFakeActivatedRoute([]) },
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
