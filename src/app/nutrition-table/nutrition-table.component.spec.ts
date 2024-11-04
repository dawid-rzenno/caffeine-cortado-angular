import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutritionTableComponent } from './nutrition-table.component';
import { MatGridListModule } from "@angular/material/grid-list";

describe('NutritionTableComponent', () => {
  let component: NutritionTableComponent;
  let fixture: ComponentFixture<NutritionTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NutritionTableComponent,
        MatGridListModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NutritionTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
