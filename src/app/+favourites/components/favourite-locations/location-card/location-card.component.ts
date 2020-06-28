import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-location-card',
    templateUrl: './location-card.component.html',
    styleUrls: ['./location-card.component.scss']
})
export class LocationCardComponent implements OnInit {
    @Input()
    favourite: any;

    constructor() { }

    ngOnInit() { }
}
