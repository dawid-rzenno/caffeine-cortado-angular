import { ComponentFixture, TestBed } from "@angular/core/testing";

import { BreadcrumbsComponent } from "./breadcrumbs.component";
import { NAVIGATION_SERVICE_TOKEN } from "../navigation-service.interface";
import { NavigationService } from "../../../shared/services/navigation.service";

describe("BreadcrumbsComponent", () => {
  let component: BreadcrumbsComponent;
  let fixture: ComponentFixture<BreadcrumbsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreadcrumbsComponent],
      providers: [
        {
          provide: NAVIGATION_SERVICE_TOKEN,
          useClass: NavigationService,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(BreadcrumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
