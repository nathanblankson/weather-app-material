import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-location-card',
    templateUrl: './location-card.component.html',
    styleUrls: ['./location-card.component.scss']
})
export class LocationCardComponent implements OnInit {
    @Input()
    favourite: any;

    @Output() favouriteClicked: EventEmitter<any> = new EventEmitter();

    constructor() { }

    ngOnInit() { }

    onClick() {
        this.favouriteClicked.emit(this.favourite.location.coords);
    }
}
