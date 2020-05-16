import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-daily-card',
  templateUrl: './daily-card.component.html',
  styleUrls: ['./daily-card.component.scss'],
})
export class DailyCardComponent implements OnInit {
  @Input()
  active: boolean;

  @Input()
  day;

  constructor() {}

  ngOnInit() {}

  onClick() {
    console.log('card clicked');
  }
}
