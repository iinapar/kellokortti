import { Component } from '@angular/core';

@Component({
  selector: 'app-userview',
  templateUrl: './userview.component.html',
  styleUrls: ['./userview.component.scss'],
})
export class UserviewComponent {
  saldo = false;

  start() {}
  stop() {}
  showSaldo() {
    this.saldo = !this.saldo;
  }
}
