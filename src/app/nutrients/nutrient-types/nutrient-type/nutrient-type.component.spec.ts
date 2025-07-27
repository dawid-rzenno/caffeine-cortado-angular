import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutrientTypeComponent } from './nutrient-type.component';

describe('NutrientTypeComponent', () => {
  let component: NutrientTypeComponent;
  let fixture: ComponentFixture<NutrientTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NutrientTypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NutrientTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
