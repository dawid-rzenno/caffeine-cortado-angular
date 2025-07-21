import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientNutrientsComponent } from './ingredient-nutrients.component';

describe('IngredientNutrientsComponent', () => {
  let component: IngredientNutrientsComponent;
  let fixture: ComponentFixture<IngredientNutrientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IngredientNutrientsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngredientNutrientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
