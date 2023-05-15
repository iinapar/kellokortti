import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { user } from './user';
@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  constructor() {}

  // Testikannassa on vain yksi käyttäjä. Ktunnuksella ja salasanalla kirjaudutaan sisään.
  createDb() {
    const users: user[] = [
      {
        id: 1,
        ktunnus: 'ab7762@student.jamk.fi',
        salasana: 'Miguela88',
        saldo: 10,
      },
    ];
    return { users };
  }
  genId(regs: user[]): number {
    return regs.length > 0 ? Math.max(...regs.map((reg) => reg.id)) + 1 : 1;
  }
}
