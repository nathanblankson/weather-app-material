import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastHourlyComponent } from './forecast-hourly.component';

describe('ForecastHourlyComponent', () => {
  let component: ForecastHourlyComponent;
  let fixture: ComponentFixture<ForecastHourlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForecastHourlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastHourlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
