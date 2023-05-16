import { Component, ViewChild } from '@angular/core';
import { CdTimerComponent, TimeInterface } from 'angular-cd-timer';

@Component({
  selector: 'app-userview',
  templateUrl: './userview.component.html',
  styleUrls: ['./userview.component.scss'],
})
export class UserviewComponent {
  showTimer = false;
  @ViewChild(CdTimerComponent, { static: false }) basicTimer!: CdTimerComponent;

  toggleTimer() {
    this.showTimer = !this.showTimer;
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
