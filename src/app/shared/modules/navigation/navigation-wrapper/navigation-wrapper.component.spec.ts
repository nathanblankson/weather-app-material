import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationWrapperComponent } from './navigation-wrapper.component';

describe('NavigationWrapperComponent', () => {
  let component: NavigationWrapperComponent;
  let fixture: ComponentFixture<NavigationWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
