import { ComponentFixture, TestBed } from "@angular/core/testing";

import { DietTableComponent } from "./diet-table.component";
import { provideHttpClient } from "@angular/common/http";
import { provideHttpClientTesting } from "@angular/common/http/testing";
import { ActivatedRoute, provideRouter } from "@angular/router";
import { FontAwesomeIconLibraryModule } from "../../core/libraries/font-awesome-icon-library.module";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { createFakeActivatedRoute } from "../../shopping-list/shopping-list-table/create-fake-activated-route";

describe("DietTableComponent", () => {
  let component: DietTableComponent;
  let fixture: ComponentFixture<DietTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        DietTableComponent,
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

    fixture = TestBed.createComponent(DietTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
