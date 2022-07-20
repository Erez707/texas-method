import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';

@Component({
  selector: 'overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridWeek',
    contentHeight: 350
  };

  constructor() { }

  ngOnInit(): void {
  }

}
