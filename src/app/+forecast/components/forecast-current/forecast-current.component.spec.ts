import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastCurrentComponent } from './forecast-current.component';

describe('ForecastCurrentComponent', () => {
    let component: ForecastCurrentComponent;
    let fixture: ComponentFixture<ForecastCurrentComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ForecastCurrentComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ForecastCurrentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
