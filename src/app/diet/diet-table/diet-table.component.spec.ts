import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DietTableComponent } from './diet-table.component';
import { provideHttpClient } from "@angular/common/http";
import { provideHttpClientTesting } from "@angular/common/http/testing";

describe('DietTableComponent', () => {
  let component: DietTableComponent;
  let fixture: ComponentFixture<DietTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DietTableComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DietTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
