import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutrientNamesComponent } from './nutrient-names.component';

describe('NutrientNamesComponent', () => {
  let component: NutrientNamesComponent;
  let fixture: ComponentFixture<NutrientNamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NutrientNamesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NutrientNamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
