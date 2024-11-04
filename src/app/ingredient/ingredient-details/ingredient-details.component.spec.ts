import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientDetailsComponent } from './ingredient-details.component';
import { provideRouter } from "@angular/router";

describe('IngredientDetailsComponent', () => {
  let component: IngredientDetailsComponent;
  let fixture: ComponentFixture<IngredientDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IngredientDetailsComponent],
      providers: [
        provideRouter([])
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngredientDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
