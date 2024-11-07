import { TestBed } from "@angular/core/testing";
import { statusInterceptor } from "./status.interceptor";
import { provideHttpClient, withInterceptors } from "@angular/common/http";
import { provideHttpClientTesting } from "@angular/common/http/testing";

describe("StatusInterceptor", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(withInterceptors([statusInterceptor])),
        provideHttpClientTesting(),
      ],
    }),
  );

  it("should equal true", () => {
    expect(true).toBe(true);
  });
});
