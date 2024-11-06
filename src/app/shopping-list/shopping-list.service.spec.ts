import { TestBed } from "@angular/core/testing";

import { ShoppingListService } from "./shopping-list.service";
import { provideHttpClientTesting } from "@angular/common/http/testing";
import { provideHttpClient } from "@angular/common/http";

describe("ShoppingListService", () => {
  let service: ShoppingListService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(ShoppingListService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
