import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListFormComponent } from './shopping-list-form.component';
import { provideHttpClient } from "@angular/common/http";
import { provideHttpClientTesting } from "@angular/common/http/testing";
import { provideRouter } from "@angular/router";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";

describe('ShoppingListFormComponent', () => {
  let component: ShoppingListFormComponent;
  let fixture: ComponentFixture<ShoppingListFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShoppingListFormComponent, NoopAnimationsModule],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting(),
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingListFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
