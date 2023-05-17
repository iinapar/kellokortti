import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { user } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private authservice: AuthService, private router: Router) {}
  users: user[] = [];

  error: boolean = false;
  ngOnInit() {
    this.getUsers();
  }
  getUsers(): void {
    this.authservice.getUsers().subscribe((users) => (this.users = users));
  }
  // Jos validointi kunnossa ja tunnukset oikein, kirjaudutaan sisään ja navigoidaan regform-reittiin.
  // Muuten error-tila aktivoituu. Tietokannassa on vain yksi tieto, joten verrataan suoraan siihen.
  // Jos kantaan tulisi lisää tietoa, pitäisi tehdä filtteröinti ja verrata löydetyn tunnuksen salasanaa.
  // Kun kirjautuminen onnistuu, otetaan käyttäjälle tiedot tietokannasta.
  onSubmit(formData: any, isFormValid: boolean) {
    console.log(formData);
    if (
      isFormValid &&
      formData.tunnus === this.users[0].ktunnus &&
      formData.salasana === this.users[0].salasana
    ) {
      this.authservice.isLogged = true;
      this.authservice.saldo = this.users[0].saldo;
      this.router.navigate(['userview']);
    } else {
      this.error = true;
    }
  }
  // Kun suljetaan virheilmoitus, myös error-tila vaihtuu.
  changeError() {
    this.error = false;
  }
}
