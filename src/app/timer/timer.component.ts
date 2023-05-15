import { Component, ViewChild } from '@angular/core';
import { CdTimerComponent, TimeInterface } from 'angular-cd-timer';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent {
  @ViewChild('basicTimer', { static: true }) basicTimer!: CdTimerComponent;

  timerInfo = '';

  constructor() {
    this.timerInfo = '';
  }

  onComplete(data: any) {
    this.timerInfo = 'Finished !';
  }

  onTick(data: TimeInterface) {
    this.timerInfo = 'In Progress [' + data.tick_count.toString().padStart(4, '0') + ']';
  }

  onStart(data: any) {
    console.log('Timer started.');
  }

  doActionBasicTimer(action: String) {
    switch (action) {
      case 'start':
        this.basicTimer.start();
        break;
      case 'resume':
        this.basicTimer.resume();
        break;
      case 'reset':
        this.basicTimer.reset();
        break;
      default:
        this.basicTimer.stop();
        break;
    }
  }
}
