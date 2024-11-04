import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientDetailsComponent } from './ingredient-details.component';
import { ActivatedRoute, provideRouter } from "@angular/router";
import { createFakeActivatedRoute } from "../../shopping-list/shopping-list-table/shopping-list-table.component.spec";

describe('IngredientDetailsComponent', () => {
  let component: IngredientDetailsComponent;
  let fixture: ComponentFixture<IngredientDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IngredientDetailsComponent],
      providers: [
        provideRouter([]),
        { provide: ActivatedRoute, useValue: createFakeActivatedRoute([{ id: 0, name: '' }]) },
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
