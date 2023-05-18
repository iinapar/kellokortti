import { Component, ViewChild } from '@angular/core';
import { CdTimerComponent, TimeInterface } from 'angular-cd-timer';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-userview',
  templateUrl: './userview.component.html',
  styleUrls: ['./userview.component.scss'],
})
export class UserviewComponent {
  constructor(private authservice: AuthService) {
    this.saldo = this.authservice.saldo;
  }
  showTimer: boolean = false;
  tyo: boolean = false;
  tauko: boolean = false;
  tyovalmis: boolean = false;
  tyoKaynnissa: boolean = false;
  viesti!: string;
  aloitusaika!: any;
  lopetusaika!: any;
  saldo: any;
  aloitusaika2!: any;
  lopetusaika2!: any;
  tuntisaldo!: any;
  tyopaivaMillisekunteina: number = 7 * 3600000;
  erotus!: number;
  erotusTunteina!: number;

  @ViewChild(CdTimerComponent, { static: false }) basicTimer!: CdTimerComponent;

  toggleTimer() {
    this.showTimer = !this.showTimer;
  }
  // Ottaa sen hetkisen ajan ja palauttaa sen Suomen käyttämässä formaatissa
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
  // Funktion kun kirjaudutaan sisään. Ottaa työn aloitusajat, vaihtaa tyoKaynnissa muuttujan arvon
  // sekä vaihtaa templaattiin viestin arvon sekä ajan.
  sisaan() {
    this.tyoKaynnissa = true;
    this.aloitusaika = this.otaAika();
    this.aloitusaika2 = Date.now();
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
    this.tyoKaynnissa = true;
  }
  lopetaPaiva() {
    this.tauko = false;
    this.tyoKaynnissa = false;
    this.tyovalmis = true;
    this.lopetusaika = this.otaAika();
    this.lopetusaika2 = Date.now();
    this.viesti = 'Ulos ' + this.otaAika();
    this.otaSaldo();
  }
  otaSaldo() {
    this.erotus = this.lopetusaika2 - this.aloitusaika2;
    this.erotusTunteina = this.erotus / 1000 / 60 / 60;
    if (this.erotus > 7 * 3600000) {
      const sum = this.authservice.saldo + this.erotusTunteina;
      this.authservice.saldo = Math.round(sum * 10) / 10;
    } else {
      const sum =
        this.authservice.saldo -
        (this.tyopaivaMillisekunteina - this.erotusTunteina) / 1000 / 60 / 60;
      this.authservice.saldo = Math.round(sum * 10) / 10;
    }
    this.saldo = this.authservice.saldo;
  }
}
