import { Component } from '@angular/core';

@Component({
  selector: 'app-stop-watch',
  templateUrl: './stop-watch.component.html',
  styleUrls: ['./stop-watch.component.css']
})
export class StopWatchComponent {

  title = 'stop-watch-timer';
  hr: number = 0;
  mm: number = 0;
  ss: number = 0;
  clearIntervalValue: any;
  btnStartOrPause: string = "Start";

  constructor() { }

  onStartOrPause(value) {
    switch (value) {
      case "Start":
      case "Resume":
        this.btnStartOrPause = "Pause";
        this.clearIntervalValue = setInterval(() => {
          this.ss += 1;
          if (this.ss > 60) {
            this.ss = 0;
            this.mm += 1;
            if (this.mm > 60) {
              this.ss = 0;
              this.mm = 0;
              this.hr += 1;
            }
          }
        }, 1000);
        break;
      case "Pause":
        this.btnStartOrPause = "Resume";
        clearInterval(this.clearIntervalValue);
    }
  }
  onResetAll() {
    this.btnStartOrPause = "Start";
    clearInterval(this.clearIntervalValue);
    this.hr = 0;
    this.mm = 0;
    this.ss = 0;
  }
}
