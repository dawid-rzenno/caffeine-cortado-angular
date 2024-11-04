import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealTableComponent } from './meal-table.component';
import { ActivatedRoute, provideRouter } from "@angular/router";
import { provideHttpClient } from "@angular/common/http";
import { provideHttpClientTesting } from "@angular/common/http/testing";
import { createFakeActivatedRoute } from "../../shopping-list/shopping-list-table/shopping-list-table.component.spec";
import { FontAwesomeIconLibraryModule } from "../../core/libraries/font-awesome-icon-library.module";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";

describe('MealTableComponent', () => {
  let component: MealTableComponent;
  let fixture: ComponentFixture<MealTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MealTableComponent, FontAwesomeIconLibraryModule, NoopAnimationsModule],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting(),
        { provide: ActivatedRoute, useValue: createFakeActivatedRoute([]) },
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MealTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
