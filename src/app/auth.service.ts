import { Injectable } from '@angular/core';
import { user } from './user';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
// Auth-service on tietokannan tietojen hakemiseen sekä kirjautumisen tilan ylläpitämiseen. Tänne haetaan
// tiedot komponentille käytettäväksi.
export class AuthService {
  isLogged: boolean;
  constructor(private http: HttpClient) {
    this.isLogged = false;
  }
  // Osoite web-apiin.
  private usersUrl = 'api/users';
  getUsers(): Observable<user[]> {
    return this.http.get<user[]>(this.usersUrl);
  }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  addUser(Data: user): Observable<user> {
    return this.http.post<user>(this.usersUrl, Data, this.httpOptions);
  }
  updateUser(Data: user): Observable<any> {
    return this.http.put(this.usersUrl, Data, this.httpOptions);
  }
}
