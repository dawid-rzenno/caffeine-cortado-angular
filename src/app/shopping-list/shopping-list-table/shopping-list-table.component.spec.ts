import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ShoppingListTableComponent } from "./shopping-list-table.component";
import { ActivatedRoute, provideRouter } from "@angular/router";
import { provideHttpClient } from "@angular/common/http";
import { provideHttpClientTesting } from "@angular/common/http/testing";
import { FontAwesomeIconLibraryModule } from "../../core/libraries/font-awesome-icon-library.module";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { createFakeActivatedRoute } from "./create-fake-activated-route";

describe("ShoppingListTableComponent", () => {
  let component: ShoppingListTableComponent;
  let fixture: ComponentFixture<ShoppingListTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ShoppingListTableComponent,
        FontAwesomeIconLibraryModule,
        NoopAnimationsModule,
      ],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting(),
        {
          provide: ActivatedRoute,
          useValue: createFakeActivatedRoute([]),
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ShoppingListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
