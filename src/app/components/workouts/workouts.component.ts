import { Component, OnInit } from '@angular/core';
import { workout } from 'src/app/models/workout';

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.scss'],
})
export class WorkoutsComponent implements OnInit {
  workouts: workout[];
  inputAddWorkout: string = ''
  inputReps: number ;
  inputSets: number ;

  constructor() {}

  ngOnInit(): void {
    this.workouts = [
      {
        content: 'Squats',
        reps: 10,
        sets: 3,
        completed: true,
      },
      {
        content: 'RDLs',
        reps:12,
        sets: 3,
        completed: false,
      },
    ];
  }

  toggleDone(id: number): void {
    this.workouts.map((v, i) => {
      if (i === id) v.completed = !v.completed;
      return v;
    });
  }

  deleteWorkout(id: number){
    this.workouts = this.workouts.filter((v, i) => i !== id)
  }

  addworkout(){this.workouts.push({
    content: this.inputAddWorkout,
    reps: this.inputReps,
    sets: this.inputSets,
    completed:false,
  });

  this.inputAddWorkout = '';
  //  this.inputReps = ;
  }
}
