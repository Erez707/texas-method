import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'workout-form',
  templateUrl: './workout-form.component.html',
  styleUrls: ['./workout-form.component.scss']
})
export class WorkoutFormComponent implements OnInit {

  workoutDate: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

  onDateChange() {
    console.log("workout Date: ", this.workoutDate);
  }

}
