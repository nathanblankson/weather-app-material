import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ForecastComponent implements OnInit {
  days = [
    {
      date: 'Tue 30',
      icon: 'Icon',
      temp: { high: 27, low: 20 },
      summary: 'Sunny',
    },
    {
      date: 'Tue 30',
      icon: 'Icon',
      temp: { high: 27, low: 20 },
      summary: 'Sunny',
    },
    {
      date: 'Tue 30',
      icon: 'Icon',
      temp: { high: 27, low: 20 },
      summary: 'Sunny',
    },
    {
      date: 'Tue 30',
      icon: 'Icon',
      temp: { high: 27, low: 20 },
      summary: 'Sunny',
    },
    {
      date: 'Tue 30',
      icon: 'Icon',
      temp: { high: 27, low: 20 },
      summary: 'Sunny',
    },
    {
      date: 'Tue 30',
      icon: 'Icon',
      temp: { high: 27, low: 20 },
      summary: 'Sunny',
    },
    {
      date: 'Tue 30',
      icon: 'Icon',
      temp: { high: 27, low: 20 },
      summary: 'Sunny',
    },
  ];

  selectedItem = 1;

  constructor() {}

  ngOnInit() {}
}
