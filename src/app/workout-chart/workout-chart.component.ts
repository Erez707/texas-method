import { Component, Input, OnInit } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'workout-chart',
  templateUrl: './workout-chart.component.html',
  styleUrls: ['./workout-chart.component.scss']
})
export class WorkoutChartComponent implements OnInit {
  @Input() workoutType!: string;

  volumeData: ChartData;

  constructor() { 
    this.volumeData = {
      labels: ['day0', 'day1', 'day2', 'day3'], // x-axis 
      datasets: [{
        label: this.workoutType,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 135, 145, 185], // y-axis
      }]
    }
   }

  ngOnInit(): void {
  }

}
