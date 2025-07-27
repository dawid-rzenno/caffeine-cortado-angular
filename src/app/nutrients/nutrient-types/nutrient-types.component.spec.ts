import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutrientTypesComponent } from './nutrient-types.component';

describe('NutrientTypesComponent', () => {
  let component: NutrientTypesComponent;
  let fixture: ComponentFixture<NutrientTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NutrientTypesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NutrientTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
