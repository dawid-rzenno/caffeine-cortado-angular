import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealIngredientsSearchDialogComponent } from './meal-ingredients-search-dialog.component';

describe('MealIngredientsSearchDialogComponent', () => {
  let component: MealIngredientsSearchDialogComponent;
  let fixture: ComponentFixture<MealIngredientsSearchDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MealIngredientsSearchDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MealIngredientsSearchDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
