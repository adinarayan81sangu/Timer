import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  totaltime: number = 60;
  private intervel: any
  constructor() { }

  startTimer() {
    this.intervel = setInterval(() => {
      if (this.totaltime > 0) {

        this.totaltime--;

      } 
    }, 1000)
  }

  pauseTimer() {
    clearInterval(this.intervel);
  }

  ngOnInit(): void {
  }

}
