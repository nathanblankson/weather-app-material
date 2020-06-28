import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-favourite-locations',
    templateUrl: './favourite-locations.component.html',
    styleUrls: ['./favourite-locations.component.scss']
})
export class FavouriteLocationsComponent implements OnInit {
    @Input()
    favourites: any;

    constructor() { }

    ngOnInit() { }
}
