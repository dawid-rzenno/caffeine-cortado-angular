import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutritionTableCellComponent } from './nutrition-table-cell.component';

describe('NutritionTableColumnComponent', () => {
  let component: NutritionTableCellComponent;
  let fixture: ComponentFixture<NutritionTableCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NutritionTableCellComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NutritionTableCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
