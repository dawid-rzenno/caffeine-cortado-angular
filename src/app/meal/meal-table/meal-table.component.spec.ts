import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealTableComponent } from './meal-table.component';
import { provideRouter } from "@angular/router";
import { provideHttpClient } from "@angular/common/http";
import { provideHttpClientTesting } from "@angular/common/http/testing";

describe('MealTableComponent', () => {
  let component: MealTableComponent;
  let fixture: ComponentFixture<MealTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MealTableComponent],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MealTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
