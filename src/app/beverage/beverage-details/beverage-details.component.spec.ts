import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeverageDetailsComponent } from './beverage-details.component';
import { provideRouter } from "@angular/router";

describe('BeverageDetailsComponent', () => {
  let component: BeverageDetailsComponent;
  let fixture: ComponentFixture<BeverageDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeverageDetailsComponent],
      providers: [
        provideRouter([])
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeverageDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
