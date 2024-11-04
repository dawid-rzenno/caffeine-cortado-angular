import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListTableComponent } from './shopping-list-table.component';
import { provideRouter } from "@angular/router";
import { provideHttpClient } from "@angular/common/http";
import { provideHttpClientTesting } from "@angular/common/http/testing";

describe('ShoppingListTableComponent', () => {
  let component: ShoppingListTableComponent;
  let fixture: ComponentFixture<ShoppingListTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShoppingListTableComponent],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting()
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
