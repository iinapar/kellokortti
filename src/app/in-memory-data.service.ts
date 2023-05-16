import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { user } from './user';
import { worker } from './worker';
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
        ktunnus: 'FFcc45',
        salasana: 'Tiko',
        saldo: 30,
      },
    ];
    return { users };
  }
  createDbWorkers() {
    const workers: worker[] = [
      {
        tunnus: 'AC2657',
        sisaan: '12/5/2023 08:01',
        ulos: '12/5/2023, 16:03',
        taukoAlku: '12/5/2023, 11:02',
        taukoLoppu: '12/5/2023, 12:05',
      },
      {
        tunnus: 'AD8912',
        sisaan: '12/5/2023 07:03',
        ulos: '12/5/2023, 14:35',
        taukoAlku: '12/5/2023, 09:58',
        taukoLoppu: '12/5/2023, 10:34',
      },
    ];
    return { workers };
  }
  genId(regs: user[]): number {
    return regs.length > 0 ? Math.max(...regs.map((reg) => reg.id)) + 1 : 1;
  }
}
