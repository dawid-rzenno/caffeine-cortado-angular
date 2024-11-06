import { ComponentFixture, TestBed } from "@angular/core/testing";

import { NameChangeModalComponent } from "./name-change-modal.component";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";

describe("NameChangeModalComponent", () => {
  let component: NameChangeModalComponent;
  let fixture: ComponentFixture<NameChangeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NameChangeModalComponent, NoopAnimationsModule],
      providers: [{ provide: MAT_DIALOG_DATA, useValue: { name: "" } }],
    }).compileComponents();

    fixture = TestBed.createComponent(NameChangeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
