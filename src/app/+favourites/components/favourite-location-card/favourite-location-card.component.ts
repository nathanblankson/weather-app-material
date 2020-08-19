// Angular dependencies
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-favourite-location-card',
    templateUrl: './favourite-location-card.component.html',
    styleUrls: ['./favourite-location-card.component.scss']
})
export class FavouriteLocationCardComponent implements OnInit {
    @Input()
    public favourite: any;
    @Output()
    public favouriteClicked: EventEmitter<any> = new EventEmitter();

    constructor() { }

    ngOnInit() { }

    onClick() {
        this.favouriteClicked.emit(this.favourite.location.coords);
    }
}
