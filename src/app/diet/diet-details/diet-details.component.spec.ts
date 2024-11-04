import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DietDetailsComponent } from './diet-details.component';
import { ActivatedRoute, provideRouter } from "@angular/router";

import { createFakeActivatedRoute } from "../../shopping-list/shopping-list-table/create-fake-activated-route";

describe('DietDetailsComponent', () => {
  let component: DietDetailsComponent;
  let fixture: ComponentFixture<DietDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DietDetailsComponent],
      providers: [
        provideRouter([]),
        { provide: ActivatedRoute, useValue: createFakeActivatedRoute([{ id: 0, name: '' }]) },
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(DietDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
