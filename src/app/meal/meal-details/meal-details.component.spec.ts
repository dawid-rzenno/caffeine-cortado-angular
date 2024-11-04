import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealDetailsComponent } from './meal-details.component';
import { ActivatedRoute, provideRouter } from "@angular/router";
import { createFakeActivatedRoute } from "../../shopping-list/shopping-list-table/shopping-list-table.component.spec";

describe('MealDetailsComponent', () => {
  let component: MealDetailsComponent;
  let fixture: ComponentFixture<MealDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MealDetailsComponent],
      providers: [
        provideRouter([]),
        { provide: ActivatedRoute, useValue: createFakeActivatedRoute([{ id: 0, name: '' }]) },
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(MealDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
