import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WorkoutDetailsComponent } from './workout-details.component';
import { ActivatedRoute, provideRouter } from "@angular/router";

import { createFakeActivatedRoute } from "../../shopping-list/shopping-list-table/create-fake-activated-route";

describe('WorkoutDetailsComponent', () => {
  let component: WorkoutDetailsComponent;
  let fixture: ComponentFixture<WorkoutDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkoutDetailsComponent],
      providers: [
        provideRouter([]),
        { provide: ActivatedRoute, useValue: createFakeActivatedRoute([{ id: 0, name: '' }]) },
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkoutDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
