import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MassUnitComponent } from './mass-unit.component';

describe('MassUnitComponent', () => {
  let component: MassUnitComponent;
  let fixture: ComponentFixture<MassUnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MassUnitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MassUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
