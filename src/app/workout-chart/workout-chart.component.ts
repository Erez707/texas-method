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
    this.getMockDatabaseLength();
  }

  getMockDatabaseLength() {
    let object = this.setMockDatabase();
    console.log(object);
  }

  setMockDatabase(): any {
    let mockDatabase = {

      Week1: {
        Monday: {
          Squat:  { 
            WorkoutDate: '',
            MovementType: 'Squat',
            Sets: '5',
            Reps: '5',
            Weight: '200'
          },
          Deadlift: { 
            WorkoutDate: '',
            MovementType: 'Deadlift',
            Sets: '1',
            Reps: '5',
            Weight: '220'
          },
          OHP:  { 
            WorkoutDate: '',
            MovementType: 'OHP',
            Sets: '5',
            Reps: '5',
            Weight: '85'
          }
        },
        Wednesday: {
          Squat:  { 
            WorkoutDate: '',
            MovementType: 'Squat',
            Sets: '5',
            Reps: '5',
            Weight: '205'
          },
          Pullups: { 
            WorkoutDate: '',
            MovementType: 'Pull-ups',
            Sets: '5',
            Reps: '5',
            Weight: '0'
          },
          BehindNeckOHP:  { 
            WorkoutDate: '',
            MovementType: 'Behind-neck-OHP',
            Sets: '5',
            Reps: '5',
            Weight: '70'
          }
        },
        Friday: {
          Squat:  { 
            WorkoutDate: '',
            MovementType: 'Squat',
            Sets: '5',
            Reps: '5',
            Weight: '210'
          },
          Deadlift: { 
            WorkoutDate: '',
            MovementType: 'Deadlift',
            Sets: '1',
            Reps: '5',
            Weight: '225'
          },
          OHP:  { 
            WorkoutDate: '',
            MovementType: 'OHP',
            Sets: '5',
            Reps: '5',
            Weight: '95'
          }
        }
      },
      Week2: {
        Monday: {
          Squat:  { 
            WorkoutDate: '',
            MovementType: 'Squat',
            Sets: '5',
            Reps: '5',
            Weight: '210'
          },
          Pullups: { 
            WorkoutDate: '',
            MovementType: 'Pull-ups',
            Sets: '5',
            Reps: '5',
            Weight: '5'
          },
          BehindNeckOHP:  { 
            WorkoutDate: '',
            MovementType: 'Behind-neck-OHP',
            Sets: '5',
            Reps: '5',
            Weight: '75'
          }
        },
        Wednesday: {
          Squat:  { 
            WorkoutDate: '',
            MovementType: 'Squat',
            Sets: '5',
            Reps: '5',
            Weight: '215'
          },
          Deadlift: { 
            WorkoutDate: '',
            MovementType: 'Deadlift',
            Sets: '1',
            Reps: '5',
            Weight: '230'
          },
          OHP:  { 
            WorkoutDate: '',
            MovementType: 'OHP',
            Sets: '5',
            Reps: '5',
            Weight: '100'
          }
        },
        Friday: {
          Squat:  { 
            WorkoutDate: '',
            MovementType: 'Squat',
            Sets: '5',
            Reps: '5',
            Weight: '220'
          },
          Pullups: { 
            WorkoutDate: '',
            MovementType: 'Pull-ups',
            Sets: '5',
            Reps: '5',
            Weight: '10'
          },
          BehindNeckOHP:  { 
            WorkoutDate: '',
            MovementType: 'Behind-neck-OHP',
            Sets: '5',
            Reps: '5',
            Weight: '80'
          }
        }
      },
      
    }

    return mockDatabase;
  }

}
