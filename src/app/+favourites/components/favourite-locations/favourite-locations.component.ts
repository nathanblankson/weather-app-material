// Angular dependencies
import { Component, OnInit } from '@angular/core';

// Other dependencies
import { Store } from '@ngxs/store';
import { ForecastRequest } from '@store/index';
import { Navigate } from '@ngxs/router-plugin';

@Component({
    selector: 'app-favourite-locations',
    templateUrl: './favourite-locations.component.html',
    styleUrls: ['./favourite-locations.component.scss']
})
export class FavouriteLocationsComponent implements OnInit {
    favourites = [
        {
            id: '324tgdsqe234et',
            temp: 292.39,
            weather: [
                {
                    icon: '04d',
                    main: 'Clouds'
                }
            ],
            location: {
                city: 'London',
                coords: {
                    lat: 51.507276,
                    lon: -0.12766
                },
                country: 'GB',
                postalCode: '',
                state: ''
            }
        },
        {
            id: '324tgdsqe234et',
            temp: 292.39,
            weather: [
                {
                    icon: '04d',
                    main: 'Clouds'
                }
            ],
            location: {
                city: 'London',
                coords: {
                    lat: 51.507276,
                    lon: -0.12766
                },
                country: 'GB',
                postalCode: '',
                state: ''
            }
        },
        {
            id: '324tgdsqe234et',
            temp: 292.39,
            weather: [
                {
                    icon: '04d',
                    main: 'Clouds'
                }
            ],
            location: {
                city: 'London',
                coords: {
                    lat: 51.507276,
                    lon: -0.12766
                },
                country: 'GB',
                postalCode: '',
                state: ''
            }
        },
        {
            id: '324tgdsqe234et',
            temp: 292.39,
            weather: [
                {
                    icon: '04d',
                    main: 'Clouds'
                }
            ],
            location: {
                city: 'London',
                coords: {
                    lat: 51.507276,
                    lon: -0.12766
                },
                country: 'GB',
                postalCode: '',
                state: ''
            }
        }
    ];

    constructor(private _store: Store) { }

    ngOnInit() { }

    onFavouriteClicked($event: { lat: number, lon: number }) {
        const query = `${$event.lat},${$event.lon}`;
        this._store.dispatch(new ForecastRequest({ data: query }));
        this._store.dispatch(new Navigate(['forecast']));
    }
}
