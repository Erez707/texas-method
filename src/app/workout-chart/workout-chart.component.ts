import { Component, OnInit } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'workout-chart',
  templateUrl: './workout-chart.component.html',
  styleUrls: ['./workout-chart.component.scss']
})
export class WorkoutChartComponent implements OnInit {
  volumeData: ChartData;

  constructor() {
    this.volumeData = {

      labels: ['day1', 'day2', 'day3'], // x-axis (time - in days)
      datasets: [{
        label: "Squats",
        data: [150, 205, 225], // y-axis weights (intensity)
        borderColor: 'rgb(0, 150, 255)',
        pointBackgroundColor: 'rgb(0, 150, 255)',
        backgroundColor: 'white'
      },
      {
        label: "Deadlift",
        data: [135, 145, 185], // y-axis weights (intensity)
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        backgroundColor: 'white'
      },
      {
        label: "OHP",
        data: [95, 100, 100], // y-axis weights (intensity)
        borderColor: 'green',
        pointBackgroundColor: 'green',
        backgroundColor: 'white'
      },
      {
        label: "Behind-neck OHP",
        data: [75, 80, 85], // y-axis weights (intensity)
        borderColor: 'blue',
        pointBackgroundColor: 'blue',
        backgroundColor: 'white'
      },
      {
        label: "Pull-ups",
        data: [0, 5, 10], // y-axis weights (intensity)
        borderColor: 'rgb(105, 150, 132)',
        pointBackgroundColor: 'rgb(105, 150, 132)',
        backgroundColor: 'white'
      },
    ]
    }
   }

  ngOnInit(): void {
  }

  setMockDatabase(): any {
    let mockDatabase = {

      WorkoutDate: '',
      WorkoutType: '',
      MovementType: '',
      Sets: '',
      Reps: '',
      Weight: ''
    }

    return mockDatabase;
  }

}
