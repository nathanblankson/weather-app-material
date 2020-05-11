import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyCardComponent } from './daily-card.component';

describe('DailyCardComponent', () => {
  let component: DailyCardComponent;
  let fixture: ComponentFixture<DailyCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
