import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseDetailsComponent } from './exercise-details.component';
import { provideRouter } from "@angular/router";
import { provideHttpClient } from "@angular/common/http";
import { provideHttpClientTesting } from "@angular/common/http/testing";

describe('ExerciseDetailsComponent', () => {
  let component: ExerciseDetailsComponent;
  let fixture: ComponentFixture<ExerciseDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExerciseDetailsComponent],
      providers: [

        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExerciseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
