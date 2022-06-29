import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureWorkoutCalendarComponent } from './future-workout-calendar.component';

describe('FutureWorkoutCalendarComponent', () => {
  let component: FutureWorkoutCalendarComponent;
  let fixture: ComponentFixture<FutureWorkoutCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FutureWorkoutCalendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FutureWorkoutCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
