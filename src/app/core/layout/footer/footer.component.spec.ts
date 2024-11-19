import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FooterComponent } from "./footer.component";
import { GITHUB_URL, LINKEDIN_URL } from "../../../shared/external_urls";

describe("FooterComponent", () => {
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    fixture.detectChanges();
  });

  it("should contain a link called 'Dawid Rzenno' that opens LinkedIn profile in a new tab", () => {
    for (const el of fixture.nativeElement.querySelectorAll("a")) {
      if (el.getAttribute("href") === LINKEDIN_URL) {
        expect(el.innerText).toBe("Dawid Rzenno");
        expect(el.getAttribute("target")).toBe("_blank");
      }
    }
  });

  it("should contain a link called 'GitHub' that opens GitHub profile in a new tab", () => {
    for (const el of fixture.nativeElement.querySelectorAll("a")) {
      if (el.getAttribute("href") === GITHUB_URL) {
        expect(el.innerText).toBe("GitHub");
        expect(el.getAttribute("target")).toBe("_blank");
      }
    }
  });
});
