import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameChangeModalComponent } from './name-change-modal.component';

describe('NameChangeModalComponent', () => {
  let component: NameChangeModalComponent;
  let fixture: ComponentFixture<NameChangeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NameChangeModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NameChangeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
