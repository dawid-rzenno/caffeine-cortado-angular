import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientTableComponent } from './ingredient-table.component';
import { provideHttpClient } from "@angular/common/http";
import { provideHttpClientTesting } from "@angular/common/http/testing";

describe('IngredientTableComponent', () => {
  let component: IngredientTableComponent;
  let fixture: ComponentFixture<IngredientTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IngredientTableComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngredientTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
