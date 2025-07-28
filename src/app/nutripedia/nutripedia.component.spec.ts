import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutripediaComponent } from './nutripedia.component';

describe('NutripediaComponent', () => {
  let component: NutripediaComponent;
  let fixture: ComponentFixture<NutripediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NutripediaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NutripediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
