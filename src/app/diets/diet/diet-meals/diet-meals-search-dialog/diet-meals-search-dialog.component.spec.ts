import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DietMealsSearchDialogComponent } from './diet-meals-search-dialog.component';

describe('DietMealsSearchDialogComponent', () => {
  let component: DietMealsSearchDialogComponent;
  let fixture: ComponentFixture<DietMealsSearchDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DietMealsSearchDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DietMealsSearchDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
