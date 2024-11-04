import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavComponent } from './side-nav.component';
import { NavigationService } from "../../../shared/services/navigation.service";
import { NAVIGATION_SERVICE_TOKEN } from "../navigation-service.interface";
import { provideRouter } from "@angular/router";
import { FontAwesomeIconLibraryModule } from "../../libraries/font-awesome-icon-library.module";

describe('SideNavComponent', () => {
  let component: SideNavComponent;
  let fixture: ComponentFixture<SideNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideNavComponent, FontAwesomeIconLibraryModule],
      providers: [
        { provide: NAVIGATION_SERVICE_TOKEN, useClass: NavigationService },
        provideRouter([])
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
