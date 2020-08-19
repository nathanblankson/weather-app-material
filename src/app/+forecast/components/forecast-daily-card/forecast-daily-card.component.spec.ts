import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastDailyCardComponent } from './forecast-daily-card.component';

describe('ForecastDailyCardComponent', () => {
    let component: ForecastDailyCardComponent;
    let fixture: ComponentFixture<ForecastDailyCardComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ForecastDailyCardComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ForecastDailyCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
