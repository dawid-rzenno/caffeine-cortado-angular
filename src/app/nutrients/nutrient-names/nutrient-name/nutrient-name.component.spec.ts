import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutrientNameComponent } from './nutrient-name.component';

describe('NutrientNameComponent', () => {
  let component: NutrientNameComponent;
  let fixture: ComponentFixture<NutrientNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NutrientNameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NutrientNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
