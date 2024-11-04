import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientTableComponent } from './ingredient-table.component';
import { provideHttpClient } from "@angular/common/http";
import { provideHttpClientTesting } from "@angular/common/http/testing";
import { ActivatedRoute, provideRouter } from "@angular/router";
import { FontAwesomeIconLibraryModule } from "../../core/libraries/font-awesome-icon-library.module";
import { createFakeActivatedRoute } from "../../shopping-list/shopping-list-table/shopping-list-table.component.spec";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";

describe('IngredientTableComponent', () => {
  let component: IngredientTableComponent;
  let fixture: ComponentFixture<IngredientTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IngredientTableComponent, FontAwesomeIconLibraryModule, NoopAnimationsModule],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting(),
        { provide: ActivatedRoute, useValue: createFakeActivatedRoute([]) },
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngredientTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
