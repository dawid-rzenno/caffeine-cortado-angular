import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MassUnitsComponent } from './mass-units.component';

describe('MassUnitsComponent', () => {
  let component: MassUnitsComponent;
  let fixture: ComponentFixture<MassUnitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MassUnitsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MassUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
