import { ComponentFixture, TestBed } from "@angular/core/testing";

import { SettingsMenuButtonComponent } from "./settings-menu-button.component";

describe("SettingsMenuButtonComponent", () => {
  let component: SettingsMenuButtonComponent;
  let fixture: ComponentFixture<SettingsMenuButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SettingsMenuButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SettingsMenuButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
