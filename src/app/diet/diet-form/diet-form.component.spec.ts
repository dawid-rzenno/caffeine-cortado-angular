import { ComponentFixture, TestBed } from "@angular/core/testing";

import { DietFormComponent } from "./diet-form.component";
import { provideRouter } from "@angular/router";
import { provideHttpClient } from "@angular/common/http";
import { provideHttpClientTesting } from "@angular/common/http/testing";
import { FontAwesomeIconLibraryModule } from "../../core/libraries/font-awesome-icon-library.module";

describe("DietFormComponent", () => {
  let component: DietFormComponent;
  let fixture: ComponentFixture<DietFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DietFormComponent, FontAwesomeIconLibraryModule],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DietFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
