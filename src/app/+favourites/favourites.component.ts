import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-favourites',
    templateUrl: './favourites.component.html',
    styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {

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

    constructor() { }

    ngOnInit() {
    }

}
