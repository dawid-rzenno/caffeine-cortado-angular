import { TestBed } from "@angular/core/testing";

import { BeverageService } from "./beverage.service";
import { provideHttpClientTesting } from "@angular/common/http/testing";
import { provideHttpClient } from "@angular/common/http";

describe("BeverageService", () => {
  let service: BeverageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(BeverageService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
