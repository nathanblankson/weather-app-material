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
      date: 'Wed 1',
      icon: 'Icon',
      temp: { high: 31, low: 20 },
      summary: 'Partly Sunny',
    },
    {
      date: 'Thu 2',
      icon: 'Icon',
      temp: { high: 25, low: 19 },
      summary: 'Mostly Cloudy',
    },
    {
      date: 'Fri 3',
      icon: 'Icon',
      temp: { high: 30, low: 22 },
      summary: 'Sunny',
    },
    {
      date: 'Sat 4',
      icon: 'Icon',
      temp: { high: 30, low: 17 },
      summary: 'Sunny',
    },
    {
      date: 'Sun 5',
      icon: 'Icon',
      temp: { high: 24, low: 14 },
      summary: 'Sunny',
    },
    {
      date: 'Mon 6',
      icon: 'Icon',
      temp: { high: 25, low: 15 },
      summary: 'Sunny',
    },
  ];

  selectedItem = 1;
  showSummary = true;

  constructor() {}

  ngOnInit() {}

  summaryClicked() {
    this.showSummary = true;
  }

  detailsClicked() {
    this.showSummary = false;
  }
}
