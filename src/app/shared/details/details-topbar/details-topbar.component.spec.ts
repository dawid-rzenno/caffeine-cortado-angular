import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsTopbarComponent } from './details-topbar.component';

describe('DetailsTopbarComponent', () => {
  let component: DetailsTopbarComponent;
  let fixture: ComponentFixture<DetailsTopbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsTopbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsTopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
