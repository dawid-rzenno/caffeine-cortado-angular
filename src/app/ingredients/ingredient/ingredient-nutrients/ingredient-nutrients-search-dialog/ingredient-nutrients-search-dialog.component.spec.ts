import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientNutrientsSearchDialogComponent } from './ingredient-nutrients-search-dialog.component';

describe('IngredientNutrientsSearchDialogComponent', () => {
  let component: IngredientNutrientsSearchDialogComponent;
  let fixture: ComponentFixture<IngredientNutrientsSearchDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IngredientNutrientsSearchDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngredientNutrientsSearchDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
