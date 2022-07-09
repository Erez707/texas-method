import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FullCalendarModule } from '@fullcalendar/angular'; // must go before plugins

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OverviewComponent } from './overview/overview.component';
import { WorkoutChartComponent } from './workout-chart/workout-chart.component';
import { TexasMethodNavbarComponent } from './texas-method-navbar/texas-method-navbar.component';
import { FutureWorkoutCalendarComponent } from './future-workout-calendar/future-workout-calendar.component';
import { WorkoutFormComponent } from './workout-form/workout-form.component';
import { MovementTypeComponent } from './movement-type/movement-type.component';
import { MovementModalComponent } from './movement-modal/movement-modal.component';

import { NgChartsModule } from 'ng2-charts';

import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';

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
    BrowserAnimationsModule,
    FullCalendarModule,
    AppRoutingModule,
    NgChartsModule,
    SidebarModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
