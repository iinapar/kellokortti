import { Component, ViewChild } from '@angular/core';
import { CdTimerComponent, TimeInterface } from 'angular-cd-timer';

@Component({
  selector: 'app-userview',
  templateUrl: './userview.component.html',
  styleUrls: ['./userview.component.scss'],
})
export class UserviewComponent {
  showTimer: boolean = false;
  tyo: boolean = false;
  tauko: boolean = false;
  tyovalmis: boolean = false;
  tyoKaynnissa: boolean = false;
  viesti!: string;
  aloitusaika!: any;
  lopetusaika!: any;
  saldo!: any;
  modaaliVaihto: boolean = false;

  @ViewChild(CdTimerComponent, { static: false }) basicTimer!: CdTimerComponent;

  toggleTimer() {
    this.showTimer = !this.showTimer;
  }

  otaAika() {
    const event = new Date();
    const aika = event.toLocaleString('fi-FI');
    return aika;
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
  sisaan() {
    this.tyoKaynnissa = true;
    this.aloitusaika = this.otaAika();
    this.viesti = 'sisään ' + this.otaAika();
  }
  aloitatauko() {
    this.tauko = true;
    this.viesti = 'Tauko ' + this.otaAika();
    this.tyoKaynnissa = false;
  }
  tauoltasisaan() {
    this.tauko = false;
    this.viesti = 'sisään ' + this.otaAika();
  }
  lopetaPaiva() {
    this.tauko = false;
    this.tyoKaynnissa = false;
    this.lopetusaika = this.otaAika();
    this.viesti = 'Ulos ' + this.otaAika();
    this.otaSaldo();
  }
  otaSaldo() {
    this.saldo = this.lopetusaika.getTime() - this.aloitusaika.getTime();
  }
  vaihdaModaali() {
    this.modaaliVaihto = true;
    if () {
      .getElementById("modal-exit");
    };
  }
}
