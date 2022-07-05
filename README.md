# TexasMethod

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.17.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Notes

main (overview) page
	There will be 1 chart and it will have an x-axis representing time (in days)
	and a y-axis representing intensity.

	The chart will have a line for each exercise type (different color for each type):
		Squat
		OHP
		Behind-Neck OHP
		Deadlift
		Pullup
		Rows
	
	At the top of the screen will be a widget displaying each color with its label (movement type) 
	and the option to toggle which one to display in the charts

	At the bottom of the screen will be a section called "Future workout":
		This will be a calander where all of the newly added workouts (from the workout-form) 
		will be added

	On the left side of the screen will be a navbar with two options
		"Home" (home icon)
		"Add New Workout" (pencil icon)
			When selecting the pencil icon the user will be taken to the wokout-form there he will input the 
			workout date and select movement types that will be in the workout.
				After all movement are added the user will click a submit button with the caption "Add Workout"
			and will be automatically routed to the overview page.

			When selecting a movement type a modal with the movement type page will open
			where he will be able to input the movement attributes:
				Workout date: will be automatically filled in from the workout form date inputted
				Movement type: will be automatically filled in (from the selected movement type)
				Sets
				Reps
				Weight: target weight
			After finishing the user will select a submit button with the caption "Add Movement"
			and will automatically be routed to the workout-form page.			
		

--------------------------------------------------------------------------------------------------

Component list:

app.component (will have the navbar and router outlet)

navbar component
overview component
   workout-chart component
   future-workout-calendar component

workout-form component
   movement-type component
   movement-modal component

--------------------------------------------------------------------------------------------------

TODO:

still need to add a login page (for now something simple locally - maybe use jwt for IAM)
database (for now just a json object locally)

later add authentication and authorization with aws cognito
and database with aws amplify

--------------------------------------------------------------------------------------------------

TODO:

	configure the routes in the app --- DONE!
		app component will have:
			- navbar component
			- router-outlet
				-> the routes will be to the overview component and the workout-form component


chart.js documentation at https://www.chartjs.org/docs/latest/getting-started/
ng2-charts https://github.com/valor-software/ng2-charts 
		
AdobeXD: https://xd.adobe.com/view/d2ecfc4f-a544-4c22-b8c2-00a13751b83c-87bf/ 


TODO Today - 7/4/2022: 

changing back a starting strength workout
  implement the chart (one single chart) with each movement type having a single line
    read ng2-charts, then read chart.js documentation

design and implement backend (database) with AWS Amplify

Add login and register and connect app with AWS Cognito
















