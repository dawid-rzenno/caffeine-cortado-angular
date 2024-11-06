import { ComponentFixture, TestBed } from "@angular/core/testing";

import { BeverageDetailsComponent } from "./beverage-details.component";
import { ActivatedRoute, provideRouter } from "@angular/router";

import { createFakeActivatedRoute } from "../../shopping-list/shopping-list-table/create-fake-activated-route";

describe("BeverageDetailsComponent", () => {
  let component: BeverageDetailsComponent;
  let fixture: ComponentFixture<BeverageDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeverageDetailsComponent],
      providers: [
        provideRouter([]),
        {
          provide: ActivatedRoute,
          useValue: createFakeActivatedRoute([{ id: 0, name: "" }]),
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(BeverageDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
