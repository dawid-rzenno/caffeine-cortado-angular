import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShoppingListDetailsComponent } from './shopping-list-details.component';
import { ActivatedRoute, provideRouter } from "@angular/router";
import { createFakeActivatedRoute } from "../shopping-list-table/shopping-list-table.component.spec";

describe('ShoppingListDetailsComponent', () => {
  let component: ShoppingListDetailsComponent;
  let fixture: ComponentFixture<ShoppingListDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShoppingListDetailsComponent],
      providers: [
        provideRouter([]),
        { provide: ActivatedRoute, useValue: createFakeActivatedRoute([{ id: 0, name: '' }]) },
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
