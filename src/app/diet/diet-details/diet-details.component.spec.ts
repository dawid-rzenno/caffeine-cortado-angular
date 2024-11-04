import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DietDetailsComponent } from './diet-details.component';
import { provideRouter } from "@angular/router";

describe('DietComponent', () => {
  let component: DietDetailsComponent;
  let fixture: ComponentFixture<DietDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DietDetailsComponent],
      providers: [
        provideRouter([])
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(DietDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
