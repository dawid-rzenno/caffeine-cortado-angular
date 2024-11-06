import { TestBed } from "@angular/core/testing";

import { IngredientService } from "./ingredient.service";
import { provideHttpClientTesting } from "@angular/common/http/testing";
import { provideHttpClient } from "@angular/common/http";

describe("IngredientService", () => {
  let service: IngredientService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(IngredientService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
