import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OverviewComponent } from './overview/overview.component';
import { WorkoutChartComponent } from './workout-chart/workout-chart.component';
import { TexasMethodNavbarComponent } from './texas-method-navbar/texas-method-navbar.component';
import { FutureWorkoutCalendarComponent } from './future-workout-calendar/future-workout-calendar.component';
import { WorkoutFormComponent } from './workout-form/workout-form.component';
import { MovementTypeComponent } from './movement-type/movement-type.component';
import { MovementModalComponent } from './movement-modal/movement-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    WorkoutChartComponent,
    TexasMethodNavbarComponent,
    FutureWorkoutCalendarComponent,
    WorkoutFormComponent,
    MovementTypeComponent,
    MovementModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
