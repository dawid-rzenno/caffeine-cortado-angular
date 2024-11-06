import { TestBed } from "@angular/core/testing";

import { MealService } from "./meal.service";
import { provideHttpClientTesting } from "@angular/common/http/testing";
import { provideHttpClient } from "@angular/common/http";

describe("MealService", () => {
  let service: MealService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(MealService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
