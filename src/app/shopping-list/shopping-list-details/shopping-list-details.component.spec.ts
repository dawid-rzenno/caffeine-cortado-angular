import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShoppingListDetailsComponent } from './shopping-list-details.component';
import { provideRouter } from "@angular/router";
import { provideHttpClient } from "@angular/common/http";
import { provideHttpClientTesting } from "@angular/common/http/testing";

describe('ShoppingListDetailsComponent', () => {
  let component: ShoppingListDetailsComponent;
  let fixture: ComponentFixture<ShoppingListDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShoppingListDetailsComponent],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingListDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
