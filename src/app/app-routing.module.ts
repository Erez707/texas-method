import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { WorkoutFormComponent } from './workout-form/workout-form.component';

const routes: Routes = [
  { 
    path: '', 
    component: OverviewComponent 
  },
  { 
    path: 'add-new-workout', 
    component: WorkoutFormComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
