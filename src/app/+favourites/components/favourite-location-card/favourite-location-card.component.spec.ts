import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteLocationCardComponent } from './favourite-location-card.component';

describe('FavouriteLocationCardComponent', () => {
    let component: FavouriteLocationCardComponent;
    let fixture: ComponentFixture<FavouriteLocationCardComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FavouriteLocationCardComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FavouriteLocationCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
