import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastDailyComponent } from './forecast-daily.component';

describe('ForecastDailyComponent', () => {
  let component: ForecastDailyComponent;
  let fixture: ComponentFixture<ForecastDailyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForecastDailyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastDailyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
