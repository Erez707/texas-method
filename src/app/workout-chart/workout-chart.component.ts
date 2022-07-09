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

      labels: this.getMockDatabaseSetOfWorkoutDates(), // x-axis (time - in days)
      datasets: [{
        label: "Squats",
        data: this.getMockdatabaseMovementWeightValues("Squat"), // y-axis weights (intensity)
        borderColor: 'rgb(0, 150, 255)',
        pointBackgroundColor: 'rgb(0, 150, 255)',
        backgroundColor: 'white',
        spanGaps: true
      },
      {
        label: "Deadlift",
        data: this.getMockdatabaseMovementWeightValues("Deadlift"), // y-axis weights (intensity)
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        backgroundColor: 'white',
        spanGaps: true
      },
      {
        label: "OHP",
        data: this.getMockdatabaseMovementWeightValues("OHP"), // y-axis weights (intensity)
        borderColor: 'green',
        pointBackgroundColor: 'green',
        backgroundColor: 'white',
        spanGaps: true
      },
      {
        label: "Behind-neck OHP",
        data: this.getMockdatabaseMovementWeightValues("BehindNeckOHP"), // y-axis weights (intensity)
        borderColor: 'blue',
        pointBackgroundColor: 'blue',
        backgroundColor: 'white',
        spanGaps: true
      },
      {
        label: "Pull-ups",
        data: this.getMockdatabaseMovementWeightValues("PullUps"), // y-axis weights (intensity)
        borderColor: 'rgb(105, 150, 132)',
        pointBackgroundColor: 'rgb(105, 150, 132)',
        backgroundColor: 'white',
        spanGaps: true
      }]
    }
   }

  ngOnInit(): void {}
  //TODO: ******** fill the data for each movement in the chart

  getMockDatabaseSetOfWorkoutDates() {
    let mockDatabase = this.setMockDatabase();
    let mockDatabaseArray = Object.keys(mockDatabase); // displays an array with the first children's (workout weeks) keys as it's values
    let counter = 0;
    let datesSet = new Set();


    for (let i = 0; i < mockDatabaseArray.length; i++) {
      const trainingWeek = mockDatabaseArray[i];
      let trainingWeekArray = Object.keys(mockDatabase[trainingWeek]); // displays an array with the first children's (workout days) keys as it's values
      
      for (let j = 0; j < trainingWeekArray.length; j++) {
        const trainingDay = trainingWeekArray[j];

        datesSet.add(mockDatabase[trainingWeek][trainingDay].WorkoutDate);
        counter++;
      }
    }

    console.log("counter: ", counter);
    return Array.from(datesSet);
  }

  getMockdatabaseMovementWeightValues(movement: string): number[] {
    let mockDatabase = this.setMockDatabase();
    let mockDatabaseArray = Object.keys(mockDatabase); // displays an array with the first children's (workout weeks) keys as it's values
    let dataArray = new Array();

    for (let i = 0; i < mockDatabaseArray.length; i++) {
      const trainingWeek = mockDatabaseArray[i];
      let trainingWeekArray = Object.keys(mockDatabase[trainingWeek]); // displays an array with the first children's (workout days) keys as it's values
      
      for (let j = 0; j < trainingWeekArray.length; j++) {
        const trainingDay = trainingWeekArray[j];
        let movementType = mockDatabase[trainingWeek][trainingDay][movement];
        if (movementType) { // not all days have the same workout (i.e. not all movement types exist in every training day)
          dataArray.push(Number(movementType.Weight));          
        } else {
          dataArray.push(null);
        }
      }
    }
    console.log("dataArray: ", dataArray);
    return dataArray;
  }

  setMockDatabase(): any {
    let mockDatabase = {

      Week1: {
        Monday: {
          WorkoutDate: '7/4/2022',
          Squat:  { 
            MovementType: 'Squat',
            Sets: '5',
            Reps: '5',
            Weight: '200'
          },
          Deadlift: { 
            MovementType: 'Deadlift',
            Sets: '1',
            Reps: '5',
            Weight: '220'
          },
          OHP:  { 
            MovementType: 'OHP',
            Sets: '5',
            Reps: '5',
            Weight: '85'
          }
        },
        Wednesday: {
          WorkoutDate: '7/6/2022',
          Squat:  { 
            MovementType: 'Squat',
            Sets: '5',
            Reps: '5',
            Weight: '205'
          },
          PullUps: { 
            MovementType: 'Pull-ups',
            Sets: '5',
            Reps: '5',
            Weight: '0'
          },
          BehindNeckOHP:  { 
            MovementType: 'Behind-neck-OHP',
            Sets: '5',
            Reps: '5',
            Weight: '70'
          }
        },
        Friday: {
          WorkoutDate: '7/8/2022',
          Squat:  { 
            MovementType: 'Squat',
            Sets: '5',
            Reps: '5',
            Weight: '210'
          },
          Deadlift: { 
            MovementType: 'Deadlift',
            Sets: '1',
            Reps: '5',
            Weight: '225'
          },
          OHP:  { 
            MovementType: 'OHP',
            Sets: '5',
            Reps: '5',
            Weight: '95'
          }
        }
      },
      Week2: {
        Monday: {
          WorkoutDate: '7/11/2022',
          Squat:  { 
            MovementType: 'Squat',
            Sets: '5',
            Reps: '5',
            Weight: '210'
          },
          PullUps: { 
            MovementType: 'Pull-ups',
            Sets: '5',
            Reps: '5',
            Weight: '5'
          },
          BehindNeckOHP:  { 
            MovementType: 'Behind-neck-OHP',
            Sets: '5',
            Reps: '5',
            Weight: '75'
          }
        },
        Wednesday: {
          WorkoutDate: '7/13/2022',
          Squat:  { 
            MovementType: 'Squat',
            Sets: '5',
            Reps: '5',
            Weight: '215'
          },
          Deadlift: { 
            MovementType: 'Deadlift',
            Sets: '1',
            Reps: '5',
            Weight: '230'
          },
          OHP:  { 
            MovementType: 'OHP',
            Sets: '5',
            Reps: '5',
            Weight: '100'
          }
        },
        Friday: {
          WorkoutDate: '7/15/2022',
          Squat:  { 
            MovementType: 'Squat',
            Sets: '5',
            Reps: '5',
            Weight: '220'
          },
          PullUps: { 
            MovementType: 'Pull-ups',
            Sets: '5',
            Reps: '5',
            Weight: '10'
          },
          BehindNeckOHP:  { 
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
