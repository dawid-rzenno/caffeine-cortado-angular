import { TestBed } from "@angular/core/testing";

import { DietService } from "./diet.service";
import { provideHttpClientTesting } from "@angular/common/http/testing";
import { provideHttpClient } from "@angular/common/http";

describe("DietService", () => {
  let service: DietService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(DietService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
